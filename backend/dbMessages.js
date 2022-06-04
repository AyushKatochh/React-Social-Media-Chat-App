import mongoose from "mongoose";

const whatsappSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean,
});

// ES6 way to export
export default mongoose.model('messageContent', whatsappSchema);
