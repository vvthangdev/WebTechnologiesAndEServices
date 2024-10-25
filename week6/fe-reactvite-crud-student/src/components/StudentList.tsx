import { deleteStudent } from "../services/api"; // Import hàm API
import { Student } from "../types/Student";

interface StudentListProps {
  // students: Student | null;
  students: Student[];
  onEdit: (student: Student) => void;
  refreshStudents: () => void;
}

const StudentList = ({
  students,
  onEdit,
  refreshStudents,
}: StudentListProps) => {
  // Hàm xử lý xóa sinh viên
  const handleDelete = async (id: string) => {
    try {
      await deleteStudent(id); // Gọi hàm từ service API
      refreshStudents(); // Làm mới danh sách sinh viên sau khi xóa
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div>
      <h2>Danh sách sinh viên</h2>
      <table className="table table-hover">
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
          {/* {console.log({students})} */}
          {students &&
            students.map((student: Student) => (
              <tr key={student._id}>
                <td>{student.Roll}</td>
                <td>{student.StudentID}</td>
                <td>{student.Name}</td>
                <td>{new Date(student.Birthday).toLocaleDateString()}</td>
                <td>{student.Address}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => onEdit(student)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    // onClick={() => handleDelete(student._id)}
                    onClick={() => student._id && handleDelete(student._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
