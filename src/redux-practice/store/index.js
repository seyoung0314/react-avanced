import { createStore } from "redux";

// 상태관리할 데이터의 초기값을 세팅
const initialState = {
  count: 99,
};

// reducer : 상태관리를 위한 함수
/**
 *
 * @param {*} state - 상태변경 이전의 상태값
 * @param {*} action - 상태를 어떻게 변경을 시킬지에 대한 명세
 * @return - 변경이 완료된 새로운 상태값
 */
const counterReducer = (state = initialState, action) => {
  console.log("prev-state :", state);
  console.log("action :", action);

  return { count: state.count + 10 };
};

// 리덕스는 단 하나의 스토어만 사용 (앱당 하나)
// 스토어는 최상단 컴포넌트에 제공해야한다. (여기선 app.jsx)
const store = createStore(counterReducer);

export default store;
