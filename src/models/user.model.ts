export interface User {
  email: string;
  password: string;
}

export interface Token {
  id: number;
  plataform: string;
  token: string;
  user_id: number;
}

export interface UserState {
  created_on?: any;
  email: string;
  id: number;
  last_login?: any;
  last_name: string;
  name: string;
  password: string;
  public_id: string;
  status: number;
  tokens: Token[];
  user_type: number;
  time_zone: string;
  userattributionrule?: any[];
  image_name: string;
  type_currency: string;
  usersub: any[];
  rgpd: boolean;
}

export interface UserInfo {
  token: string;
  user: UserState;
  dataRegister: {};
  isLoading: boolean;
  userEdit: any;
  profilePicture: string;
  pictureTime: any;
  deleteProfilePicture: string;
  email: string
}

export interface RegisterUser {
  name: string;
  last_name: string;
  email: string;
  password: string;
  image_name: string;
  status: number;
  user_type: number;
  time_zone: string;
  type_currency: string;
  validatePassword?: string,
}