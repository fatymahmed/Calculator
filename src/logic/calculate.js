import operate from './operate';

const calculate = (calculateObject, buttonName) => {
  if (buttonName === '+/-') {
    calculateObject.total *= -1;
    calculateObject.next *= -1;
  } else {
    calculateObject.total = operate(calculateObject.total, calculateObject.next, buttonName);
  }
  return calculateObject;
};
export default calculate;
