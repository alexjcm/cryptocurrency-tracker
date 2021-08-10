import {transparentize, CHART_COLORS} from '../utils/Utils.js';

export const chartOptions = {
  animation: {
    duration: 2500,
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
      title: {
        display: true,
        text: 'Date',
      },
      ticks: {
        major: {
          enabled: true,
        },
      },
    },
    y: {
      title: {
        display: true,
        text: 'Price',
      },
    },
  },

  //
  interaction: {
    intersect: false,
    mode: 'index',
  },
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
      },
    },
    title: {
      display: true,
      text: 'Chart with Tick Configuration',
    },
    tooltip: {
      backgroundColor: CHART_COLORS.yellow,
      borderColor: CHART_COLORS.yellow,
      borderWidth: 1,
      titleColor: 'black',
      displayColors: true,
    },
  },
};

export const chartStyles = {
  borderColor: CHART_COLORS.green,
  backgroundColor: transparentize(CHART_COLORS.red, 0.5),
  fill: {
    target: 'origin',
    above: 'rgb(255, 0, 0)', // Area will be red above the origin
    below: 'rgb(0, 0, 255)', // And blue below the origin
  },
  borderWidth: 2,
  pointRadius: 0,
  pointStyle: 'circle',
  pointBorderColor: 'rgb(0, 0, 0)',
};
