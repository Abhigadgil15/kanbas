import { FaUnlink, FaUpload, FaHome, FaStream, FaBullhorn, FaChartBar, FaBell } from 'react-icons/fa';
import GreenCheckMark from '../Modules/GreenCheckMark';
export default function CourseStatus() {
    return (
      <div id="wd-course-status">
        <h2>Course Status</h2>
        <div className="button-row">
          <button className="publish-button"><GreenCheckMark /> Publish</button>
          <button><FaUnlink /> Unpublish</button>
        </div>
        <div className="button-group spaced">
          <button><FaUpload /> Import Existing Content</button>
          <button><FaUpload /> Import from Commons</button>
          <button><FaHome /> Choose Homepage</button>
          <button><FaStream /> View Course Stream</button>
          <button><FaBullhorn /> New Announcement</button>
          <button><FaChartBar /> New Analytics</button>
          <button><FaBell /> View Course Notifications</button>
        </div>
      </div>
    );
  }