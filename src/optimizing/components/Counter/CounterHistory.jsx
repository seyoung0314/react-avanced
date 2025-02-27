import React, { useState } from "react";

import { log } from "../../log";

const HistoryItem = ({ count }) => {
  log("<HistoryItem /> rendered", 3);

  const [selected, setSelected] = useState(false);

  const clickHandler = () => {
    setSelected((prevSelected) => !prevSelected);
  };

  return (
    <li onClick={clickHandler} className={selected ? "selected" : undefined}>
      {count}
    </li>
  );
};

const CounterHistory = ({ history }) => {
  log("<CounterHistory /> rendered", 2);

  return (
    <ol>
      {history.map((count, index) => {
        return <HistoryItem key={count.id} count={count.value} />;
      })}
    </ol>
  );
};
export default CounterHistory;
