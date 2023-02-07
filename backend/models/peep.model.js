import mongoose from "mongoose";

const peepSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    message: {
        type: String, required: true
    },
    date: {
        type: String, required: true
    }
});

const Peep = new mongoose.model("Peep", peepSchema);

export default Peep;