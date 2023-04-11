function multiplyBiggerNumByTwo(num1, num2) {
  let bigNum = orderNums(num1, num2)[0];
  return bigNum * 2;
}

function divideBiggerNumByThree(num1, num2) {
  let bigNum = orderNums(num1, num2)[0];
    return bigNum / 3;
}

function eatMostTacos(sum1, sum2) {
  let bigNum = orderNums(sum1, sum2)[0];
    return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog = orderNums(weight1, weight2)[1];
    return `I adopted a dog that weighs ${smallDog} pounds.`
}

function orderNums(num1, num2) {
  return num1 > num2 ? [num1,num2] : [num2,num1];
}
/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
