export enum API_ROUTES_ENUM {
  IMAGE_CURRENT,

  AUTH_LOGIN,
  AUTH_REGISTRATION,

  ME,
  USER_CURRENT,
}

export const API_ROUTES: Record<API_ROUTES_ENUM, string> = {
  [API_ROUTES_ENUM.IMAGE_CURRENT]: '/api/image/:id',

  [API_ROUTES_ENUM.USER_CURRENT]: '/api/user/:id',
  [API_ROUTES_ENUM.ME]: '/api/me',

  [API_ROUTES_ENUM.AUTH_LOGIN]: '/api/auth/login',
  [API_ROUTES_ENUM.AUTH_REGISTRATION]: '/api/auth/registration',
};
