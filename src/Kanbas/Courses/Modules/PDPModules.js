import { BsGripVertical } from 'react-icons/bs';
import ModuleControlButtons from './ModuleControlButton';
import LessonControlButtons from './LessonControlButton';

export default function PDPModules() {
  return (
    <div>
      <ul id="wd-modules" className="list-group rounded-0">
        
        {/* Week 1 */}
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              Week 1
            </div>
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                Introduction to the course
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                Overview of Java
              </div>
              <LessonControlButtons />
            </li>
          </ul>
        </li>

        {/* Week 2 */}
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              Week 2
            </div>
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                Why Java?
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                Object-Oriented Programming
              </div>
              <LessonControlButtons />
            </li>
          </ul>
        </li>

        {/* Week 3 */}
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              Week 3
            </div>
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                Functional Programming
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                Integrating Classes Design
              </div>
              <LessonControlButtons />
            </li>
          </ul>
        </li>

        {/* Week 4 */}
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              Week 4
            </div>
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                Term I
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                Abstract Data Structures
              </div>
              <LessonControlButtons />
            </li>
          </ul>
        </li>

        {/* Week 5 */}
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              Week 5
            </div>
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                Identifying correct design
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                Test Case Reiteration
              </div>
              <LessonControlButtons />
            </li>
          </ul>
        </li>

        {/* Week 6 */}
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              Week 6
            </div>
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                Error Handling
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                Client Library Interactions
              </div>
              <LessonControlButtons />
            </li>
          </ul>
        </li>

        {/* Week 7 */}
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              Week 7
            </div>
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                Evaluating Design Efficiency
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                Debugging Tips
              </div>
              <LessonControlButtons />
            </li>
          </ul>
        </li>

        {/* Week 8 */}
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              Week 8
            </div>
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                Capstone Project Introduction
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                Project Planning
              </div>
              <LessonControlButtons />
            </li>
          </ul>
        </li>

      </ul>
    </div>
  );
}
