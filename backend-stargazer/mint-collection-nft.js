import { dag4 } from "@stardust-collective/dag4";
import { sendActionMessage } from "./messages.js";
import dotenv from "dotenv";
dotenv.config();

const mintcollectionnft = async(nftOwner, collectionId, nftId, nftUri, nftName, nftDescription) => {
  const account = dag4.createAccount(process.env.PRIVATE_KEY);

await sendActionMessage(
  {
    MintNFT: {
      owner: nftOwner,
      collectionId: collectionId,
      nftId: parseInt(nftId),
      uri: nftUri,
      name: nftName,
      description: nftDescription,
      metadata: {},
    },
  },
  account
);
}

export default mintcollectionnft








