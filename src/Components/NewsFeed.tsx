import React, { useState, useEffect } from 'react';
import axios from 'axios';
import type { Article } from '../types';

interface ApiResponse {
  results: Article[];
}

const NewsFeed: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get<ApiResponse>('https://api.spaceflightnewsapi.net/v4/articles?limit=10');
        setArticles(response.data.results);
      } catch (error) {
        console.error("Lỗi khi tải tin tức:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) return <p>Đang tải tin tức...</p>;

  return (
    <div>
      <h2>Bài 3: Tin tức Hàng không Vũ trụ 🚀</h2>
      {articles.map(article => (
        <div key={article.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '20px', paddingBottom: '20px' }}>
          <img src={article.image_url} alt={article.title} style={{ width: '150px', float: 'left', marginRight: '15px' }} />
          <h3>{article.title}</h3>
          <p>{article.summary}</p>
          <p><small>Ngày đăng: {new Date(article.published_at).toLocaleDateString('vi-VN')}</small></p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Đọc tin gốc</a>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;