import mongoose from "mongoose";

const DemoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for this pet."],
  },
});

export default mongoose.models.Demo || mongoose.model("Demo", DemoSchema);
