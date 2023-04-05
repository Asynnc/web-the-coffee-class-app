import { OrderProps } from "./Order"

export interface UserProps {
  _id: string,
  name: string,
  userName?: string,
  email: string,
  password: string,
  avatar?: null | string,
  document?: boolean,
  address?: {
    street?: string,
    suite?: string,
    city?: string,
    zipcode?: string,
    phone?: string,
    geo?: {
      lat?: string,
      lng?: string
    }
  },
  isActive?: Boolean,
  createdAt: Date,
  updatedAt: Date,
  orders?: Array<OrderProps>
}