import { createContext, useState } from "react";

// Context
export const CardContext = createContext<any | null>(null)

// Types
type ContextComponentProps = {
    children: React.ReactNode;
}

// Functional Component
export default function ContextComponent({children}: ContextComponentProps) {
    // Variables
    const [flipped, setFlipped] = useState({})

    // Rendering
    return(
        <CardContext.Provider value={{flipped, setFlipped}}>
            {children}
        </CardContext.Provider>
    )
}