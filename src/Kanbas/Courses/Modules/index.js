import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import ModulesControlButtons from "./ModuleControlButton";
import LessonControlButtons from "./LessonControlButton";
export default function Algorithms() {
  return (
    <div>
      <ModulesControls /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-3" />
            Week 1
            <ModulesControlButtons/>
            </div>
          
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              Objectives
            <LessonControlButtons/>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to Algorithms</li>
                <li className="wd-content-item">Basic Data Structures</li>
                <li className="wd-content-item">Algorithmic Thinking</li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              Topics
            <LessonControlButtons/>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Chapter 1 - Introduction to Algorithms
                </li>
                <li className="wd-content-item">
                  Chapter 2 - Data Structures Overview
                </li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              Applications
              <LessonControlButtons/>
              <ul className="wd-content">
                <li className="wd-content-item">Algorithmic Foundations</li>
                <li className="wd-content-item">
                  Key Data Structures: Arrays, Lists, and Stacks
                </li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              A1 Lab
              <LessonControlButtons/>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Implementing Basic Sorting Algorithms
                </li>
                <li className="wd-content-item">
                  Analyzing Time and Space Complexity
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-3" />
            Week 2
            <ModulesControlButtons/></div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              Objectives
              <LessonControlButtons/>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Introduction to Trees and Graphs
                </li>
                <li className="wd-content-item">
                  Understanding Recursive Algorithms
                </li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              Topics
              <LessonControlButtons/>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Chapter 3 - Trees: Binary, AVL, and B-Trees
                </li>
                <li className="wd-content-item">
                  Chapter 4 - Graph Algorithms: BFS, DFS
                </li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              Applications
              <LessonControlButtons/>
              <ul className="wd-content">
                <li className="wd-content-item">Graph Theory Basics</li>
                <li className="wd-content-item">
                  Implementing BFS and DFS Algorithms
                </li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              A2 Lab
              <LessonControlButtons/>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Solving Tree Traversal Problems
                </li>
                <li className="wd-content-item">
                  Implementing Graph Search Algorithms
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-3" />Week 3 <ModulesControlButtons/></div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              Objectives
              <LessonControlButtons/>
              <ul className="wd-content">
                <li className="wd-content-item">Dynamic Programming</li>
                <li className="wd-content-item">
                  Greedy Algorithms vs. Dynamic Programming
                  
                </li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              Topics
              <LessonControlButtons/>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Chapter 5 - Solving Problems with Dynamic Programming
                </li>
                <li className="wd-content-item">
                  Chapter 6 - Greedy Algorithms for Optimization
                </li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              Applications
              <LessonControlButtons/>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Key Concepts in Dynamic Programming
                </li>
                <li className="wd-content-item">
                  Classic DP Problems: Knapsack, Coin Change
                </li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              A3 Labs
              <LessonControlButtons/>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Implementing Greedy vs. Dynamic Solutions
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">Week 4 <ModulesControlButtons/></div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              Objectives
              <LessonControlButtons/>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Hashing Techniques and Hash Tables
                </li>
                <li className="wd-content-item">Collision Resolution</li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              Topics
              <LessonControlButtons/>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Hash Tables and Their Applications
                </li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              Applications
              <LessonControlButtons/>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to Hashing</li>
                <li className="wd-content-item">Open Addressing vs. Chaining</li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              EVALUATIONS
              <LessonControlButtons/>
              <ul className="wd-content">
                <li className="wd-content-item">Q2</li>
                <li className="wd-content-item">A2</li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">Week 5 <ModulesControlButtons/></div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              Objectives
              <LessonControlButtons/>
              <ul className="wd-content">
                <li className="wd-content-item">Advanced Sorting Techniques</li>
                <li className="wd-content-item">
                  Divide and Conquer Strategies
                </li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              Topics
              <LessonControlButtons/>
              <ul className="wd-content">
                <li className="wd-content-item">
                  QuickSort, MergeSort, and Heapsort
                </li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
             Topics
             <LessonControlButtons/>
              <ul className="wd-content">
                <li className="wd-content-item">Mastering Sorting Algorithms</li>
                <li className="wd-content-item">
                  Analyzing Sorting Algorithm Efficiency
                </li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              Final Exam
              <LessonControlButtons/>
              <ul className="wd-content">
                <li className="wd-content-item">E1</li>
                <li className="wd-content-item">E2</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
