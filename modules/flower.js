import mongoose,{model,Schema} from "mongoose";

const flowerSchema = new Schema({
    color: String,
    name: String,
    size: String
})

const flower = model("flower",flowerSchema)

export default flower