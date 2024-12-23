import Finance from "../models/user.model.js";
import { handleError } from "../utilities/error.js";
import bcryptjs from "bcryptjs";

export const test = async (req, res) => {
  res.json({
    message: "Finance API working perfect",
  });
};

export const update = async (req, res, next) => {
  // if (req.finance.id !== req.params.id) 
  //   return next(handleError(401, "You can only update your own account!"));
  
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updateUser = await Finance.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
        //  {
        //   companyName: req.body.companyName,
        //   email: req.params.email,
        //   password: req.body.password,
        //   country: req.body.country,
        //   avatar: req.body.avatar,
        // },
      },
      { next: true }
    );
    if (!updateUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    const {password, ...rest} = updateUser._doc
      res.status(200).json(rest) 
  } catch (error) {
    next(error)
  }
};
