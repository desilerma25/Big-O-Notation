const nemo = ['nemo'];

function findNemo(array) {
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found Nemo!');
        }
    }
    let t1 = performance.now();
    console('Call to fine Nemo took ' + (t0 - t1) + ' milliseconds');
}

findNemo(nemo);