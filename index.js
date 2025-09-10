import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const myApiKey = process.env.API_KEY;

console.log("value : ", myApiKey);

console.log("start of an awesome backened project");
