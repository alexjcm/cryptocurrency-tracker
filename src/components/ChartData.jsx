import React, { useRef, useEffect, useState } from 'react';

import 'chartjs-adapter-date-fns';
import {
  Chart,
  TimeScale,
  PointElement,
  LineController,
  LineElement,
  LinearScale,
  Filler,
} from 'chart.js';

import { chartStyles, options } from '../chartOptions/chartOptions';

const ChartData = ({ data }) => {
  const ctxChartRef = useRef();
  const { day, week, year, detail } = data;
  const [timeFormat, setTimeFormat] = useState('24h');

  const determineTimeFormat = () => {
    switch (timeFormat) {
      case '24h': return day;
      case '7d': return week;
      case '1y': return year;
      default: return day;
    }
  };

  Chart.register(
    LineController,
    LineElement,
    LinearScale,
    PointElement,
    TimeScale,
    Filler
  );

  useEffect(() => {
    let lineChart;
    if (ctxChartRef && ctxChartRef.current && detail) {
      lineChart = new Chart(ctxChartRef.current, {
        type: 'line',
        data: {
          datasets: [
            {
              label: `${detail.name} price`,
              data: determineTimeFormat(),
              ...chartStyles,
            },
          ],
        },
        options: {
          ...options,
        },
      });
    }
    return () => {
      if (lineChart) lineChart.destroy();
    };
  }, [timeFormat, data]); // Corrected dependency array to watch format changes

  if (!detail) return null;

  return (
    <div className="minimal-chart-container">
      <div className="chart-header">
        <div className="chart-price-display">
          <span className="current-price">
            ${detail.current_price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 })}
          </span>
          <span className={`price-change ${detail.price_change_percentage_24h < 0 ? 'color-down' : 'color-up'}`}>
            {detail.price_change_percentage_24h < 0 ? '↓ ' : '↑ '}
            {Math.abs(detail.price_change_percentage_24h).toFixed(2)}%
          </span>
        </div>
        <div className="chart-controls">
          <button onClick={() => setTimeFormat('24h')} className={`time-btn ${timeFormat === '24h' ? 'active' : ''}`}>24H</button>
          <button onClick={() => setTimeFormat('7d')} className={`time-btn ${timeFormat === '7d' ? 'active' : ''}`}>7D</button>
          <button onClick={() => setTimeFormat('1y')} className={`time-btn ${timeFormat === '1y' ? 'active' : ''}`}>1Y</button>
        </div>
      </div>
      <div className="chart-canvas-wrapper">
        <canvas ref={ctxChartRef} id="myChart" height={360}></canvas>
      </div>
    </div>
  );
};

export default ChartData;
