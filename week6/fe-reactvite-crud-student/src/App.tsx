import { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import { getStudents } from "./services/api";
import { Student } from "./types/Student"; // Import kiểu dữ liệu Student

const App = () => {
  const [studentsData, setStudents] = useState<{
    data: Student[];
    status: string;
  }>({ data: [], status: "" }); // Mảng chứa danh sách sinh viên
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null); // Sinh viên được chọn để chỉnh sửa
  const [isUpdated, setIsUpdated] = useState(false);

  // Hàm lấy danh sách sinh viên từ API
  const fetchStudents = async () => {
    try {
      const data = await getStudents();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  // useEffect sẽ gọi fetchStudents khi component được mount hoặc khi isUpdated thay đổi
  useEffect(() => {
    fetchStudents();
  }, [isUpdated]);

  // Gọi khi muốn chỉnh sửa một sinh viên
  const handleEdit = (student: Student) => {
    // Định nghĩa kiểu dữ liệu cho tham số student
    setSelectedStudent(student);
  };

  // Làm mới danh sách sinh viên sau khi thêm hoặc sửa sinh viên
  const refreshStudents = () => {
    setIsUpdated(!isUpdated);
  };

  return (
    <div>
      <h1>Quản lý sinh viên</h1>
      {/* Form để thêm hoặc chỉnh sửa sinh viên */}
      <StudentForm
        selectedStudent={selectedStudent}
        refreshStudents={refreshStudents}
      />

      {/* Danh sách sinh viên */}
      <StudentList
        students={studentsData.data}
        onEdit={handleEdit}
        refreshStudents={refreshStudents}
      />
    </div>
  );
};

export default App;
