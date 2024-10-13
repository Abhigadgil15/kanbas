import React from "react";
import VariablesAndConstants from './VariablesAndConstants';
import VariableTypes from "./VariableTypes";
import IfElse from "./IfElse";
import Highlight from "./Highlight";
import TernaryOperator from "./TernaryOperator";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalLoginInline";
import LegacyFunctions from "./LegacyFunction";
import ArrowFunctions from "./ArrowFUnctions";
import ImpliedReturn from "./ImpliedReturn";
import TemplateLiterals from "./TemplateLiterals";
import SimpleArrays from "./SimpleArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import FindFunction from "./FindFunction";
import * as Data from './FindIndex';
import FilterFunction from "./FilterFunction";
import JsonStringify from "./JSONStringify";
import House from "./House";
import TodoList from "./TodoList";
import Spreading from "./Spreading";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import DestructingImports from "./DestructingImports";
import Classes from "./Classes";
import Styles from "./Styles";
import PathParameters from "./PathParameters";
export default function Lab3() {
    console.log("Hello World!");
    const combinedData = {
        numberArray1: Data.numberArray1,
        stringArray1: Data.stringArray1,
        fourIndex: Data.fourIndex,
        string3Index: Data.string3Index,
      };
    return(
      <div id="wd-lab3">
        <h3>Lab 3</h3>
        <VariablesAndConstants/>
        <VariableTypes/>
        <BooleanVariables/>
        <IfElse/>
        <ForLoops/>
        <TernaryOperator/>
        <ConditionalOutputIfElse/>
        <ConditionalOutputInline/>
        <LegacyFunctions/>
        <ArrowFunctions/>
        <ImpliedReturn/>
        <TemplateLiterals/>
        <SimpleArrays/>
        <ArrayIndexAndLength/>
        <AddingAndRemovingToFromArrays/>
        <MapFunction/>
        <FindFunction/>
        <FindIndex/>
        <FilterFunction/>
        <JsonStringify/>
        <House/>
        <TodoList/>
        <Spreading/>
        <Destructing/>
        <FunctionDestructing/>
        <Math/>
        <DestructingImports/>
        <Classes/>
        <Styles/>
        <PathParameters/>
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