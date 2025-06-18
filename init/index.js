const mongoose = require("mongoose");
const initData = require("./data.js");
const listing = require("../models/medicineList.js");


const MONGO_URL = "mongodb://127.0.0.1:27017/MedicinalInventory";

async function main()
{
  await mongoose.connect(MONGO_URL);
}

main().then(()=>{
  console.log("Connected to DB");
})
.catch((err)=>{
  console.log(err);
})

const initDB = async () =>{
  await listing.deleteMany({});
  await listing.insertMany(initData.data);
  console.log("Data was initialize");
}

initDB();