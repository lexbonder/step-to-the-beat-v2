export interface ILogin {
  accessToken: string;
  saveAccessToken: (accessToken: string) => void;
};
