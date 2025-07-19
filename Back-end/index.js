// Load environment variables
require("dotenv").config();

const port = process.env.PORT || 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());

// CORS configuration
const corsOptions = {
  origin: process.env.CORS_ORIGIN
    ? process.env.CORS_ORIGIN.split(",")
    : [
        "http://localhost:3000",
        "http://localhost:5173",
        "http://localhost:5174",
        "https://e-commerce-shopper-front-end.onrender.com",
      ],
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Database connection with mongo db
mongoose.connect(process.env.MONGODB_URI);

//API Creation

app.get("/", (req, res) => {
  res.send("Express App is Running...");
});

// image storage Engine

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
  // limits: { fileSize: 1000000 },
});

// Creating upload endpoint for images
app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  try {
    res.json({
      success: 1,
      image_url: `/images/${req.file.filename}`,
    });
    // return res.status(200).json(req.file.path);
  } catch (error) {
    console.error(error);
  }
});

//Scema for creating product

const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
  // description: String,
});

app.post("/addproduct", async (req, res) => {
  try {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
      let last_product_array = products.slice(-1);
      let last_product = last_product_array[0];
      id = last_product.id + 1;
    } else {
      id = 1;
    }
    const product = new Product({
      id: id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
      success: true,
      name: req.body.name,
    });

    // res.status(200).json(product);
    // const product = await Product.create(req.body);
  } catch (error) {
    console.error(error);
  }
});

// Creating API for Deleting product

app.post("/deleteproduct", async (req, res) => {
  try {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("Deleted");
    res.json({
      success: true,
      name: req.body.name,
    });
    // res.status(200).json("Deleted");

    // const product = await Product.findByIdAndDelete(req.body.id);
    // res.status(200).json(product);
  } catch (error) {
    console.error(error);
  }
});

// Creating API for getting all products
app.get("/allproducts", async (req, res) => {
  try {
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.header();
    res.send(products);

    // res.json(products);
  } catch (error) {
    console.error(error);
  }
});

// Schema for user Model
const Users = mongoose.model("User", {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cartData: {
    type: Object,
    // default: []
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//creating endpoint for registering user
app.post("/register", async (req, res) => {
  try {
    let check = await Users.findOne({ email: req.body.email });
    if (check) {
      return res
        .status(400)
        .json({ success: false, error: "Email already exists" });
    }
    let cart = {};
    for (let i = 0; i < 100; i++) {
      cart[i] = 0;
    }
    const user = new Users({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      cartData: cart,
    });
    await user.save();
    const data = {
      user: {
        id: user.id,
      },
    };
    const authToken = jwt.sign(data, process.env.JWT_SECRET);
    res.status(200).json({ success: true, authToken });
  } catch (error) {
    console.error(error);
  }
});

// creating endpoint for user login
app.post("/login", async (req, res) => {
  try {
    let user = await Users.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ success: false, error: "User not found" });
    }
    if (user.password !== req.body.password) {
      return res.status(400).json({ success: false, error: "Wrong Password" });
    }
    const data = {
      user: {
        id: user.id,
      },
    };
    const authToken = jwt.sign(data, process.env.JWT_SECRET);
    res.status(200).json({ success: true, authToken });
  } catch (error) {
    console.error(error);
  }
});

// creating endpoint for new collection data.
app.get("/newcollections", async (req, res) => {
  try {
    let products = await Product.find({});
    let newcollections = products.slice(1).slice(-8);
    console.log("New Collections Fetched");
    res.send(newcollections);

    // res.status(200).json(collections);
  } catch (error) {
    console.error(error);
  }
});

// endpoint for popular in women category
app.get("/popularinwomen", async (req, res) => {
  try {
    let products = await Product.find({ category: "women" });
    let popularwomen = products.slice(1).slice(-4);
    console.log("Popular Women Fetched");
    res.send(popularwomen);

    // res.status(200).json(popularwomen);
  } catch (error) {
    console.error(error);
  }
});

//creating middleware to fetch user
const fetchuser = async (req, res, next) => {
  const token = req.header("authToken");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  } else {
    try {
      const data = jwt.verify(token, process.env.JWT_SECRET);
      req.user = data.user;
      next();
    } catch (error) {
      res
        .status(401)
        .send({ error: "Please authenticate using a valid token" });
      console.error(error);
    }
  }
};

//endpoint for adding product to cartData;

app.post("/addtocart", fetchuser, async (req, res) => {
  try {
    console.log("Added", req.body.id);
    let userData = await Users.findOne({ _id: req.user.id });
    if (!userData) {
      return res.status(400).json({ success: false, error: "User not found" });
    }
    userData.cartData[req.body.id] += 1;
    // await userData.save();
    await Users.findOneAndUpdate(
      { _id: req.user.id },
      { cartData: userData.cartData }
    );
    // res.status(200).json({success:true});

    res.send("Added");
    // console.log(req.body,req.user);
  } catch (error) {
    console.error(error);
  }
});

//remove product from cart
app.post("/removefromcart", fetchuser, async (req, res) => {
  try {
    console.log("Removed", req.body.id);
    let userData = await Users.findOne({ _id: req.user.id });
    if (!userData) {
      return res.status(400).json({ success: false, error: "User not found" });
    }
    if (userData.cartData[req.body.id] > 0) {
      userData.cartData[req.body.id] -= 1;
    }
    // await userData.save();
    await Users.findOneAndUpdate(
      { _id: req.user.id },
      { cartData: userData.cartData }
    );
    // res.status(200).json({success:true});

    res.send("Removed");

    // console.log(req.body,req.user);
  } catch (error) {
    console.error(error);
  }
});

//creating endpoint to get cartData

app.post("/getcartdata", fetchuser, async (req, res) => {
  try {
    let userData = await Users.findOne({ _id: req.user.id });
    if (!userData) {
      return res.status(400).json({ success: false, error: "User not found" });
    }
    res.json(userData.cartData);
    // res.send(userData.cartData);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, (error) => {
  if (!error) {
    console.log(`Example app listening on port ${port}`);
  } else {
    console.error(error);
    throw error;
  }
});
