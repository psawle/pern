import mongoose from "mongoose";
import User from "../models/userSchema.js";
import { ApiResponse } from "../utils/helper.js";

export const createUser = async (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
  };
  const cuurentUser = await User.create(user);
  res.status(201).json(cuurentUser);
};

export const getUser = async (req, res) => {
  const getUserDetail = await User.find();
  console.log(getUserDetail, "JJJJ");
  res
    .status(200)
    .json(new ApiResponse(getUserDetail, "User fetched successfully ", 200));
};

export const getUserById = async (req, res) => {
  const UserId = req.params.id;
  if (!UserId) {
    res.status(400).json({
      message: "ID is Required",
    });
  }
  const user = await User.findById(UserId);
  res.status(200).json(user);
};

export const deleteUserById = async (req, res) => {
  const UserId = req.params.id;
  const IDCorrect = mongoose.Types.ObjectId.isValid(UserId)
  if (!IDCorrect) {
    res.status(400).json(new ApiResponse(null, "user ID not found", 404));
  }
  const user = await User.findByIdAndDelete(UserId);
  res.status(200).json(user);
};

export const updateUserById = async (req, res) => {
  const UserId = req.params.id;
  const newEmail = req.body.email;
  const newName = req.body.name;
  if (!UserId) {
    res.status(400).json({
      message: "ID is Required",
    });
  }

  if (!newEmail) {
    res.status(400).json({
      message: "Email is Required",
    });
  }

  const updatedUser = await User.findByIdAndUpdate(
    UserId,
    { name: newName, email: newEmail },
    {
      new: true,
    },
  );
  res.status(200).json(updatedUser);
};