var performance = require('performance');
var results = performance.runBenchmarks();
console.log(results);


const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

const large = new Array(100).fill('nemo')
// creates array with nemo 100 times
const larger = new Array(1000).fill('nemo')
const massive = new Array(100000).fill('nemo')


function findNemo(array) {
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found Nemo!');
        }
    }
    let t1 = performance.now();
    console('Call to find Nemo took ' + (t0 - t1) + ' milliseconds');
}

findNemo(nemo);
findNemo(everyone);
findNemo(large);
findNemo(larger);
findNemo(massive);