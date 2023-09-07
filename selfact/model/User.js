const mongoose = require("mongoose");
const valiator = require("validator");
const bcryptjs = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please provide first name"],
      minlength: 4,
      maxlength: 24,
    },
    lastname: {
      type: String,
      required: [true, "Please provide laST name"],
      minlength: 4,
      maxlength: 24,
    },
    othername: { type: String },
    email: {
      type: String,
      unique: true,
      // required: [true, "Email is required"],
      validate: {
        validator: valiator.isEmail,
        message: "Please provide valid email",
      },
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, "Please provide password"],
    },
    passwordConfirm: {
      type: String,
      minlength: 6,
      required: [true, "Please provide password"],
    },

    role: { type: String, enum: ["admin", "user"], default: "user" },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (passwordToCompare) {
  const isMatch = await bcryptjs.compare(passwordToCompare, this.password);
  return isMatch;
};

module.exports = mongoose.model("User", UserSchema);
