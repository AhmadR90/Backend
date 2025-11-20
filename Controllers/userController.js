import User from "../Models/userSchema.js";

export const createUser = async (req, res) => {
  try {
    const otp = crypto.randomInt(100000, 999999).toString();
    const user = await User.create(req.body, otp);
    res.json(user);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    res.json({ error: error.message });
  }
};
