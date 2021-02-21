const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  var submitter;
  var metricValue = 0;
  vegetables.forEach(element => {
    if (metricValue < element[metric]) {
      metricValue = element[metric];
      submitter = element.submitter;
    }
  });
  return submitter;
}


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';

judgeVegetable(vegetables, metric);
