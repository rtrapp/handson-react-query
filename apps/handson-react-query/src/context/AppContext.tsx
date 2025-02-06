import React, { createContext, useState, useContext, ReactNode } from 'react';

interface User {
  username: string;
}

interface AppContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType>({user: null, login: () => {}, logout: () => {}});

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AppContext.Provider value={{ user, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};



export const useAppContext = () => useContext(AppContext);