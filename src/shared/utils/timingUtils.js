
function debounce(callback, limiter) {
  var lastCall = null;
  return function () {
    if (lastCall === null) {
      console.log(limiter);
      lastCall = setTimeout(() => {lastCall = null; callback(arguments);}, limiter);
    } else {
      return;
    }
  };
}

export default debounce;
export {debounce};
