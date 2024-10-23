import React from "react";
import axios from "axios";

const StudentList = ({ students, onEdit, refreshStudents }) => {
  // Hàm xử lý xóa sinh viên
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/${id}`);
      refreshStudents(); // Làm mới danh sách sinh viên sau khi xóa
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div>
      <h2>Danh sách sinh viên</h2>
      {/* {console.log(students)} */}

      <table class="table table-hover">
        <thead>
          <tr>
            <th>Roll</th>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Birthday</th>
            <th>Address</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {students.data &&
            students.data.map((student) => (
              <tr>
                <td>{student.Roll}</td>
                <td>{student.StudentID}</td>
                <td>{student.Name}</td>
                <td>{new Date(student.Birthday).toLocaleDateString()}</td>
                <td>{student.Address}</td>
                <button
                  type="button"
                  class="btn btn-info"
                  onClick={() => onEdit(student)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => handleDelete(student._id)}
                >
                  Delete
                </button>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
