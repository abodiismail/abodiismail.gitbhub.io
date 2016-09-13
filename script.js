var chart = new Chartist.Line('.ct-chart', {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', '' ],
  series: [
    [4451, 4109, 4406, 4855, 6019, 8073, 9385, 8877, 9976, 8184, 6009, 6957,],
    [4896, 4040, 4117, 3917, 5376, 6619, 8065, 11746, 24307, 39196, 36726, 13872,],
    [4166, 2732, 2240, 2049, 2069, 2110, 2403,],
  ]
}, {
  fullWidth: true,
  chartPadding: {
    right: 10
  },
  lineSmooth: Chartist.Interpolation.cardinal({
    fillHoles: true,
  }),
  low: 0
});
