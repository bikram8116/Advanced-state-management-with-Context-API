import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export function InputProvider({ children }) {
    const [datas, setData] = useState("");
    console.log("Called InpurProvider");
    return (
        <div>
            <DataContext.Provider value={{ datas, setData }}>
                {children}
            </DataContext.Provider>
        </div>
    )
}
export default InputProvider;
export const useInput = () => useContext(DataContext);