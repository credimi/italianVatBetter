const calcXY = (nums: number[]) => {
  return nums.reduce((result, num, i) => {
    if (i % 2 === 0) {
      result[0] += nums[i]
    } else {
      const check = nums[i] * 2
      result[1] += check > 9 ? check - 9 : check
    }
    return result
  }, [0, 0])
}

const calcT = (input: string) => {
  const [x, y] = calcXY(input.split('').map(char => parseInt(char, 10)))
  return (x + y) % 10
}

const fakeVat = (input = Math.random().toString(10).slice(-10)) => {
  if (input.length !== 10) throw new Error('10 chars string only')
  return input + (10 - calcT(input)) % 10
}

const verifyVat = (input: string) => input.length === 11 && calcT(input) === 0

export { fakeVat, verifyVat }
