var test = require('tape');
var HiddenMarkovModel = require('../hidden-markov-model');

test('HMM', function (t) {
  t.plan(3);

  var HMM = HiddenMarkovModel();

  HMM.setInitialStateVector([0.6, 0.4]); // Healhy, Fever

  HMM.setTransitionMatrix([
      // Heathly, Fever
      [0.7, 0.3], // Healhy
      [0.4, 0.6]  // Fever
  ]);

  HMM.setEmissionMatrix([
      // Normal, Cold, Dizzy
      [0.5, 0.4, 0.1], // Healthy
      [0.1, 0.3, 0.6]  // Fever
  ]);

    // What is the probability that the given model is able generate the sequence of being Normal on day 1, Cold on day2, and Dizzy on day 3?
    var alpha = [];
    var result = HMM.forward([0, 1, 2], alpha); // Normal, Cold, Dizzy
    t.equal(result, 0.03628);

    t.deepEqual(alpha, [ [ 0.3, 0.04000000000000001 ],
      [ 0.09040000000000001, 0.0342 ],
      [ 0.007696000000000001, 0.028584000000000002 ] ]
    );

    result = HMM.forward([]);
    t.equal(result, 0);
});
