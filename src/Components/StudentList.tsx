import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import type { Student } from '../types';

const StudentList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get<Student[]>('https://jsonplaceholder.typicode.com/users');
        setStudents(response.data);
      } catch (error) {
        console.error("Lỗi khi tải danh sách sinh viên:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  if (loading) return <p>Đang tải danh sách...</p>;

  return (
    <div>
      <h2>Bài 2: Danh sách Sinh viên 🧑‍🎓</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            <Link to={`/student/${student.id}`}>
              <strong>{student.name}</strong> - {student.email}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;