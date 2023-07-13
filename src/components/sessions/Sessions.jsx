import React, { useState, useEffect } from "react";
import axios from "axios";
import Time from "../../func/Time";

function Sessions() {
  const [formData, setFormData] = useState({
    name: "",
    hours: "",
    minutes: "",
    am: "",
    day: "",
  });

  const [grades, setGrades] = useState([]);
  const [selectedGradeId, setSelectedGradeId] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [sessions, setSessions] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [period, setPeriod] = useState("");

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const response = await axios.get("api/grade");
        setGrades(response.data);
        setSelectedGradeId(response.data[0]?.id);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGrades();
  }, []);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await axios.get(`/api/grade/${selectedGradeId}/sessions`);
        setSessions(response.data.sessions);
      } catch (error) {
        console.log(error);
      }
    };

    if (selectedGradeId) {
      fetchSessions();
    }
  }, [selectedGradeId]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleDayChange = (event) => {
    const selectedDay = event.target.value;
    setSelectedDay(selectedDay);
  };

  const handleGradeChange = (event) => {
    const selectedGradeId = event.target.value;
    setSelectedGradeId(selectedGradeId);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const startTimeInSeconds = Time.TimeToSecond(
      formData.hours,
      formData.minutes,
      formData.am
    );
    const periodInSeconds = Time.TimeToSecond(formData.hours, formData.minutes, "AM");
    setStartTime(startTimeInSeconds);
    setPeriod(periodInSeconds);
    const data = {
      gradeId: selectedGradeId,
      name: formData.name,
      sessions: [
        {
          day: parseInt(selectedDay),
          startTime: startTimeInSeconds,
          period: periodInSeconds,
        },
      ],
    };
    try {
      const url = "/api/Class"; 
      const response = await axios.post(url, data);
      if (response.status === 200) {
        console.log("added");
        setSessions([...sessions, data.sessions[0]]);
      } else {
        console.log(response.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Session Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Start Time Hours"
          name="hours"
          value={formData.hours}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Start Time Minutes"
          name="minutes"
          value={formData.minutes}
          onChange={handleChange}
          required
        />
        <select name="am" onChange={handleChange} required>
          <option value="">Select AM/PM</option>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>

        <select onChange={handleGradeChange} name="gradeId" required>
          <option value="">Select a grade</option>
          {grades.map((grade) => (
            <option key={grade.id} value={grade.id}>
              {grade.name}
            </option>
          ))}
        </select>

        <select onChange={handleDayChange} name="day" required>
          <option value="">Select a day</option>
          {[
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ].map((day, index) => (
            <option key={index} value={index}>
              {day}
            </option>
          ))}
        </select>

        <button type="submit">Add Session</button>
      </form>

      <div>
        <h2>Sessions for Grade {selectedGradeId}</h2>
        <ul>
          {sessions.map((session) => (
            <li key={session.id}>
              {session.day}: {Time.SecondToTime(session.startTime)} -{" "}
              {Time.SecondToTime(session.startTime + session.period)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sessions;


