import React, { useEffect, useState } from 'react'
import Nav from '../../components/nav/Nav'
import Sidebar from '../../components/sidebar/Sidebar'
import axios from 'axios';
import "./addStudent.css"
function AddStudent() {
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [classId, setClassId] = useState('');

  useEffect(() => {
    const fetchClass = async () => {
      try {
        const response = await axios.get("api/Class");
        setClasses(response.data);
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchClass();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newStudent = { name, phone, parentPhone, classId };
    try {
      const response = await axios.post("api/Student", newStudent);
      setStudents([...students, response.data]);
      setName('');
      setPhone('');
      setParentPhone('');
      setClassId('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='add-page'>
      <Nav/>
      <div className="content">
        <div className="sidebars">
          <Sidebar/>
        </div>
        <div className="main-content">
          <form className='forms' onSubmit={handleSubmit}>
            <select  name='classId' value={classId} onChange={(e) => setClassId(e.target.value)} required>
              <option value="">Select a Class</option>
              {classes.map((classe) => (
                <option  key={classe.id} value={classe.id}>
                  {classe.name}
                </option>
              ))}
            </select>
            <div className="inp"> 
            <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number"  placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <input type="number"  placeholder='Phone Parent' value={parentPhone} onChange={(e) => setParentPhone(e.target.value)}/>
            </div>
            <div className="jen">
            <input type="radio" name="man" id="" />
            <input type="radio" name="man" id="" />
            </div>
            <button type='submit' className='sent'>Add Student</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;