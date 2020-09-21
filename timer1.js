const args = process.argv.slice(2);

const timer = function(times) {
  if (times.length > 0) {
    for (let i = 0; i < times.length; i++) {
      if(times[i] >= 0 && !isNaN(times[i])) {
        setTimeout(() => {
          process.stdout.write('\x07');
        },times[i] * 1000);
      }
    }
  }
}
timer(args);
