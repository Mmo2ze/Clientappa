

import React, { useState } from 'react'
import Scanner from "../../components/scanner/Scanner"
import Nav from "../../components/nav/Nav"
import Sidebar from '../../components/sidebar/Sidebar'
import "./scan.css"
import StudentData from '../../components/studentData/StudentData'

function Scan() {
 
    const [showStudentData, setShowStudentData] = useState(false);
    const [showScanner, setShowScanner] = useState(false);
   
  
    function handleCancel() {
      setShowScanner(false);
      setShowStudentData(false);
    }  
  

  
  return (
    <div className='home-scan'>
      <Nav/>
      <div className="content">
    <div className="sidebars">
      <Sidebar/>
    </div>
    <div className="main-content sc">

      <Scanner onCancel={handleCancel}/>
    </div>
      </div>

    </div>
  )
}

export default Scan