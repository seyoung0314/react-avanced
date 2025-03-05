import { createStore } from "redux";

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
const counterReducer = (state = initialState, action) => {
  console.log("prev-state :", state);
  console.log("action :", action);

  // 상태변경 처리
  // 1. 상태값 변경 시 action에 들어온 type별로 다르게 처리
  // 2. 상태값 변경은 반드시 새로운 객체를 할당해야함

  switch (action.type) {
    case "INCREMENT":
      return {...state, count: state.count + 1 };

    case "DECREMENT":
      return {...state, count: state.count - 1 };

    case "MULTIPLY":
      return {...state, count: state.count * action.payload };
      
    case "TOGGLE":
      return {...state, showCounter : !state.showCounter };
  }
  return state;
};

// 리덕스는 단 하나의 스토어만 사용 (앱당 하나)
// 스토어는 최상단 컴포넌트에 제공해야한다. (여기선 app.jsx)
const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
