import { createContext, useContext } from "react";
import { useAppwrite } from "./useAppwrite";
import { getCurrentUser } from "./appwrite";
interface User {
    $id: string;
    name: string;
    email: string;
    avatar: string;
}
interface GlobalContextType {
    isLoggedIn: boolean;
    user: User | null;
    loading: boolean;
    refetch: (newParams?: Record<string, string | number>) => Promise<void>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const {data: user , loading, refetch} = useAppwrite({
        fn: getCurrentUser
    });

    const isLoggedIn = !!user;

    return <GlobalContext.Provider value={{
        isLoggedIn,
        user ,
        loading,
        refetch
    }}>
        {children}
    </GlobalContext.Provider>
    
}

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (context === undefined) {
        throw new Error("useGlobalContext must be used within a GlobalContextProvider");
    }
    return context;
}