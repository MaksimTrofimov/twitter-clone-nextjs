import User from '@/src/models/User.js';
import { hashPassword } from '@src//lib/utils/hashPassword.js';

export const userRepository = {
  create: async (data) => {
    try {
      if (data.password) {
        data.password = await hashPassword(data.password);
      }
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },

  findByEmail: async (email) => {
    if (!email) return null;
    return await User.findOne({ email: email.toLowerCase() }).exec();
  },

  findByUsername: async (username) => {
    if (!username) return null;
    return await User.findOne({ username: username.trim() }).exec();
  },

  findById: async (id) => {
    if (!id) return null;
    return await User.findById(id).exec();
  },
};
