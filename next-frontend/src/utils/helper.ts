export const pad = (...nums: number[]): string => {
  const padded = nums.map((num) => (num > 9 ? `${num}` : `0${num}`))
  const time = padded.join(':')
  return time
}

// calculating date outside of component fixes everything
// was running into issues for two days hahahahahahahh kms
export const offsetToDate = (offset: number): Date => {
  const time = new Date()
  time.setSeconds(time.getSeconds() + offset)
  return time
}
