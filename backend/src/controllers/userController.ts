import type { Request, Response } from "express";
import type { ExtendRequest } from "../types/extendedRequest.js";

import {
  register,
  login,
  getMyOrders,
} from "../services/userService.js";

// ---------------- REGISTER ----------------
// Yeni kullanıcı kaydı isteğini işleyip sonucu istemciye döndürür.
export const registerUser = async (req: Request, res: Response) => {
  try {
    const result = await register(req.body);

    res.status(200).json(result);
  } catch (err: any) {
    res.status(400).json({
      message: err.message,
    });
  }
};

// ---------------- LOGIN ----------------
// Kullanıcı giriş isteğini işleyip başarılıysa JWT bilgilerini döndürür.
export const loginUser = async (req: Request, res: Response) => {
  try {
    const result = await login(req.body);

    res.status(200).json(result);
  } catch (err: any) {
    res.status(400).json({
      message: err.message,
    });
  }
};

// ---------------- MY ORDERS ----------------
// Giriş yapan kullanıcının siparişlerini getirip istemciye döndürür. 
export const getOrders = async (
  req: ExtendRequest,
  res: Response,
) => {
  try {
    const userId = req.user?._id;

    const orders = await getMyOrders({
      userId,
    });

    res.status(200).json(orders);
  } catch (err: any) {
    res.status(500).json({
      message: err.message,
    });
  }
};