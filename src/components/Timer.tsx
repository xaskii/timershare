import React, { useEffect, useState } from 'react'
import { useTimer } from 'react-timer-hook'
import { Text, Button, Flex } from '@chakra-ui/react'

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
      <Text fontSize='5xl'>
        {/* TODO: padding with leading zeros, probably just make helper function */}
        {hours}:{minutes}:{seconds}
      </Text>
      <Flex>
        <Button>- 15s</Button>
        <Button
          onClick={() => {
            const time = new Date()
            time.setSeconds(time.getSeconds() + offset)
            restart(time)
          }}
        >
          Restart
        </Button>
        <Button>+15s</Button>
      </Flex>
    </>
  )
}
