import React, { createContext, useState, useContext, ReactNode } from 'react';

interface User {
  username: string;
  token: string;
}

interface AppContextType {
  user: User | null;
  updateUser: (userData: User) => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType>({user: null, updateUser: () => {}, logout: () => {}});

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const UpdateUser = (userData: User) => {
    setUser(userData);
  };

  const Logout = () => {
    setUser(null);
  };

  return (
    <AppContext.Provider value={{ user, updateUser: UpdateUser, logout: Logout }}>
      {children}
    </AppContext.Provider>
  );
};



export const useAppContext = () => useContext(AppContext);