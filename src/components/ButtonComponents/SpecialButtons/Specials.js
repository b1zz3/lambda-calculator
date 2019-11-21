import React, {useState} from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";
//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  let [special, setSpecial] = useState(specials);
  console.log(props);
  return (
    <div>

      {/* STEP 3 - Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass
      it any props needed by the child component*/
      special.map(spec =>(
        <SpecialButton addSpecial = {props.addSpecial} key={spec} textContent={spec}></SpecialButton>
      ))
      }

    </div>
  );
};

export default Specials;