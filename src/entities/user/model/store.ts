import { User } from '@/entities/user/model/type';
import { create } from 'zustand';

export interface State {
  user: User;
}

export interface Action {
  setUser: (user: User) => void;
  deleteUser: () => void;
}

const DEFAULT_USER = {
  name: '',
  email: '',
  imageUrl: '',
};

export const useUserStore = create<State & Action>()((set) => ({
  user: DEFAULT_USER,
  setUser: (user) => set(() => ({ user })),
  deleteUser: () =>
    set(() => ({
      user: DEFAULT_USER,
    })),
}));
