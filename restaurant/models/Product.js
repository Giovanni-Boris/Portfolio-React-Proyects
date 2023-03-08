import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    desc: {
      type: String,
      required: true,
      maxlength: 200,
    },
    img: {
      type: String,
      required: true,
    },
    prices: {
      type: [Number],
      required: true,
    },
    extraOptions: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
  
MONGO_URL = mongodb+srv://restaurant-lama:vPeaqmgXRsKj3flj@cluster0.gyngb.mongodb.net/pizza?retryWrites=true&w=majority

ADMIN_USERNAME  = admin
ADMIN_PASSWORD = 123456
TOKEN = Swddfdsfsd||dsd232|sddsdjjj;afa