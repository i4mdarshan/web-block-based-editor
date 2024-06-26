export type IUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  imageURL: string;
};

export type INewUser = {
  name: string;
  email: string;
  username?: string;
  password: string;
};

export type IContextType = {
  user: IUser;
  isLoading: boolean;
  isAuthenticated: boolean;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  checkUserAuthorization: () => Promise<boolean | undefined>;
};

export interface INavLink {
  title: string
  label?: string
  href: string
  icon: JSX.Element
}
