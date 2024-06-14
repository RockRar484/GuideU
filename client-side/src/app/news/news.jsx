'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

const NewsView = () => {
  const [articles, setArticles] = useState([]);
  let count=0

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        if(count===0)
        {
            const response = await axios.get('http://localhost:8000/api/news/');
            setArticles(response.data.articles);
            console.log(response.data.articles);
            console.log(articles);
            count++
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    const fetchArticleData = async () => {
      const updatedArticles = await Promise.all(
        articles.map(async (article) => {
          try {
            const { data } = await axios.get(article.link);
            const $ = cheerio.load(data);

            // Adjust the selector based on the actual structure of the HTML
            const imageUrl = $('meta[property="og:image"]').attr('content') || $('img').attr('src');
            return { ...article, imageUrl: imageUrl || 'default-image-url.jpg' };
          } catch (error) {
            console.error('Error fetching article data:', error);
            return article; // Return the original article if there was an error
          }
        })
      );
      setArticles(updatedArticles);
      console.log(articles)
    };

    if (articles.length > 0 && count===0) {
      fetchArticleData();
      count++
    }
  }, [articles]);

  return (
    <div className="px-20 lg:px-90 md:px-40 sm:px-20 py-20">
      <div className="max-w-7xl mx-auto my-5 sm:my-10 p-5 sm:p-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {articles.length>0 &&articles.map((article, index) => (
            <div
              key={index}
              className="relative w-full flex items-end justify-start text-left bg-cover bg-center"
              style={{ height: '450px', backgroundImage: `url(${article.imageUrl})` }}
            >
              <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
              <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                <a
                  href="#"
                  className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500"
                >
                  {article.category || 'General'}
                </a>
                <div className="text-white font-regular flex flex-col justify-start">
                  <span className="text-3xl leading-0 font-semibold">{article.date?.day || '-'}</span>
                  <span className="-mt-3">{article.date?.month || '-'}</span>
                </div>
              </div>
              <main className="p-5 z-10">
                <a
                  href={article.link}
                  className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline"
                >
                  {article.title}
                </a>
              </main>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsView;
