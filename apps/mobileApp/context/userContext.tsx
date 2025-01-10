import React, { createContext, useState, useContext } from "react";

// Create Context with default value
const UserContext = createContext({
    userData: {
        phoneNumber: "",
        hash: "",
        ifUserExists: false,
    },
    setUserData: (p0: { phoneNumber: any; hash: any; ifUserExists: any; }) => {}, // Placeholder function
});

// Provider Component
export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        phoneNumber: "",
        hash: "",
        ifUserExists: false,
    });

    return (
        
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom Hook to use User Context
export const useUser = () => useContext(UserContext);
