import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import type { Student } from '../types';

const StudentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Lấy id từ URL
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudentDetail = async () => {
      try {
        const response = await axios.get<Student>(`https://jsonplaceholder.typicode.com/users/${id}`);
        setStudent(response.data);
      } catch (error) {
        console.error("Lỗi khi tải chi tiết sinh viên:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStudentDetail();
  }, [id]);

  if (loading) return <p>Đang tải thông tin...</p>;
  if (!student) return <p>Không tìm thấy sinh viên.</p>;

  return (
    <div>
      <h2>Chi tiết Sinh viên</h2>
      <p><strong>Họ tên:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Điện thoại:</strong> {student.phone}</p>
      <p><strong>Website:</strong> {student.website}</p>
      <Link to="/bai2">Quay lại danh sách</Link>
    </div>
  );
};

export default StudentDetail;