const checkThaiPid = (pid: string | number) => {
  if (!pid) return false

  const pidString = pid.toString()
  const pidArray = [...pidString].slice(0, 12)
  const lastDigit = +pid.toString().slice(-1)
  const sum = pidArray
    .map((x, i) => ((+x) * (13 - i)))
    .reduce((x, y) => x + y)

  return (11 - sum % 11) % 10 === lastDigit
}

export default checkThaiPid