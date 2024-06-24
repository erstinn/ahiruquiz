import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; //way to a user a web token that they can use for authorization
import User from "../models/User.js"

export const register = async (req, res) => {
   try {
      const { //send this object to the frontend
         username,
         password,
         email,
         picPath,
      } = req.body; //destructure info you get from the frontend (req.body)

      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);

      const newUser = new User({
         username,
         password: passwordHash,
         email,
         picPath
      })
      const savedUser = await newUser.save();
      res.status(201).json(savedUser); //sent status code 201 to frontend and send user JSON with it; and the frontend receives this response

   } catch (e) {
      res.status(500).json({e: e.message}); //send error message returned by mongodb
   }
}

export const login = async (req, res) => {
   /** === Authentication ===
    * in a production environment is not as simple as this either the company itself
    * has their own library for it or a team is assigned to focus on authentication implementation
    */
   try {
      const {username, email, password} = req.body
      const user = await User.findOne({email: email});
      if (!user)
         return res.status(400).json({msg: "User not found"});

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
         return res.status(400).json({msg: "Invalid password"})

      const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
      delete user.password; //ensure password is not sent to frontend
      res.status(200).json({token, user});

   } catch (e) {
      res.status(500).json({e: e.message}); //send error message returned by mongodb
   }
}