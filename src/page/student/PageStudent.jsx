import { useEffect, useState } from 'react';
import Nav from '../../components/nav/Nav';
import Sidebar from '../../components/sidebar/Sidebar'; 
import QrCodeIcon from '@mui/icons-material/QrCode';
import Scanner from '../../components/scanner/Scanner';
import StudentData from '../../components/studentData/StudentData';
import StarIcon from '@mui/icons-material/Star';
import './pagestudent.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Button } from 'flowbite-react';
import axios from 'axios';

function PageStudent() {
  const [def, setDef] = useState(null);

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const response = await axios.get("api/Student");
        setDef(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGrades();
  }, []);

  async function searchStudents(query) {
    const response = await fetch(`/api/Student/search/${query}`);
    const data = await response.json();
    return data;
  }

  const [studentData, setStudentData] = useState(null);
  const [showStudentData, setShowStudentData] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  const [searchResults, setSearchResults] = useState(def);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery === '') {
      setSearchResults(def);
    } else {
      searchStudents(searchQuery).then((data) => {
        setSearchResults(data || def);
      });
    }
  }, [searchQuery, def]);

  function handleSearchChange(e) {
    setSearchQuery(e.target.value);
  }

  function handleQRCodeClick() {
    setShowScanner(true); 
    setShowStudentData(false);
  }

  function handleCancel() {
    setShowScanner(false);
    setShowStudentData(false);
  }  

  function handleShowStudentData(data) {
    setStudentData(data);
    setShowScanner(false);
    setShowStudentData(true);
  }  

  function getStarCount(rate) {
    if (rate > 90) {
      return 5;
    } else if (rate > 80) {
      return 4;
    } else if (rate > 70) {
      return 3;
    } else {
      return 1;
    }
  }
  
  function handleStudentClick(id) {
    console.log(id);
  }

  return (
    <div className="page-student">
      <Nav />
      <div className="content">
        <div className="sidebars">
          <Sidebar/>
        </div>

        <div className="main-conten">
          <div className="header">
            <div className="search">
              <input
                type="search"
                name=""
                id=""
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            <div className="icon-scanner">
              <QrCodeIcon color='secondary' fontSize='large' onClick={handleQRCodeClick}/>
              {showScanner && <Scanner onScan={handleShowStudentData} onCancel={handleCancel} />}
            </div>
          </div>
          <div className="students-wrapper">
            {searchResults && def && searchResults.map((student) => (
              <div className={`student-card ${student.gender ? 'blue' : 'perple'}`} key={student.id} onClick={() => handleStudentClick(student.id)}>
                <div className="student-info">
                  <div className="student-image"></div>
                  <h4 className="student-id">{student.id}</h4>
                  <div className="name">
                    {student.name && <p className="student-name">{student.name}</p>}
                    {student.class && <h5 className="student-class">{student.class.name}</h5>}
                  </div>
                  <div className="progressbar-container">
                    <CircularProgressbar
                      value={student.examRate}
                      text={`${student.examRate}%`}
                      className='da'
                      styles={buildStyles({
                        textColor: 'white',
                        pathColor: '##00cbff',
                        trailColor: 'black',
                      })}
                    />
                  </div>
                  <Button className='paym' color={student.IsPayed ? "success" : "failure"}>
                    {student.IsPayed ? "Payed" : "Pending"}
                  </Button>
                  <div>
                    {[...Array(getStarCount(student.examRate))].map((star, i) => (
                      <StarIcon style={{color:"gold"}} key={i} color='secondary' />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* {showStudentData && (
            <StudentData studentData={studentData} onCancel={handleCancel} />
          )} */}
        </div>
      </div>
    </div>
  );
}

export default PageStudent;