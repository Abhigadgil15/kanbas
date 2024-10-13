import React from "react";
import VariablesAndConstants from './VariablesAndConstants';
import VariableTypes from "./VariableTypes";
import IfElse from "./IfElse";
import Highlight from "./Highlight";
export default function Lab3() {
    console.log("Hello World!");
    return(
      <div id="wd-lab3">
        <h3>Lab 3</h3>
        <VariablesAndConstants/>
        <VariableTypes/>
        <BooleanVariables/>
        <IfElse/>
        <h4>Square of 4</h4>
        <Square>4</Square>
        <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
     </Highlight>















        <Add a={3} b={4}/>
      </div>
    );
}