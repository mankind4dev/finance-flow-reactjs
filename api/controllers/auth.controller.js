import Finance from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { handleError } from "../utilities/error.js";

export const signup = async (req, res, next) => {
  const { companyName, email, country, password } = req.body;
  if (
    !companyName ||
    !email ||
    !country ||
    !password ||
    companyName === "" ||
    email === "" ||
    country === "" ||
    password === ""
  ) {
    next(handleError(400, "All field reqiured"));
  }
  try {
    const existingUser = await Finance.findOne({ email });
    if (existingUser) {
      return next(handleError(400, "User already exixt with the email"));
    }
    const hashedPass = bcryptjs.hashSync(password, 10);
    const newUser = new Finance({
      companyName,
      email,
      country,
      password: hashedPass,
    });
    await newUser.save();
    res.json("Congratulation, User created successfully");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  // if (!email || !password || email === "" || password === "") {
  //   next(handleError(400, "All field required"));
  // }
  try {
    const validUsers = await Finance.findOne({ email });
    if (!validUsers) return next(handleError(404, "User not found"));
    const validPassword = bcryptjs.compareSync(password, validUsers.password);
    if (!validPassword)  return next(handleError(401, "Wrong credientials"));
 
    const token = jwt.sign(
      { id: validUsers._id },
      process.env.JWT_SECRET_COOKIE
    );
    const { password: pass, ...rest } = validUsers._doc;
    res
      .cookie("finance_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res) => {
  const { companyName, email, password, country, googlePhotoUrl } = req.body;
  try {
    const users = await Finance.findOne({ email: req.body.email });
    if (users) {
      const token = jwt.sign({ id: users._id }, process.env.JWT_SECRET_COOKIE);
      const { password: pass, ...rest } = users._doc;
      res
        .cookie("finance_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const generateCompanyName =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const newUsers = new Finance({
        companyName: generateCompanyName,
        email: req.body.email,
        country: req.body.country,
        password: hashedPassword,
        avatar: req.body.photo,
      });
      await newUsers.save();
      const token = jwt.sign(
        {
          id: newUsers._id,
        },
        process.env.JWT_SECRET_COOKIE
      );
      const { password: pass, ...rest } = newUsers._doc;
      res
        .cookie("finance_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    }
  } catch (error) {}
};
