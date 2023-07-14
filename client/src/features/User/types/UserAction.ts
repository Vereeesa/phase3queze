import { User } from './User';

export type UserAction =
  | { type: 'auth/reg'; payload: User }
  | { type: 'auth/log'; payload: User }
  | { type: 'auth/check'; payload: User }
  | { type: 'auth/logout' };
