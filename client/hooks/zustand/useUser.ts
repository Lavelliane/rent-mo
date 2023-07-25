// useUser.ts

import { create } from 'zustand';

interface IUser {
    user: User;
    location: string
}

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string | ''; 
  phoneNumber: string;
  city: string;
  state: string;
  country: string;
  __v: number;
};

type UserState = {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
};

export const useUser = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set((state) => ({
    user
  })),
}));


  
