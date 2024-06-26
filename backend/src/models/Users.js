const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    hash: { type: String, required: true },
    first_name: { type: String, default: "" },
    last_name: { type: String, default: "" },
    profile_picture_url: { type: String, default: "" }, // Store S3 URL of the profile picture
    profile_banner_url: { type: String, default: "" },
    email: { type: String, required: true },
    phone: { type: String, default: "" },
    birthdate: { type: Date, default: "" },
    gender: {
      type: String,
      enum: ["male", "female", "prefer not to say", ""],
      default: "",
    },
    greeting: { type: String, default: "" },
    self_description: { type: String, default: "" },
    account_status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    role: { type: String, required: true, default: "user" },
    created_at: { type: Date, default: Date.now },

    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { collection: "users" }
);

module.exports = mongoose.model("User", UsersSchema);
