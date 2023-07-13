import React, { useRef, useEffect } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

const Tesst = ({ onScanSuccess }) => {
  const scannerRef = useRef(null);

  useEffect(() => {
    const html5QrcodeScanner = new Html5Qrcode(scannerRef.current.id);

    const startScanner = async () => {
      try {
        await html5QrcodeScanner.start(
          { facingMode: 'environment' },
          true,
          (qrCodeMessage) => {
            onScanSuccess(qrCodeMessage);
            html5QrcodeScanner.stop();
          },
          (errorMessage) => {
            console.error(`QR Code Scanning failed: ${errorMessage}`);
          }
        );
      } catch (error) {
        console.error(`Error starting the scanner: ${error}`);
      }
    };

    startScanner();

    return () => {
      html5QrcodeScanner.stop();
    };
  }, [scannerRef, onScanSuccess]);

  return (
    <div>
      <div ref={scannerRef} id="qr-code-scanner" style={{ width: '100%', height: '100%' }}></div>
      <p>ljdow</p>
    </div>
  );
};

export default Tesst;

// import Nav from "../../components/nav/Nav";
// import Sidebar from "../../components/sidebar/Sidebar";
// import { Card } from "flowbite-react";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Time from "../../func/Time";
// import "./sessions.css";

// function Mainsession() {
//   const [formData, setFormData] = useState([{ name: "", hours: "", minutes: "", am: "", day: "" }]);

//   const [grades, setGrades] = useState([]);
//   const [selectedGradeId, setSelectedGradeId] = useState("");
//   const [sessions, setSessions] = useState([]);
//   const [sessionList, setSessionList] = useState([{ index: 0 }]);

//   const addSessionField = () => {
//     setSessionList([...sessionList, { index: sessionList.length }]);
//     setFormData([...formData, { name: "", hours: "", minutes: "", am: "AM", day: "" }]);
//   };

//   useEffect(() => {
//     const fetchGrades = async () => {
//       try {
//         const response = await axios.get("api/grade");
//         setGrades(response.data);
//         setSelectedGradeId(response.data[0]?.id);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchGrades();
//   }, []);

//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const response = await axios.get(
//           `/api/grade`
//         );
//         setSessions(response.data.sessions);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     if (selectedGradeId) {
//       fetchSessions();
//     }
//   }, [selectedGradeId]);

//   const handleChange = (event, index) => {
//     const { name, value } = event.target;
//     const newFormData = [...formData];
//     newFormData[index] = { ...newFormData[index], [name]: value };
//     setFormData(newFormData);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const sessions = [];
  
//     for (let i = 0; i < formData.length; i++) {
//       const startTimeInSeconds = Time.TimeToSecond(
//         formData[i].hours,
//         formData[i].minutes,
//         formData[i].am
//       );
//       const periodInSeconds = Time.TimeToSecond(
//         formData[i].hours,
//         formData[i].minutes,  
//         "AM"
//       );
//       sessions.push({
//         day: parseInt(formData[i].day),
//         startTime: startTimeInSeconds,
//         period: periodInSeconds,
//       });
//     }
  
//     const data = {
//       gradeId: selectedGradeId,
//       name: formData[0].name,
//       sessions,
//     };
  
//     try {
//       const url = "/api/Class";
//       const response = await axios.post(url, data);
//       if (response.status === 200) {
//         console.log("added");
//         setSessions([...sessions, data.sessions[0]]);
//       } else {
//         console.log(response.error);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="main_session">
//       <Nav />
//       <div className="content">
//         <div className="sidebars">
//           <Sidebar />
//         </div>
//         <div className="main-content">
//           <div className="info-text">
//             <h2 className="names">
//               Welcome Mr / <span> Ahmad </span>{" "}
//             </h2>
//             <h2 className="text">
//               Please Add New <span> Class</span> To Start
//             </h2>
//           </div>

//           <Card className="max-w-sm card">
//             <h4>New Class</h4>
//             <select
//               onChange={handleChange }
//               name="gradeId"
//               required
//               className="custom-select"
//             >
//               <option value="">Select a Gread</option>
//               {grades.map((grade) => (
//                 <option key={grade.id} value={grade.id}>
//                   {grade.name}
//                 </option>
//               ))}
//             </select>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 placeholder="Class Name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="session_name"
//               />

// {sessionList.map((session, index) => (
//   <div className="olvs-session" key={session.index}>
//     <div className="start">
//       <label>Start Time :</label>
//       <input
//   type="time"
//   name="hours"
//   value={formData[index] ? formData[index].hours : ""}
//   onChange={(event) => handleChange(event, index)}
//   required
//   placeholder="Start Time"
// />
//     </div>

//     <div className="pared">
//   <label>Duration (minutes):</label>
//   <input
//     type="number"
//     min="0"
//     step="1"
//     name="minutes"
//     value={formData[index].minutes}
//     onChange={(event) => handleChange(event, index)}
//     required
//   />
// </div>


//     <select
//       onChange={(event) => handleChange(event, index)}
//       name="day"
//       required
//       className="custom-select"
//     >
//       <option value="">Select a day</option>
//       {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(
//         (day, index) => (
//           <option key={index} value={index}>
//             {day}
//           </option>
//         )
//       )}
//     </select>
//     <br />
//   </div>
// ))}
//               <button
//                 type="button"
//                 onClick={addSessionField}
//                 className="add_session"
//               >
//                 Add Class
//               </button>
//               <button type="submit" className="add_session">
//                 Submit
//               </button>
//             </form>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Mainsession;
 