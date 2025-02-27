import React, { useCallback, useState } from "react";

import IconButton from "../UI/IconButton";
import MinusIcon from "../UI/Icons/MinusIcon";
import PlusIcon from "../UI/Icons/PlusIcon";
import CounterOutput from "./CounterOutput";
import { log } from "../../log";
import CounterHistory from "./CounterHistory";

const isPrime = (number) => {
  log("Calculating if is prime number", 2, "other");
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const Counter = ({ initialCount }) => {
  log("<Counter /> rendered", 1);
  const initialCountIsPrime = isPrime(initialCount);

  // const [counter, setCounter] = useState(initialCount);

  // 카운트의 변화를 배열로 추적
  const [counterChanges, setCounterChanges] = useState([
    { id: Math.random().toString(), value: 0 },
  ]);

  //현재 카운트의 총합
  const currentCount = counterChanges.reduce(
    (acc, curr) => acc + curr.value,
    0
  );

  /*
      useCallback 훅은 변경사항이 없는 함수를 재생성하지 않고 재사용
      2번째 파라미터는 의존성배열로, 특정값이나 props가 변하면 재생성
   */

  const decrementHandler = useCallback(() => {
    setCounterChanges((prevCounterChange) => [
      { id: Math.random().toString(), value: -1 },
      ...prevCounterChange,
    ]);
  }, []);

  const incrementHandler = useCallback(() => {
    setCounterChanges((prevCounterChange) => [
      { id: Math.random().toString(), value: 1 },
      ...prevCounterChange,
    ]);
  }, []);
  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{" "}
        <strong>is {initialCountIsPrime ? "a" : "not a"}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={decrementHandler}>
          Decrement
        </IconButton>
        <CounterOutput value={currentCount} />
        <IconButton icon={PlusIcon} onClick={incrementHandler}>
          Increment
        </IconButton>
      </p>
      <CounterHistory history={counterChanges} />
    </section>
  );
};
// export default React.memo(Counter);
export default Counter;
