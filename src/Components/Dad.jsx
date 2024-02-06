import { createContext,  } from "react";
import Son from "./Son";
export const AssetProvider = createContext("gold");

const Dad = () => {
 
    return (
        <div>
            <AssetProvider.Provider value="gold">
                <Son></Son>

            </AssetProvider.Provider>
        </div>
    );
};

export default Dad;