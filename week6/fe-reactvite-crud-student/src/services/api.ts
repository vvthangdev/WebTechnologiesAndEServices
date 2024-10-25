import axios from 'axios';
import { Student } from '../types/Student';

const BASE_URL = 'http://localhost:3000';

// Lấy danh sách sinh viên
export const getStudents = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};

// Thêm sinh viên mới
export const addStudent = async (student: Student) => {
  try {
    await axios.post(BASE_URL, student);
  } catch (error) {
    console.error('Error adding student:', error);
    throw error;
  }
};

// Cập nhật sinh viên
export const updateStudent = async (id: string, student: Student) => {
  try {
    await axios.put(`${BASE_URL}/${id}`, student);
  } catch (error) {
    console.error('Error updating student:', error);
    throw error;
  }
};

// Xóa sinh viên
export const deleteStudent = async (id: string) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting student:', error);
    throw error;
  }
};
