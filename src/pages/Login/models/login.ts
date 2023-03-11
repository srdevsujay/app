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
}

export interface UserInfo {
  token: string;
  user: UserState;
}