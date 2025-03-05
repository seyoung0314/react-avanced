import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";

// 액션 타입 상수
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const MULTIPLY = 'MULTIPLY';
export const TOGGLE = 'TOGGLE';

// 상태관리할 데이터의 초기값을 세팅
const initialState = {
  count: 0,
  showCounter : true,
};

// reducer : 상태관리를 위한 함수
/**
 *
 * @param {*} state - 상태변경 이전의 상태값
 * @param {*} action - 상태를 어떻게 변경을 시킬지에 대한 명세
 * @return - 변경이 완료된 새로운 상태값
 */

/*
  redux toolkit에서는 reducer 대신 slice의 개념사용

  option객체에 들어가있는 프로퍼티 설명
  prop1: name - 컴포넌트가 해당 리듀서를 사용할 때 부르는 이름
  prop2: initialState - 관리할 상태값들의 초기값
  prop3: reducers - 기존 리듀서에서 사용하던 내용들(실제 액션)
*/
const counterSlice = createSlice({
  name:'counter',
  initialState,
  reducers: {
    increment(state,_){
      state.count++;
    },
    decrement(state,_){
      state.count--;
    },
    multiply(state,action){
      state.count *= action.payload.value;
    },
    toggle(state,_){
      state.showCounter = !state.showCounter;
    },
  }
});

// 리덕스는 단 하나의 스토어만 사용 (앱당 하나)
// 스토어는 최상단 컴포넌트에 제공해야한다. (여기선 app.jsx)
const store = configureStore(
  {reducer : counterSlice.reducer}
);

// 상태를 변경하는 함수들을 모두 내보내기
export const counterActions = counterSlice.actions;
export default store;
