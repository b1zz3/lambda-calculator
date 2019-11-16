import React, {useState} from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  let [operator, setOperator] = useState(operators);
  console.log(props);
  return (
    <div>

      {/* STEP 3 - Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass
      it any props needed by the child component*/
      operator.map(symb =>(
        <OperatorButton addOpp = {props.addOpp} key={symb.char} textContent={symb.char}></OperatorButton>
      ))}
    </div>
  );
};

export default Operators;