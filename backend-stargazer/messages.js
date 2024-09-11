import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

import { dag4 } from "@stardust-collective/dag4";

const isAxiosError = (value) => {
  return value === true;
};

const generateActionMessageProof = async (actionMessage, signingAccount) => {
  const encodedMessage = Buffer.from(JSON.stringify(actionMessage)).toString(
    "base64"
  );
  const signature = await dag4.keyStore.dataSign(
    signingAccount.keyTrio.privateKey,
    encodedMessage
  );

  const publicKey = signingAccount.keyTrio.publicKey;
  const uncompressedPublicKey =
    publicKey.length === 128 ? "04" + publicKey : publicKey;

  return {
    id: uncompressedPublicKey.substring(2),
    signature,
  };
};

const generateActionMessageBody = async (actionMessage, signingAccount) => {
  const proof = await generateActionMessageProof(actionMessage, signingAccount);
  const body = { value: actionMessage, proofs: [proof] };
  return body;
};

const sendActionMessage = async (actionMessage, signingAccount) => {
  const body = await generateActionMessageBody(actionMessage, signingAccount);

  let response;
  try {
    console.log("Sending Action Message:");
    console.log(JSON.stringify(body, null, 2));

    response = await axios.post(process.env.METAGRAPH_L0_URL + "/data", body);

    console.log("Response Data");
    console.log(JSON.stringify(response.data, null, 2));
  } catch (e) {
    if (isAxiosError(e)) {
      console.log(`Status: ${e.status}`);
      console.log(JSON.stringify(e.response?.data, null, 2));
      throw new Error("Send Action Message Error: See above for details");
    }
    throw e;
  }

  return JSON.stringify(response.data); 
};

export {
  generateActionMessageProof,
  generateActionMessageBody,
  sendActionMessage,
};
