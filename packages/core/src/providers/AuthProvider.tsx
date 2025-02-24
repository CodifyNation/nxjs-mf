import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface User {
  name: string;
  lastName: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  // eslint-disable-next-line no-unused-vars
  setLoggedINState: (user: User) => void;
  user?: User;
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: {
    name: '',
    lastName: '',
  },
  setLoggedINState: () => console.log('not Loaded'),
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLoggedIn, setIsLoggedIN] = useState(false);
  const [user, setUser] = useState<User>({
    name: '',
    lastName: '',
  });

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        setLoggedINState: (user) => {
          setIsLoggedIN(true);
          setUser(user);
        },
        user: user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
