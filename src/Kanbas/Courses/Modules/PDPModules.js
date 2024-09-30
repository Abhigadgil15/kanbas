export default function PDPModules() {
    return (
      <div>
        <ul id="pdp-modules">
          <li className="pdp-module">
            <div className="pdp-title">Week 1</div>
            <ul className="pdp-lessons">
              <li className="pdp-lesson">
                <span className="pdp-title">LEARNING OBJECTIVES</span>
                <ul className="pdp-content">
                  <li className="pdp-content-item">Introduction to Programming Paradigms</li>
                  <li className="pdp-content-item">Overview of Functional Programming</li>
                </ul>
              </li>
              <li className="pdp-lesson">
                <span className="pdp-title">LESSONS</span>
                <ul className="pdp-content">
                  <li className="pdp-content-item">Introduction to Lambda Calculus</li>
                  <li className="pdp-content-item">Functional Programming in Python</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
  