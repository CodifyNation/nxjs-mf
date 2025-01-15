import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface AuthContextType {
  isLoggedIn: boolean
  setLoggedINState: (test: boolean) => void
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setLoggedINState: () => console.log('not Loaded')
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {

  const [ isLoggedIn, setIsLoggedIN] = useState(false)



  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, setLoggedINState: (test) =>setIsLoggedIN(test)}}>
      {children}
    </AuthContext.Provider>
  );
};
