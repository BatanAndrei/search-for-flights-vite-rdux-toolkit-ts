import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import { ticketsSlice } from './Slice';


export const store = configureStore({
    reducer: {
        ticketsExtraReducer: ticketsSlice.reducer, //в одном store описываем определённые slices определённого редуктора 
        btnViewCheap: ticketsSlice.reducer,
        btnViewFast: ticketsSlice.reducer,
        btnViewOptimal: ticketsSlice.reducer,
    }
})

//выведение типов из хранилища RootState и RootDispatch 
export type RootState = ReturnType<typeof store.getState>; //дает возможность не описывать типы редукторов
export type AppDispatch = typeof store.dispatch; //включает типы из thunk middleware

//useAppSelector и useAppDispatch используются во всём проекте TS в место useSelector и useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

