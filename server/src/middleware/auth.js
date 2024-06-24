import jwt from "jsonwebtoken";

//todo possible improvements is to improve overall error handling
//
export const verifyToken = async (req, res, next) => {
   try {
      // from the frontend (req) we're grabbing the 'Authorization' header
      // and the frontend will be setting this (token) and we can grab it in the backend through this *key*
      let token = req.header("Authorization");

      if (!token)
         return res.status(403).send("Access Denied");

      if (token.startsWith("Bearer ")) {
         // basically we will take everything from the right side of Bearer
         // since the token is placed right side after Bearer
         token = token.slice(7, token.length).trimStart();
      }

      const verified = jwt.verify(token, process.env.JWT_SECRET);
      req.user = verified;
      next();
   } catch (e) {
      res.status(500).json
   }
}