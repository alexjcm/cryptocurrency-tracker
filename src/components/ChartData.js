import React, {useRef, useEffect, useState} from 'react';

import 'chartjs-adapter-date-fns';
import {
  Chart,
  TimeScale,
  PointElement,
  LineController,
  LineElement,
  LinearScale,
} from 'chart.js';

import {chartStyles, options} from '../chartOptions/chartOptions';

const ChartData = ({data}) => {
  const ctxChartRef = useRef();
  const {day, week, year, detail} = data;
  const [timeFormat, setTimeFormat] = useState('24h');

  const determineTimeFormat = () => {
    switch (timeFormat) {
      case '24h':
        return day;
      case '7d':
        return week;
      case '1y':
        return year;
      default:
        return day;
    }
  };

  Chart.register(
    LineController,
    LineElement,
    LinearScale,
    PointElement,
    TimeScale
  );

  useEffect(() => {
    if (ctxChartRef && ctxChartRef.current && detail) {
      const lineChart = new Chart(ctxChartRef.current, {
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
      return () => {
        lineChart.destroy();
      };
    }
  });

  const renderPrice = () => {
    if (detail) {
      return (
        <>
          <p className="my-0">${detail.current_price.toFixed(2)}</p>
          <p
            className={
              detail.price_change_24h < 0
                ? 'text-danger my-0'
                : 'text-success my-0'
            }>
            {detail.price_change_24h < 0 ? (
              <i className="fas fa-sort-down align-middle"></i>
            ) : (
              <i className="fas fa-sort-up align-middle"></i>
            )}
            {detail.price_change_percentage_24h.toFixed(2)}%
          </p>
        </>
      );
    }
  };
  return (
    <div className="bg-white border mt-2 rounded p-3">
      <div>{renderPrice()}</div>
      <div>
        <canvas ref={ctxChartRef} id="myChart" height={250}></canvas>
      </div>

      <div className="chart-buttons">
        <button
          onClick={() => setTimeFormat('24h')}
          className="btn btn-outline-secondary btn-sm">
          24h
        </button>
        <button
          onClick={() => setTimeFormat('7d')}
          className="btn btn-outline-secondary btn-sm mx-1">
          1 week
        </button>
        <button
          onClick={() => setTimeFormat('1y')}
          className="btn btn-outline-secondary btn-sm">
          1 year
        </button>
      </div>
    </div>
  );
};

export default ChartData;
