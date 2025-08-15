import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]); // all registered users
  const [currentUser, setCurrentUser] = useState(null); // logged-in user

  const registerUser = (userData) => {
    if (users.find((u) => u.userName === userData.userName)) {
      return { success: false, message: "Username already taken" };
    }
    setUsers([...users, userData]);
    return { success: true };
  };

  const loginUser = (userName, password) => {
    const foundUser = users.find(
      (u) => u.userName === userName && u.password === password
    );
    if (foundUser) {
      setCurrentUser(foundUser);
      return { success: true };
    }
    return { success: false, message: "Invalid username or password" };
  };

  const logoutUser = () => {
    setCurrentUser(null);
  };

  return (
    <UserContext.Provider
      value={{ users, currentUser, registerUser, loginUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
}
