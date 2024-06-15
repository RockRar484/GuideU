'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js/auto';
import axios from 'axios';

const LineChart = ({ institute, category, branch }) => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({ years: [], openRanks: [], closeRanks: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8000/api/yearlytrend/', {
          params: {
            institute:institute,
            category:category,
            branch: branch,
          },
        });

        console.log('API response:', response.data);

        const openRanks = [];
        const closeRanks = [];
        const years = [];

        response.data.forEach(item => {
          openRanks.push(parseInt(item.open_rank.open_rank, 10));
          closeRanks.push(parseInt(item.close_rank.close_rank, 10));
          years.push("" + item.year);
        });

        setChartData({ years, openRanks, closeRanks });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [institute, category, branch]);

  useEffect(() => {
    if (!chartRef.current || chartData.years.length === 0 || chartData.openRanks.length === 0 || chartData.closeRanks.length === 0) {
      return;
    }

    const ctx = chartRef.current.getContext('2d');
    let myChart;

    if (ctx) {
      myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: chartData.years,
          datasets: [
            {
              label: 'Open Rank',
              data: chartData.openRanks,
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            },
            {
              label: 'Close Rank',
              data: chartData.closeRanks,
              fill: false,
              borderColor: 'rgb(255, 99, 132)',
              tension: 0.1
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }   
        }
      });
    }

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [chartData]);

  return <canvas ref={chartRef} className='p-3 lg:p-20 md:p-10 sm:p-3' />;
};

export default LineChart;
