import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { orderModel } from "../models/orderModel.js";

interface RegisterParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
// Kullanıcı giriş yaptıktan sonra kimlik doğrulaması için
// 1 saat geçerli bir JWT (JSON Web Token) oluşturur.
const generateJWT = (data: any) => {
  return jwt.sign(data, process.env.JWT_SECRET as string, {
    expiresIn: "1h",
  });
};
// ---------------- REGISTER ----------------
// Yeni kullanıcı kaydı oluşturur.
export const register = async ({
  firstName,
  lastName,
  email,
  password,
}: RegisterParams) => {
  const findUser = await userModel.findOne({ email });

  if (findUser) {
    throw new Error("User already exists!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new userModel({
    email,
    password: hashedPassword,
    firstName,
    lastName,
    role: "customer",
  });

  await newUser.save();

  return {
    message: "Registration successful",
  };
};

// ---------------- LOGIN ----------------
interface LoginParams {
  email: string;
  password: string;
}
// Kullanıcının giriş bilgilerini doğrular.
// E-posta ve şifreyi kontrol eder, başarılıysa
// JWT oluşturup kullanıcıya token döndürür.
export const login = async ({ email, password }: LoginParams) => {
  const findUser = await userModel.findOne({ email });

  if (!findUser) {
    throw new Error("Incorrect email or password");
  }

  const passwordMatch = await bcrypt.compare(password, findUser.password);

  if (!passwordMatch) {
    throw new Error("Incorrect email or password");
  }
  if (!findUser.role) {
    findUser.role = "customer";
    await findUser.save();
  }

  return {
    token: generateJWT({
      userId: findUser._id,
      role: findUser.role,
    }),
    role: findUser.role,
    message: "Login successful",
  };
};

// ---------------- ORDERS ----------------
interface GetMyOrdersParams {
  userId: string;
}
// Giriş yapan kullanıcıya ait siparişleri en yeni tarihten eskiye doğru getirir
export const getMyOrders = async ({ userId }: GetMyOrdersParams) => {
  const orders = await orderModel.find({ userId }).sort({ createdAt: -1 });

  return orders;
};
