import { UserProps } from './User';

export interface SessionProps {
  user: UserProps,
  token: string | null
}
