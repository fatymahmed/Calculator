import Big from 'big';

const operate = (numberOne, numberTwo, operation) => {
  switch (operation) {
    case '-':
      return Big(numberOne) - Big(numberTwo);
    case '+':
      return Big(numberOne) + Big(numberTwo);
    case '/':
      return Big(numberOne) / Big(numberTwo);
    case '%':
      return Big(numberOne) % Big(numberTwo);
    default:
      return Big(numberOne) * Big(numberTwo);
  }
};
export default operate;
