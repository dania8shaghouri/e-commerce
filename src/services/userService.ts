import userModel from "../models/userModel.js";

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
    return { errror: { message: "User already exists!" } };
  }
  const newUser = new userModel({
    email,
    password,
    firstName,
    lastName,
  });

  await newUser.save();

  return newUser;
};

// login
interface LoginParams {
  email: string;
  password: string;
}

export const login = async ({ email, password }: LoginParams) => {
  const findUser = await userModel.findOne({ email });

  if (!findUser) {
    return { error: { message: "incorrect email or password" } };
  }

  const passwordMatch = password === findUser.password;
  if (passwordMatch) {
    return findUser;
  }
  return { error: { message: "incorrect email or password" } };
};
