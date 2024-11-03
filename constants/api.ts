export enum API_ROUTES_ENUM {
  IMAGE_CURRENT,

  AUTH_LOGIN,
  AUTH_REGISTRATION,

  ME,
  MY_IMAGE,

  USER_CURRENT,
  USER_CURRENT_IMAGE,
}

export const API_ROUTES: Record<API_ROUTES_ENUM, string> = {
  [API_ROUTES_ENUM.IMAGE_CURRENT]: '/api/image/:id',

  [API_ROUTES_ENUM.USER_CURRENT]: '/api/user/:id',
  [API_ROUTES_ENUM.USER_CURRENT_IMAGE]: '/api/user/:id/image',
  [API_ROUTES_ENUM.ME]: '/api/me',
  [API_ROUTES_ENUM.MY_IMAGE]: '/api/me/image',

  [API_ROUTES_ENUM.AUTH_LOGIN]: '/api/auth/login',
  [API_ROUTES_ENUM.AUTH_REGISTRATION]: '/api/auth/registration',
};
