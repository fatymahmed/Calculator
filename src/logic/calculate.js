import operate from './operate';

const calculate = (calculateObject, buttonName) => {
  if (buttonName === '+/-') {
    calculate.total = (Number(calculateObject.total) * (-1)).toString();
    calculateObject.next = (Number(calculateObject.next) * (-1)).toString();
    calculateObject.next *= -1;
  } else {
    calculateObject.total = operate(calculateObject.total, calculateObject.next, buttonName).toString();
  }
  return calculateObject;
};
export default calculate;
