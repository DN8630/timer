const args = process.argv.slice(2);
if (args.length > 0) {
  for (let i = 0; i < args.length; i++) {
    if(args[i] >= 0 && !isNaN(args[i])) {
      setTimeout(() => {
        process.stdout.write('\x07');
      },args[i] );
    }
  }
}