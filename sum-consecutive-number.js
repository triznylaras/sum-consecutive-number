function sumConsecutiveNumbers(number, first_number) {
  let sum = 0
  if (Number.isInteger(number) && number >= 0) {
    sum = (number / 2) * (first_number + number)
    return sum
  } else { return false }
}

console.log(sumConsecutiveNumbers(10, 1))