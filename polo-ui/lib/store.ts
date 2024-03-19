import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { linksApiSlice } from "./features/links/linksApiSlice";

const allSlices = [linksApiSlice];

// Also include any slices using RTK Query
const allMiddlewares = [linksApiSlice];

// Combine slices (which automatically combines reducers too)
const rootReducer = combineSlices(...allSlices);

// Create unique store instances with `makeStore` to avoid SSR cross-state pollution
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(
        allMiddlewares.map((mid) => mid.middleware)
      );
    },
  });
};

// TYPE DEFINITIONS

// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>;
// Infer the return type of `makeStore`
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
