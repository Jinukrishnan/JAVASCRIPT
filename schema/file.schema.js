import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String
    },
    image: {
        type: Object
    }
});

export default mongoose.model.Images || mongoose.model("Image", schema);