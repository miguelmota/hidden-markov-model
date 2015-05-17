# hidden-markov-model

[Hidden Markov Models](https://en.wikipedia.org/wiki/Hidden_Markov_model) in JavaScript.

[![NPM](https://nodei.co/npm/hidden-markov-model.png)](https://nodei.co/npm/hidden-markov-model)

# Install

```bash
npm install hidden-markov-model
```

```bash
bower install hidden-markov-model
```

# Usage

This example uses the [Forward algorithm](https://en.wikipedia.org/wiki/Forward_algorithm) to calculate the probability of an observed sequence.

```javascript
var HiddenMarkovModel = require('hidden-markov-model');

var HMM = HiddenMarkovModel();

HMM.setInitialStateVector([0.6, 0.4]); // 1. Healthy, 2. Fever

HMM.setTransitionMatrix([
    // Heathly, Fever
    [0.7, 0.3], // Healhy
    [0.4, 0.6]  // Fever
]);

HMM.setEmissionMatrix([
    // 1. Normal, 2. Cold, 3. Dizzy
    [0.5, 0.4, 0.1], // Healthy
    [0.1, 0.3, 0.6]  // Fever
]);

  /* What is the probability that the Hidden Markov Model is able to
   * generate the observed sequence of being Normal on day 1,
   * Cold on day2, and Dizzy on day 3?
   */
  var alpha = [];
  var result = HMM.forward([0, 1, 2], alpha); // Normal, Cold, Dizzy
  console.log(result); // 0.03628

  console.log(alpha);
  /* [ [ 0.3, 0.04000000000000001 ],
     [ 0.09040000000000001, 0.0342 ],
     [ 0.007696000000000001, 0.028584000000000002 ] ]
  */
```

# License

MIT
