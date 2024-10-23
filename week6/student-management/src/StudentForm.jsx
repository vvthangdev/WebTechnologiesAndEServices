import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StudentForm.css"; // Import file CSS

const StudentForm = ({ selectedStudent, refreshStudents }) => {
  const [student, setStudent] = useState({
    StudentID: "",
    Name: "",
    Roll: "",
    Birthday: "",
    Address: "",
  });

  useEffect(() => {
    if (selectedStudent) {
      setStudent({
        StudentID: selectedStudent.StudentID,
        Name: selectedStudent.Name,
        Roll: selectedStudent.Roll,
        Birthday: selectedStudent.Birthday.substring(0, 10),
        Address: selectedStudent.Address,
      });
    } else {
      setStudent({
        StudentID: "",
        Name: "",
        Roll: "",
        Birthday: "",
        Address: "",
      });
    }
  }, [selectedStudent]);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedStudent) {
        await axios.put(
          `http://localhost:3000/${selectedStudent._id}`,
          student
        );
      } else {
        await axios.post("http://localhost:3000/", student);
      }
      refreshStudents();
    } catch (error) {
      console.error("Error saving student:", error);
    }
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>{selectedStudent ? "Cập nhật sinh viên" : "Thêm sinh viên mới"}</h2>
      <div className="form-group">
        <label>StudentID:</label>
        <input
          type="text"
          name="StudentID"
          value={student.StudentID}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="Name"
          value={student.Name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Roll:</label>
        <input
          type="number"
          name="Roll"
          value={student.Roll}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Birthday:</label>
        <input
          type="date"
          name="Birthday"
          value={student.Birthday}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Address:</label>
        <input
          type="text"
          name="Address"
          value={student.Address}
          onChange={handleChange}
          required
        />
      </div>
      <button className="submit-btn" type="submit">
        {selectedStudent ? "Cập nhật" : "Thêm mới"}
      </button>
    </form>
  );
};

export default StudentForm;
