import React from "react";
import VariablesAndConstants from './VariablesAndConstants';
import VariableTypes from "./VariableTypes";
import IfElse from "./IfElse";
import Highlight from "./Highlight";
import ArrowFunctions from "./ArrowFunction";
import TernaryOperator from "./TernaryOperator";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalLoginInline";
import LegacyFunctions from "./LegacyFunction";
import ImpliedReturn from "./ImpliedReturn";
import TemplateLiterals from "./TemplateLiterals";
import SimpleArrays from "./SimpleArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ForLoops from "./ForLoops";
import TodoItem from "./todos/TodoItem";
import MapFunction from "./MapFunction";
import FindFunction from "./FindFunction";
import FilterFunction from "./FilterFunction";
import JsonStringify from "./JSONStringify";
import House from "./House";
import TodoList from "./todos/TodoList";
import Spreading from "./Spreading";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import DestructingImports from "./DestructingImports";
import Classes from "./Classes";
import Styles from "./Styles";
import BooleanVariables from "./BooleanVariables";
import PathParameters from "./PathParameters";
import Square from "./Square";
import Add from "./Add";
import FindIndex from "./FindIndex";
export default function Lab3() {
    console.log("Hello World!");
    return (
      <div id="wd-lab3">
        <h3>Lab 3</h3>
        <VariablesAndConstants />
        <VariableTypes />
        <BooleanVariables />
        <IfElse />
        <TernaryOperator />
        <ConditionalOutputIfElse />
        <hr />
        <ConditionalOutputInline />
        <LegacyFunctions />
        <ArrowFunctions />
        <ImpliedReturn />
        <TemplateLiterals />
        <SimpleArrays />
        <ArrayIndexAndLength />
        <AddingAndRemovingToFromArrays />
        <ForLoops />
        <MapFunction />
        <FindFunction />
        <FindIndex />
        <FilterFunction />
        <JsonStringify />
        <House />
        <TodoItem />
        <TodoList />
        <Spreading />
        <Destructing />
        <FunctionDestructing />
        <DestructingImports />
        <Classes />
        <Styles />
        <Add a={3} b={4} />
        <h4>Square of 4</h4>
        <Square>4</Square>
        <hr />
        <Highlight>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione
          eaque illo minus cum, saepe totam vel nihil repellat nemo explicabo
          excepturi consectetur. Modi omnis minus sequi maiores, provident
          voluptates.
        </Highlight>
        <hr />
        <PathParameters />
      </div>
    );
  }