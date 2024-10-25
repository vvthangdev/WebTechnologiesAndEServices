export interface Student {
  _id?: string; // Mã định danh của sinh viên
  StudentID: string;
  Name: string;
  Roll: number;
  Birthday: string; // Bạn có thể sử dụng Date nếu cần, nhưng ở đây tôi sử dụng string vì dữ liệu API thường là string
  Address: string;
  data?: any;
}
