import { sendActionMessage } from "./messages.js";
import { dag4 } from '@stardust-collective/dag4';
import dotenv from "dotenv";
dotenv.config();

const mintcollection = async(collectionName) => {

  const account = dag4.createAccount(process.env.PRIVATE_KEY);

  console.log("account is: ", account)

  console.log(`Account Details`);
  console.dir(account.keyTrio, {});
  
  await sendActionMessage(
    {
      MintCollection: { name: collectionName },
    },
    account
  );
}

export default mintcollection








