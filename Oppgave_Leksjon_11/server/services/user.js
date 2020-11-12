import User from '../models/user.js';

export const getUserById = async (id) => User.findById(id);

export const listUsers = async () => User.find();

export const createUser = async (data) => User.create(data);
