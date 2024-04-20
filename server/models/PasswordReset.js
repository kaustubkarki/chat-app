import mongoose, { Schema } from "mongoose";

const passwordResetSchems = new mongoose.Schema({
  userId: { type: String, unique: true },
  email: { type: String, unique: true },
  token: String,
  createdAt: Date,
  expiresAt: Date,
});

const PasswordReset = mongoose.model("PasswordReset", passwordResetSchems);

export default PasswordReset;
