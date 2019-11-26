import operate from './operate';

const calculate = (calculateObject, buttonName) => {
  if (buttonName === '+/-') {
    calculateObject.total = (Number(calculateObject.total) * -1).toString();
  } else {
    calculateObject.total = operate(calculateObject.total,
      calculateObject.next, buttonName).toString();
  }
  return calculateObject;
};
export default calculate;
