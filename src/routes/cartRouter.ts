import express from "express";
import { getActiveCartForUser } from "../services/cartService.js";
import validateJwt from "../middlewares/validateJWT.js";

const router = express.Router();

router.get("/", validateJwt, async (req, res) => {
  const userId = (req as any).user._id;
  const cart = await getActiveCartForUser({ userId });
  res.status(200).send(cart);
});
export default router;
