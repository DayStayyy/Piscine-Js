function retry(count, callback, currentCount = 0) {
  return function (...args) {
    return callback(...args).catch((err) => { 
      if (currentCount < count)
        return retry(count, callback, currentCount + 1)(...args);
      else throw err;
    });
  };
}

function timeout(delay = 0, callback, currentCount = 0) {
  return function (...args) {
    const promise1 = new Promise((resolve, reject) => {
      setTimeout(resolve, delay)
    })
    return Promise.race([callback(...args),promise1]).then((value) => {
      if(typeof value === 'object') {
        return value
      } else { 
        throw Error('timeout') 
      }
    });
  };
}