import React, { useState, useEffect } from 'react';
import StudentList from './StudentList';
import StudentForm from './StudentForm';
import axios from 'axios';

const App = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null); // Sinh viên đang được chọn để chỉnh sửa
  const [isUpdated, setIsUpdated] = useState(false); // Cờ để theo dõi khi nào cần làm mới danh sách

  // Hàm lấy danh sách sinh viên từ API
  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:3000/');
      setStudents(response.data); // Cập nhật danh sách sinh viên
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  // Gọi fetchStudents khi component được mount hoặc khi isUpdated thay đổi
  useEffect(() => {
    fetchStudents();
  }, [isUpdated]);

  // Gọi khi muốn chỉnh sửa một sinh viên
  const handleEdit = (student) => {
    setSelectedStudent(student);
  };

  // Làm mới danh sách sinh viên sau khi thêm hoặc sửa sinh viên
  const refreshStudents = () => {
    setIsUpdated(!isUpdated); // Đổi trạng thái của cờ isUpdated để kích hoạt useEffect
  };

  return (
    <div>
      <h1>Quản lý sinh viên</h1>
      <StudentForm selectedStudent={selectedStudent} refreshStudents={refreshStudents} />
      <StudentList students={students} onEdit={handleEdit} refreshStudents={refreshStudents} />
    </div>
  );
};

export default App;
