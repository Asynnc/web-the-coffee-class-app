import 'next-auth';

declare module "next-auth" {
  interface Session {
    user: {
      "user": {
        "id": string,
        "nome": string,
        "email": string,
        "avatar": null | string,
        "ativo": boolean,
        "tipo": string,
        "ultimo_login": Date,
        "created_at": Date,
        "updated_at": Date
      },
      "token": string
    }
  }
}
