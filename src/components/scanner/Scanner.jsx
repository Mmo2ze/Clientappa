// import { Html5QrcodeScanner } from 'html5-qrcode';
// import StudentData from '../studentData/StudentData';
// import "./scanner.css"
// import { useEffect, useState } from 'react';
// import axios from "axios"
// function App() {
//   const [studentData, setStudentData] = useState(null);
//   const [showStudentData, setShowStudentData] = useState(false);

//   function resume(scanner) {
//     scanner.resume();
//   }

//   async function success(result, scanner) {
//     scanner.pause();
//     console.log(result);
//     try {
//       const response = await axios.get(`/api/student/${result}`);
//       console.log('Student data:', response.data);
//       setStudentData(response.data);
//       setShowStudentData(true); // set the showStudentData state to true
//     } catch (error) {
//       console.error('Error fetching student data:', error.response.data);
//     }
//   }

//   function handleCancel() {
//     setShowStudentData(false); // set the showStudentData state to false
//   }

//   useEffect(() => {
//     console.log(window.innerWidth);
//     const scanner = new Html5QrcodeScanner('reader', {
//       qrbox: {
     
//         width: window.innerWidth/1.5,
//         height: window.innerWidth/1.5,
//       }, 
//       fps: 20,
//     });
  
//     scanner.render((result) => success(result, scanner), (error) => console.log(error));
    
//     return () => {
//       scanner.clear();
//     };
//   }, []);

//   return (
//     <div className='page'>
 
//       <div id="reader"></div>
//       {showStudentData && <StudentData studentData={studentData} onCancel={handleCancel}/>} {/* pass the handleCancel function as a prop */}
//     </div>
//   );
// }

// export default App;

// App.js

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Html5QrcodeScanner } from 'html5-qrcode';
import StudentData from '../studentData/StudentData';

function App({ onCancel  , onScan, onCancels}) {
  const [studentData, setStudentData] = useState(null);
  const [showStudentData, setShowStudentData] = useState(false);

  async function success(result, scanner) {
    scanner.pause();
    console.log(result);
    try {
      const response = await axios.get(`/api/student/${result}`);
      console.log('Student data:', response.data);
      setStudentData(response.data);
      setShowStudentData(true);
    } catch (error) {
      console.error('Error fetching student data:', error.response.data);
    }
  }

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: window.innerWidth / 1.5,
        height: window.innerWidth / 1.5,
      },
      fps: 20,
    });

    scanner.render(
      (result) => success(result, scanner),
      (error) => console.log(error)
    );

    return () => {
      scanner.clear();
    };
  }, []);

  function handleCancel() {
    setShowStudentData(false);
    onCancel(); 
  }

  return (
    <div className='page'>
      <div id="reader"></div>
      {showStudentData && <StudentData studentData={studentData} onCancel={handleCancel}/>}
   
    </div>
  );
}

export default App;