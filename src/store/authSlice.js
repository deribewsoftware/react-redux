import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name:"auth",
  initialState:{
    isLogged: true,
  },
  reducers:{
    login(state){
      state.isLogged = true;
    },
    logout(state){
      state.isLogged = false;
    },
  }
})
export const authActions=authSlice.actions;

export default authSlice;