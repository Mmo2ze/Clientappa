import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from './../select/select';
import InputText from './../form/input'
import Button from './../form/button'
function StudetnManger() {

    const [classes, setClasses] = useState([{ id: 0, name: "Select Class" }]);
    const [formData ,setFormData] = useState()
    useEffect(() => {
        const getClasses =  (async()=> {
             var Classes = ((await axios.get('api/Class')).data);
             setClasses(Classes)
        })
        getClasses();
        console.log(classes);
    }, [])
    const onSubmit = (()=>{
        console.log('button clicked');
    })
    return (
        <div>
            <Select classes={classes}></Select>
            <InputText input={{id:"name" ,placeholder:"Studetn Name",color:"gray"}}></InputText>
            <InputText input={{id:"Phone" ,placeholder:"Phone ",color:"gray"}}></InputText>
            <InputText input={{id:"parentPhone" ,placeholder:"Parent Phone ",color:"gray"}}></InputText>
            <Button text="Submit" color="gray" onClick={onSubmit} ></Button>

        </div>
    );
}


export default StudetnManger;