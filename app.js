const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const listing = require("./models/medicineList");
const flash = require("connect-flash");
const session = require("express-session");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");

const { GoogleGenerativeAI } = require("@google/generative-ai");



const MONGO_URL = "";

async function main() {
  mongoose.connect(MONGO_URL);
}

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));


const sessionOption = {
  secret:"mySuperSecretCode",
  resave: false,
  saveUniitialized: true,
}


app.get("/swasthyasetu", async (req, res) => {
  const allListings = await listing.find({});
    let date  = new Date();
  let val = date.getFullYear()+"-"+(date.getMonth()+2)+"-"+date.getDate();
  val = new Date(val).toISOString().split('T')[0];
  res.render("./listings/listings.ejs", { allListings , val});
});

app.use(session(sessionOption));
app.use(flash());

app.use((req,res,next)=>{
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});


//form for new medicine
app.get("/swasthyasetu/new", (req, res) => {
  res.render("./listings/new.ejs");
});

//adding new medicine
app.post("/swasthyasetu", async (req, res ) => {
  const newMedicine = new listing(req.body.listing);
  const medicine = req.body.listing;
  let date  = new Date();
  let val = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
  let enteredDate = medicine.manufactureDate.toString();
  val = val.toString();
  if(medicine.manufactureDate>medicine.expiryDate || enteredDate>val)
  {
    let err= { statusCode : 500, message : "Date Entered is Invalid !!" };
    return res.render("error.ejs", { err });
  }
  else
  {
    await newMedicine.save();
    req.flash("success","New Medicine added!");
    return  res.redirect("/swasthyasetu");
  }   
});

//Ask AI
app.get("/swasthyasetu/getHelp", async (req, res) => {
  let value = "";
  let input="";
  res.render("./listings/getHelp.ejs", { input,value });
});

app.put("/swasthyasetu/getHelp", async (req, res) => {
  let input = req.body.input;
  const genAI = new GoogleGenerativeAI(
    ""//enter your gemini key
  );
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  let value = "";
  const test = async () => {
    try {
      // Wait for the result from the model's generateContent method
      const result = await model.generateContent(input);

      // Extract the generated text from the response
      value = result.response.text(); // Ensure this is the correct way to get the text


      // Render the EJS page with the input and value
      res.render("./listings/getHelp.ejs", { input, value });
    } catch (error) {
      // Handle any potential errors
      console.error("Error generating content:", error);
      res.status(500).send("An error occurred while generating content.");
    }
  };
  test();
});

//get stock of medicines that are out of stock 
app.get("/swasthyasetu/stockCheck",async (req,res)=>{
    const allListings = await listing.find({});
    let date  = new Date();
  let val =date.getFullYear()+"-"+(date.getMonth()+2)+"-"+date.getDate();
  val = new Date(val).toISOString().split('T')[0];
  
  res.render("./listings/stockCheck.ejs",{ allListings,val});
});

//Show form
app.get("/swasthyasetu/:id", async (req, res) => {
  let { id } = req.params;
  const Listing = await listing.findById(id);
  res.render("./listings/show.ejs", { Listing });
});

//Edit form
app.get("/swasthyasetu/:id/edit", async (req, res) => {
  let { id } = req.params;
  const listings = await listing.findById(id);
  res.render("./listings/edit.ejs", { listings });
});




//Update medicine info
app.put("/swasthyasetu/:id", async (req, res) => {
  let { id } = req.params;
  let listings = await listing.findByIdAndUpdate(id, { ...req.body.listing });
  const medicine = req.body.listing;
  let date  = new Date();

  //Validating our date condition 
  let val = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
  let enteredDate = medicine.manufactureDate.toString();
  val = val.toString();
  if(medicine.manufactureDate>medicine.expiryDate || enteredDate>val)
  {
    let err= { statusCode : 500, message : "Date Entered is Invalid !!" };
    return res.render("error.ejs", { err });
  }
  await listings.save();
  req.flash("success","Data successfully updated");
  res.redirect(`/swasthyasetu/${id}`);
});

//delete medicine
app.delete("/swasthyasetu/:id", async (req, res) => {
  let { id } = req.params;
  await listing.findByIdAndDelete(id);
  req.flash("success","Medicine Succesfully Deleted");
  res.redirect(`/swasthyasetu`);
});

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something Went Wrong!" } = err;
  res.status(statusCode).render("error.ejs", { err });
  // res.status(statusCode).send(message);
});

app.listen(1102, () => {
  console.log("Serve is listening to port 1102");
});
