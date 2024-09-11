import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import fs from "fs";
import path from "path";
import { PinataSDK } from "pinata-web3";
import { Blob } from "buffer";
import mintcollection from "./mint-collection.js";
import mintcollectionnft from "./mint-collection-nft.js";
import { fileURLToPath } from "url";
import UUID from "uuid-int";

const port = process.env.PORT || 30000;

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const id = 0;
const generator = UUID(id);
const uuid = generator.uuid();

const pinata = new PinataSDK({
  pinataJwt: process.env.PINATA_JWT,
  pinataGateway: process.env.GATEWAY_URL,
});

const JWT = process.env.PINATA_JWT;

const app = express();

//app.use(express.json());
app.use(express.json({ limit: "50mb" })); // Adjust limit as needed
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.post("/mintcollection", async (req, res) => {
  const { name } = req.body;
  console.log("name is: ", name);
  let serverResponse = await mintcollection(name);
  res.send(serverResponse);
});


app.post("/mintcollectionnft", async (req, res) => {

  const { nftUri } = req.body;

  console.log(uuid); // 3270411116609537

  const nftOwner = "";
  const collectionId =
    "";
  const nftId = uuid;
  const nftName = `fire-${nftId}`;
  const nftDescription = `fire demo ${nftId}`;

  let result = await mintcollectionnft(
    nftOwner,
    collectionId,
    nftId,
    nftUri,
    nftName,
    nftDescription
  );
  console.log("result after upload: ", result);
  let serverResponse = await mintcollectionnft(
    nftOwner,
    collectionId,
    nftId,
    nftUri,
    nftName,
    nftDescription
  );
  res.send(serverResponse);
});

// app.post("/upload", async (req, res) => {
//   const imageData = req.body.image;

//   // Decode the Base64 string
//   const buffer = Buffer.from(imageData, "base64");

//   //const now = Date.now();
//   const now = new Date();
//   const formattedDate = now.toISOString();
//   console.log(formattedDate);

//   const src = `${formattedDate}.jpg`;

//   console.log(__dirname);

//   //const filePath = path.join(__dirname, src)

//   //timestamp = now.strftime("%m-%d-%Y_%H-%M-%S-%f");

//   // Save the image to a file
//   fs.writeFile(src, buffer, (err) => {
//     if (err) {
//       console.error("Error writing image file:", err);
//       res.status(500).send("Error saving image");
//     } else {
//       console.log("Image saved successfully");
//     }
//   });

//   // const fileBuffer = fs.readFileSync("./2024-09-11T14:54:46.148Z.jpg");
//   // const charsetMatch = detectCharacterEncoding(fileBuffer);

//   // console.log(charsetMatch);

//   //   var fileBuffer = fs.readFileSync("./2024-09-11T14:54:46.148Z.jpg");
//   // console.log(encoding.detect(fileBuffer))

//   //const filePath = process.cwd() + "/" + `${formattedDate}.jpg`;

//  

//   // Upload detection file to IPFS via Pinata
//   try {
//     const blob = new Blob([fs.readFileSync(src, "UTF-8")]);
//     const file = new File([blob], "pinnie", { type: "image/jpeg" });
//     const upload = await pinata.upload.file(file);
//     console.log(upload);
//     console.log(upload.IpfsHash);

//     const id = 0;
//     const generator = UUID(id);
//     const uuid = generator.uuid();
//     console.log(uuid); // 

//     const nftOwner = "";
//     const collectionId =
//       "";
//     const nftId = uuid;
//     const nftUri = ``;
//     const nftName = `fire-${nftId}`;
//     const nftDescription = `fire demo ${nftId}`;

//     let result = await mintcollectionnft(
//       nftOwner,
//       collectionId,
//       nftId,
//       nftUri,
//       nftName,
//       nftDescription
//     );
//     console.log("result after upload: ", result);
//   } catch (error) {
//     console.log(error);
//   }

//   // Store the IPFS hash in the Metagraph

//   res.status(200).send("Image uploaded");
// });

app.listen(port, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port} : http://localhost:${port}`
  )
);
