import { configureStore, combineReducers } from "@reduxjs/toolkit";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import eventReducer from "./slices/event";
import uiReducer from "./slices/ui";
import chatUISlice from "./slices/chat-ui";

const persistConfig = {
    key: "doar",
    version: 1,
    storage,
};

export const rootReducer = combineReducers({
    events: eventReducer,
    ui: uiReducer,
    chatUI: chatUISlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//     reducer: rootReducer,
// });
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
