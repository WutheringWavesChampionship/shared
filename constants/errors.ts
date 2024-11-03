export enum FieldErrorEnum {
  REQUIRED = 'required',
  PASSWORD_PATTERN = 'passwordPattern',
  PASSWORD_MATCH = 'passwordMatch',
  INVALID_EMAIL = 'notEmail',
  INVALID_PHONE = 'notPhone',
  INVALID_LINK = 'invalidLink',
  CONFIRMATION_CODE = 'confirmationCode',
  LOGIN = 'loginError',
  INVALID_CONFIRMATION_CODE = 'invalidConfirmationCode',
  UNEXPECTED = 'unexpected',
  UNAUTHORIZED = 'unauthorized',
  WRONG_STUFF_EMAIL = 'wrongStuffEmail',
  EMAIL_ALREADY_EXIST = 'emailAlreadyExist',
  FORBIDDEN = 'forbidden',
  TO_MANY_REQUESTS = 'toManyRequests',
  PRICE_MAX_CHARACTERS = 'priceMaxCharacters',
  FINISH_BEFORE_START = 'finishBeforeStart',
  DATE_BEFORE_NOW = 'dateBeforeNow',
  MAX_256 = 'max256',
  MAX_100 = 'max100',
  MAX_60 = 'max60',
  MAX_55 = 'max55',
  MAX_16 = 'max16',
}