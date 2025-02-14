import React, { useRef } from "react";
import Input from "../UI/Input";
import styles from "./MealItemForm.module.scss";

const MealItemForm = ({ id, onAddToCart }) => {
  const inputForm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddToCart(inputForm.current.value)
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* <Input
        label={"이름"}
        inputAttr={{
          type: "text",
          name: "포도",
          onFocus: () => console.log("dd"),
        }}
      /> */}

      <Input
        label={"수량"}
        ref={inputForm}
        inputAttr={{
          id: "amount_" + id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>담기</button>
    </form>
  );
};

export default MealItemForm;
