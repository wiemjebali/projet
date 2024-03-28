import { configureStore } from "@reduxjs/toolkit";

import contactSlice from "./contactSlice";
import accountSlice from "./accountSlice";

export default configureStore({
    reducer: {
        contact: contactSlice,
        account: accountSlice
    }
})