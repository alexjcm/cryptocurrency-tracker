import { transparentize } from '../utils/utils';

export const options = {
  animation: {
    duration: 1000,
  },
  maintainAspectRatio: false,
  responsive: true,
  parsing: {
    xAxisKey: 'time',
    yAxisKey: 'price',
  },
  scales: {
    x: {
      type: 'time',
      display: true,
      grid: {
        display: false,
        drawBorder: false,
      },
      border: {
        display: false,
      },
      ticks: {
        color: '#666',
        maxRotation: 0,
        autoSkip: true,
        maxTicksLimit: 6,
      },
    },
    y: {
      display: true,
      grid: {
        display: false,
        drawBorder: false,
      },
      border: {
        display: false,
      },
      ticks: {
        color: '#666',
        callback: (value) => {
          return '$' + value.toLocaleString();
        },
      },
    },
  },
  interaction: {
    intersect: false,
    mode: 'index',
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      backgroundColor: '#111',
      titleColor: '#888',
      bodyColor: '#FFF',
      borderColor: 'rgba(255, 255, 255, 0.1)',
      borderWidth: 1,
      padding: 12,
      displayColors: false,
      callbacks: {
        label: (context) => '$' + context.parsed.y.toLocaleString(undefined, {minimumFractionDigits: 2}),
      }
    },
  },
};

export const chartStyles = {
  borderColor: '#FFFFFF',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  fill: true,
  borderWidth: 2,
  pointRadius: 0,
  pointHoverRadius: 6,
  pointHoverBackgroundColor: '#FFF',
  tension: 0.1,
};
