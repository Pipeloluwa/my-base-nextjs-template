'use client';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface INavBgState{
    value:boolean;
}

const initialValue: INavBgState= {
    value:false
}

const navBg= createSlice({
    name: "nav-bg-state",
    initialState: initialValue,
    reducers: {
        setNavBg: (state, args: PayloadAction<{scrollValue: number | undefined}>) => {
            if (args.payload.scrollValue)
            {
                if (args.payload.scrollValue > 5 && state.value=== false){
                    state.value= true;
                }
    
                else if(args.payload.scrollValue <= 5 && state.value === true ){
                    state.value= false;
                }
            }
            
        },

    }
});

export const{setNavBg}= navBg.actions;
export default navBg.reducer;