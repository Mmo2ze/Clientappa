import React from 'react';
import "./studentData.css"

import { Table } from 'flowbite-react';
import Button from '../button/Button';
function StudentData(props) {
  return (
    <div className='olvs'>
  

    <div className="top">
      <div className="image">
        .
      </div>
      <div className="name">
        {/* <h3>{props.studentData.name}</h3> */}
        <h3>Mariam Mahoud</h3>
        <p>2nd Sec Zagazig </p>
      </div>
    </div>
    <div className="medle">
    <Button color="red"/>

    </div>
    <div className="tabl">
    <Table>
      <Table.Head>
        <Table.HeadCell>
         17/STA
        </Table.HeadCell>
        <Table.HeadCell>
         19/MON
        </Table.HeadCell>
        <Table.HeadCell>
          21/WEN
        </Table.HeadCell>
        <Table.HeadCell>
          23/FRI
        </Table.HeadCell>
      
      </Table.Head>
      <Table.Body style={{backgroundColor:"#1F2A37"}} className="divide-y">
        <Table.Row >
          <Table.Cell >
            <Button color="green"/>
          </Table.Cell>
          <Table.Cell>
          <Button color="green"/>
          </Table.Cell>
          <Table.Cell>
          <Button color="green"/>
          </Table.Cell>
          <Table.Cell>
          <Button color="red"/>
          </Table.Cell>
         
        </Table.Row>

      </Table.Body>
    </Table>
    </div>

    
    <Table className='table-mobile'>
  <tbody>
    <tr>
      <td className='cell'>17/APP</td>
      <td className='button-cell'>
        <Button color="green"/>
      </td>
    </tr>
    <tr>
      <td className='cell'>19/mp</td>
      <td className='button-cell'>
        <Button color="green"/>
      </td>
    </tr>
    <tr>
      <td className='cell'>221/op</td>
      <td className='button-cell'>
        <Button color="green"/>
      </td>
    </tr>
    <tr>
      <td className='cell'>15/pp</td>
      <td className='button-cell'>
        <Button color="red"/>
      </td>
    </tr>
  </tbody>
</Table>


    <div className="fotter">
      <button className='save'>Save</button>
      <button className='cansle' onClick={props.onCancel}>Cansle</button> 
    </div>






      {/* <h3>Student Data:</h3>
      <p>Name: {props.studentData.name}</p>
      <p>Class: {props.studentData.classId}</p>
      <p>phone: {props.studentData.phone}</p> */}
    </div>
  );
}

export default StudentData;