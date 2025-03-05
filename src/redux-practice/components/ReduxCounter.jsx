import { useDispatch, useSelector } from "react-redux";
import styles from "./ReduxCounter.module.css";

const ReduxCounter = () => {
  // 리덕스가 관리하는 상태값을 관리하기
  const count = useSelector((state) => state.count);

  // 리덕스의 상태변경을 위한 함수
  const dispatch = useDispatch();

  const handleIncrease = (e) => {
    // 리덕스에서의 상태값 변경 -> dispatch함수 사용
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrease = (e) => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>
      <div className={styles.value}>{count}</div>

      <div style={{ marginBottom: 10 }}>
        <button onClick={handleIncrease}>Increate</button>
        <button onClick={handleDecrease}>Decreate</button>
      </div>

      <button>Toggle Counter</button>
    </main>
  );
};

export default ReduxCounter;
