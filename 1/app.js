(function(){

var MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
                    'Sep', 'Oct', 'Nov', 'Dec'];

var climograph = c3.generate({
  bindto: '#climograph',
  data: {
    url: 'data/washington-dc.csv',
    types: {
      precip: 'bar',
      temp: 'line'
    },
    axes: {
      precip: 'y',
      temp: 'y2'
    },
    xFormat: '%m',
    names: {
      precip: 'Precipitation (mm)',
      temp: 'Temperature (°C)'
    }
  },
  axis: {
    x: {
      label: {
        text: 'Month',
        position: 'outer-center'
      },
      tick: {
        culling: false,
        format: function(v) {
          return MONTHS_SHORT[v];
        }
      }
    },
    y: {
      label: {
        text: 'Precipitation (mm)',
        position: 'outer-middle',
      },
      tick: {
        format: function(v) {
          // convert inches to mm
          return Math.round(v * 2.54 * 10);
        }
      }
    },
    y2: {
      show: true,
      label: {
        text: 'Temperature (°C)',
        position: 'outer-middle'
      }
    }
  }
});

})();
