import { useState } from 'react';
import { Link } from "react-router-dom"
import "./sidebar.css"
import DataUsageIcon from '@mui/icons-material/DataUsage';
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CloseIcon from '@mui/icons-material/Close';
import DehazeIcon from '@mui/icons-material/Dehaze';

const Sidebar = () => {

  const [showStudentManager, setShowStudentManager] = useState(false);
  const [people, setPeople] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
    setShowCloseButton(!showCloseButton);
  };

  return ( 
   
   <>  
      <div className="open">
        {!showCloseButton ? (
          <button onClick={toggleSidebar}><DehazeIcon/></button>
        ) : (
          <button onClick={toggleSidebar}><CloseIcon/></button>
        )}
      </div>
      
      <div className={'page-sidebar' + (sidebarVisible ? ' opents' : '')}>  
        <div className="sidebar">
          <ul>
            <li>
              <Link to="/"> 
                <div className='hom'>  
                  <DataUsageIcon/> <span>Overview</span>
                </div>
              </Link>
            </li>
            <li>
              <Link onClick={() => setShowStudentManager(!showStudentManager)}> 
                <div  className='tow'>
                  <PersonIcon/> <span>Student Manager</span> {showStudentManager ?  <ArrowUpwardIcon/> : <ArrowDownwardIcon/> }
                </div>
              </Link>
    
              {showStudentManager && (
                <div className='student_info'>
                  <Link to="/absence-registration"><p>Absence registration</p></Link>
                  <p>Record Degrees</p>
                  <Link to="/student-registration"><p>student registration</p></Link>  
                  <Link to="/add-student"><p>Add Students</p></Link>
                </div>
              )}
            </li>
            <li>
              <Link onClick={() => setPeople(!people)}>
                <div className='tow' >
                  <PeopleAltIcon/> <span>People Alt </span>  {people ?  <ArrowUpwardIcon/> : <ArrowDownwardIcon/> }
                </div>
              </Link>
              {people && (
                <div className='student_info'>
                  <p>Grades</p>
                  <Link to="/page-student"><p> Student</p></Link>
                  <Link to="/add-session"><p>Sessions</p></Link> 
                </div>
              )}
            </li>
            <li>
              <Link to="/settings">
                <div>
                  <SettingsIcon/> <span>Settings</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar;