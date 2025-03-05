import { createSlice } from "@reduxjs/toolkit";

// 인증관련 전역상태 관리 슬라이스
const initialAuthState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state,action){
      state.isLoggedIn = true;
    },
    logout(state,action){
      state.isLoggedIn = false;
    },
  },
});

export const {login,logout} = authSlice.actions;
export default authSlice.reducer;