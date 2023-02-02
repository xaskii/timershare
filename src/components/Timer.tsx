import React, { useEffect, useState } from 'react'
import { useTimer } from 'react-timer-hook'
import { Text, Button, createLocalStorageManager } from '@chakra-ui/react'

interface TimerProps {
  offset: number
}

export const Timer: React.FC<TimerProps> = ({ offset }) => {
  // const [expiry, setExpiry] = useState<Date | null>(null)
  // useEffect(() => {
  //   const time = new Date()
  //   time.setSeconds(time.getSeconds() + offset)
  //   setExpiry(time)
  // }, [offset])

  const time = new Date()
  time.setSeconds(time.getSeconds() + offset)
  const expiry = time

  const { seconds, minutes, hours, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp: expiry,
      onExpire: () => console.warn('onExpire called'),
    })

  console.log({ offset })
  console.log({ expiry })

  return (
    <>
      <Text fontSize='5xl'>{seconds} seconds left...</Text>
      <Button
        onClick={() => {
          const time = new Date()
          time.setSeconds(time.getSeconds() + offset)
          restart(time)
        }}
      >
        Restart
      </Button>
    </>
  )
}
