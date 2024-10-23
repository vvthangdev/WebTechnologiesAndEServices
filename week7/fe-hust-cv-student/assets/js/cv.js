function handleChangeTab(event, srcTab, id) {
  if (!srcTab) {
    return;
  }
  var i, tabcontent, tablinks;
  tabcontent = document.querySelectorAll(srcTab + ' > .card-body > div');

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  tablinks = document.querySelectorAll(
    srcTab + ' > .navbar-list > ul > li > a'
  );
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(/ *active */, '');
  }
  event.currentTarget.className += ' active';
  const toDisplay = document.getElementById(id);
  if (toDisplay) {
    toDisplay.style.display = 'block';
  }
}

function genChart() {
  var dataSeriesLearning = [3.2, 3.8, 3.6, 4.0];
  var dataSeriesTraining = Array(4)
    .fill(0)
    .map((point) => Math.floor(Math.random() * 100)); /// array of numbers

  var optionsLearning = {
    chart: {
      height: 400,
      type: 'bar',
      stacked: false,
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: 13,
        fontWeight: 400,
      },
    },
    // colors: ["#05b978"],
    series: [
      {
        name: 'GPA',
        data: dataSeriesLearning,
      },
    ],
    plotOptions: {
      bar: {
        columnWidth: '50%', // column width x axis
      },
    },
    xaxis: {
      categories: [202401, 202402, 202501, 202502],
      axisBorder: {
        color: '#0086b3',
      },
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#0086b3',
        },
        labels: {
          style: {
            colors: '#0086b3',
          },
        },
        title: {
          text: 'Biểu đồ kết quả học tập',
          style: {
            color: '#0086b3',
            fontSize: 14,
            fontWeight: 400,
          },
        },
        max: 4, // max height y axis
      },
    ],
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false,
      },
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40,
    },
  };

  var optionsTraining = {
    chart: {
      height: 400,
      type: 'bar',
      stacked: false,
    },
    dataLabels: {
      enabled: true,
    },
    colors: ['#05b978'],
    series: [
      {
        name: 'Biểu đồ rèn luyện',
        data: dataSeriesTraining,
      },
    ],
    plotOptions: {
      bar: {
        columnWidth: '50%', // column width x axis
      },
    },
    xaxis: {
      categories: [202401, 202402, 202051, 20252],
      axisBorder: {
        color: '#0086b3',
      },
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#0086b3',
        },
        labels: {
          style: {
            colors: '#0086b3',
          },
        },
        title: {
          text: 'Điểm rèn luyện',
          style: {
            color: '#0086b3',
            fontSize: 14,
            fontWeight: 500,
          },
        },
        max: 100, // max height y axis
      },
    ],
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false,
      },
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40,
    },
  };

  var chartLearning = new ApexCharts(
    document.querySelector('#chart-learning'),
    optionsLearning
  );
  var chartTraining = new ApexCharts(
    document.querySelector('#chart-training'),
    optionsTraining
  );

  chartLearning.render();
  chartTraining.render();
}
genChart();
