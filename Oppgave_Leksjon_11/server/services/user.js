import User from '../models/user.js';

export const getUserById = async (id) => User.findById(id);

export const getUserByEmail = async (email, usePassword) => {
  if (usePassword) {
    return User.findOne(email).select('+password');
  }
  return User.findOne(email);
};

export const listUsers = async () => User.find();

export const createUser = async (data) => User.create(data);
