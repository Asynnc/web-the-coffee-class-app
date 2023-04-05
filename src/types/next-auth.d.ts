import 'next-auth';

declare module "next-auth" {
  interface Session {
    user: {
      "user": {
        "_id": string,
        "name": string,
        "userName"?: string,
        "email": string,
        "password": string,
        "avatar"?: null | string,
        "document"?: boolean,
        "address"?: {
          "street"?: string,
          "suite"?: string,
          "city"?: string,
          "zipcode"?: string,
          "phone"?: string,
          "geo"?: {
            "lat"?: string,
            "lng"?: string
          }
        },
        "isActive"?: Boolean,
        "createdAt": Date,
        "updatedAt": Date
      },
      "token": string
    }
  }
}
