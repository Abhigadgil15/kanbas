export default function AlgorithmsModules() {
    return (
      <div>
        <ul id="algorithms-modules">
          <li className="algorithms-module">
            <div className="algorithms-title">Week 1</div>
            <ul className="algorithms-lessons">
              <li className="algorithms-lesson">
                <span className="algorithms-title">LEARNING OBJECTIVES</span>
                <ul className="algorithms-content">
                  <li className="algorithms-content-item">Introduction to Algorithms</li>
                  <li className="algorithms-content-item">Overview of Data Structures</li>
                </ul>
              </li>
              <li className="algorithms-lesson">
                <span className="algorithms-title">LESSONS</span>
                <ul className="algorithms-content">
                  <li className="algorithms-content-item">Binary Search</li>
                  <li className="algorithms-content-item">Recursion</li>
                </ul>
              </li>
            </ul>
          </li>
          {/* Add more weeks */}
        </ul>
      </div>
    );
  }
  