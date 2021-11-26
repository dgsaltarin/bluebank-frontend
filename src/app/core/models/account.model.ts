import {User} from "./user.model";

export interface Account {
  id: number,
  user: User,
  balance: number
  number: number
}
