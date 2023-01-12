import { FC } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../store";

const PersistProvider: FC = ({ children }) => {
    return (
        <PersistGate loading={null} persistor={persistor}>
            {children}
        </PersistGate>
    );
};

export default PersistProvider;
