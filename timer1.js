const args = process.argv.slice(2);

for(let arg of args) {
  setTimeout(() => {process.stdout.write('\x07')}, arg * 1000)
}