import { useContext } from "react";
import { AssetProvider } from "./Dad";


const Son = () => {
    const gift = useContext(AssetProvider);
    return (
        <div>
            <p>has {gift}</p>
        </div>
    );
};

export default Son;