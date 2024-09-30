import React, {createContext, useContext, useState, ReactNode, useEffect} from 'react';
import axios from "axios";

interface User {
    email: string;
}

interface UserContextType {
    user: User | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/users/profile',{withCredentials:true})
            .then(data => setUser(data.data))
            .catch(error => console.error(error));
    }, []);


    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
