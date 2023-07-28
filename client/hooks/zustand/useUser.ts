// useUser.ts

import { create } from 'zustand';
import { persist, createJSONStorage } from "zustand/middleware";

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

export const useUser = create(
  persist(
    (set, _get) => ({
      user: null,
      setUser: (user: any) => set({user})
    }),
    {
    
      storage: createJSONStorage(() => sessionStorage),
      name: 'user-storage'
    }
  )
)

// export const useUser = create<UserState>(persist((set) => ({
//   user: null,
//   setUser: (user) => set((state) => ({
//     user
//   })),
// }), {
//   name:'user-storage',
//   storage: createJSONStorage(() => sessionStorage)
// }));


  
