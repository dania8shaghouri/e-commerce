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

export const register = async ({
  firstName,
  lastName,
  email,
  password,
}: RegisterParams) => {
  const findUser = await userModel.findOne({ email });
  if (findUser) {
    return { data: "User already exists!", statusCode: 400 };
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new userModel({
    email,
    password: hashedPassword,
    firstName,
    lastName,
  });

  await newUser.save();

  return {
    statusCode: 200,
    data: {
      token: generateJWT({ firstName, lastName, email }),
      message: "Registration successful",
    },
  };
};

// login
interface LoginParams {
  email: string;
  password: string;
}

export const login = async ({ email, password }: LoginParams) => {
  const findUser = await userModel.findOne({ email });

  if (!findUser) {
    return { data: "incorrect email or password", statusCode: 400 };
  }
  // password → kullanıcının login formuna yazdığı düz şifre
  // findUser.password → veritabanındaki HASH’li şifre
  const passwordMatch = await bcrypt.compare(password, findUser.password);
  if (passwordMatch) {
    return {
      statusCode: 200,
      data: {
        token: generateJWT({
          email,
          firstName: findUser.firstName,
          lastName: findUser.lastName,
        }),
        message: "Login successful",
      },
    };
  }
  return {
    statusCode: 400,
    data: { message: "Incorrect email or password" },
  };
};

// my orders
interface GetMyOrdersParams {
  userId: string;
}

export const getMyOrders = async ({ userId }: GetMyOrdersParams) => {
  try {
    const orders = await orderModel.find({ userId }).sort({ createdAt: -1 });

    return {
      data: orders,
      statusCode: 200,
    };
  } catch (err) {
    throw err;
  }
};

const generateJWT = (data: any) => {
  return jwt.sign(data, process.env.JWT_SECRET || "");
};
