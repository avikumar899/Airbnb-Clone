const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema ({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        filename: {
            type: String,
            default: "listingimage",
        },
        url:{
            type: String,
            default: "https://plus.unsplash.com/premium_photo-1757100707921-070878fe3796?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
            set: (v) => v === "" ? "https://plus.unsplash.com/premium_photo-1757100707921-070878fe3796?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470" : v,
        },
    },
    price: {
        type: Number,
        required:true,
        min: 0
        },
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;