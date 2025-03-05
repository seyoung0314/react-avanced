import { useDispatch, useSelector } from "react-redux";
import styles from "./ReduxCounter.module.css";
import { counterActions } from "../store";

const ReduxCounter = () => {
  // 리덕스가 관리하는 상태값을 관리하기
  const count = useSelector((state) => state.counter.count);
  const showCounter = useSelector((state) => state.counter.showCounter);

  // 리덕스의 상태변경을 위한 함수
  const dispatch = useDispatch();

  const { increment, decrement, multiply, toggle } = counterActions;

  const handleIncrease = (e) => {
    // 리덕스에서의 상태값 변경 -> dispatch함수 사용
    // dispatch(action)
    dispatch(increment());
  };

  const handleDecrease = (e) => {
    dispatch(decrement());
  };

  const handleMultiply = (e) => {
    dispatch(multiply({ value: 3 }));
  };

  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={styles.value}>{count}</div>}

      <div style={{ marginBottom: 10 }}>
        <button style={{ marginRight: 10 }} onClick={handleDecrease}>
          Decreate
        </button>
        <button style={{ marginRight: 10 }} onClick={handleIncrease}>
          Increate
        </button>
        <button onClick={handleMultiply}>IncreateDouble</button>
      </div>

      <button onClick={() => dispatch(toggle())}>Toggle Counter</button>
    </main>
  );
};

export default ReduxCounter;
