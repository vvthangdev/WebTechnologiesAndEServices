import React, { useState, useEffect } from "react";
import { addStudent, updateStudent } from "../services/api"; // Import các hàm API
import { Student } from "../types/Student"; // Import kiểu Student

interface StudentFormProps {
  selectedStudent: Student | null;
  refreshStudents: () => void;
}

const StudentForm: React.FC<StudentFormProps> = ({
  selectedStudent,
  refreshStudents,
}) => {
  const [student, setStudent] = useState<Student>({
    StudentID: "",
    Name: "",
    Roll: 0,
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
        Roll: 0,
        Birthday: "",
        Address: "",
      });
    }
  }, [selectedStudent]);

  // Xử lý khi có thay đổi trong input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  // Xử lý submit form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (selectedStudent) {
        await updateStudent(selectedStudent._id!, student); // Gọi API để cập nhật sinh viên
      } else {
        await addStudent(student); // Gọi API để thêm sinh viên mới
      }
      refreshStudents(); // Làm mới danh sách sinh viên sau khi lưu
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
