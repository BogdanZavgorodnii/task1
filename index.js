const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введите ваше число и нажмите Enter: ', (str) => {
  const arr = str.split("");
  let sum = Math.max.apply(null, arr) + Math.min.apply(null, arr);

  console.log(`Сумма меньшей и большей цифры равна: ${sum}`);

  rl.close();
});
