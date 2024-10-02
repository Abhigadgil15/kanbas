import ModulesControls from "./ModulesControls";

export default function Algorithms() {
  return (
    <div>
      <ModulesControls/><br/><br/><br/><br/>
      <button type="button">Collapse All</button>
      <button type="button">View Progress</button>
      <select id="">
        <option value="PUBLISH ALL">Publish All</option>
      </select>
      <button type="button">+ Modules</button>
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to Algorithms</li>
                <li className="wd-content-item">Basic Data Structures</li>
                <li className="wd-content-item">Algorithmic Thinking</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">Reading</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Chapter 1 - Introduction to Algorithms
                </li>
                <li className="wd-content-item">
                  Chapter 2 - Data Structures Overview
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">Slides</span>
              <ul className="wd-content">
                <li className="wd-content-item">Algorithmic Foundations</li>
                <li className="wd-content-item">
                  Key Data Structures: Arrays, Lists, and Stacks
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">A1 Lab</span>
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

        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Introduction to Trees and Graphs
                </li>
                <li className="wd-content-item">
                  Understanding Recursive Algorithms
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">Reading</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Chapter 3 - Trees: Binary, AVL, and B-Trees
                </li>
                <li className="wd-content-item">
                  Chapter 4 - Graph Algorithms: BFS, DFS
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">Slides</span>
              <ul className="wd-content">
                <li className="wd-content-item">Graph Theory Basics</li>
                <li className="wd-content-item">
                  Implementing BFS and DFS Algorithms
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">A1 Lab</span>
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

        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Dynamic Programming</li>
                <li className="wd-content-item">
                  Greedy Algorithms vs. Dynamic Programming
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">Reading</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Chapter 5 - Solving Problems with Dynamic Programming
                </li>
                <li className="wd-content-item">
                  Chapter 6 - Greedy Algorithms for Optimization
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">Slides</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Key Concepts in Dynamic Programming
                </li>
                <li className="wd-content-item">
                  Classic DP Problems: Knapsack, Coin Change
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">A2 Labs</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Implementing Greedy vs. Dynamic Solutions
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">Week 4</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Hashing Techniques and Hash Tables
                </li>
                <li className="wd-content-item">Collision Resolution</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">Reading</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Chapter 7 - Hash Tables and Their Applications
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">Slides</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to Hashing</li>
                <li className="wd-content-item">Open Addressing vs. Chaining</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">EVALUATIONS</span>
              <ul className="wd-content">
                <li className="wd-content-item">Q2</li>
                <li className="wd-content-item">A2</li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">Week 5</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Advanced Sorting Techniques</li>
                <li className="wd-content-item">
                  Divide and Conquer Strategies
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">Reading</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Chapter 8 - QuickSort, MergeSort, and Heapsort
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">Slides</span>
              <ul className="wd-content">
                <li className="wd-content-item">Mastering Sorting Algorithms</li>
                <li className="wd-content-item">
                  Analyzing Sorting Algorithm Efficiency
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">EVALUATIONS</span>
              <ul className="wd-content">
                <li className="wd-content-item">Q3</li>
                <li className="wd-content-item">A3</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
