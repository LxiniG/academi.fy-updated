import React, { createContext, useContext, useState } from 'react';

interface AuthFlowData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    interests: string[];
}

interface AuthFlowContextType {
    flowData: AuthFlowData;
    updateFlowData: (data: Partial<AuthFlowData>) => void;
    resetFlowData: () => void;
}

const initialFlowData: AuthFlowData = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    interests: [],
};

const AuthFlowContext = createContext<AuthFlowContextType | undefined>(undefined);

export function AuthFlowProvider({ children }: { children: React.ReactNode }) {
    const [flowData, setFlowData] = useState<AuthFlowData>(initialFlowData);

    const updateFlowData = (data: Partial<AuthFlowData>) => {
        setFlowData(prev => ({ ...prev, ...data }));
    };

    const resetFlowData = () => {
        setFlowData(initialFlowData);
    };

    return (
        <AuthFlowContext.Provider value={{ flowData, updateFlowData, resetFlowData }}>
            {children}
        </AuthFlowContext.Provider>
    );
}

export function useAuthFlow() {
    const context = useContext(AuthFlowContext);
    if (context === undefined) {
        throw new Error('useAuthFlow must be used within an AuthFlowProvider');
    }
    return context;
}
