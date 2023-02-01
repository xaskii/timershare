import React from 'react'
import { Box, Input, Text, VStack } from '@chakra-ui/react'
import { useTimer } from 'react-timer-hook'

import { Container } from '../../components/Container'
import { NavBar } from '../../components/Navbar'
import { useRouter } from 'next/router'

// Adding more stuff to timer in future, could be theming, or formatting to be
// passed as props
interface TimerProps {
  offset: number
}
const Timer: React.FC<TimerProps> = () => {
  const router = useRouter()
  // returns as a string, I convert in in the expiry calculation but will fix eventually
  const { offset } = router.query

  console.log(offset)
  const expiry: Date = new Date(new Date().getSeconds() + Number(offset))
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: expiry,
    onExpire: () => console.log('timer done'),
  })
  return (
    <>
      <NavBar />
      <VStack h='full' w='full' justifyContent='center' p={4} spacing={4}>
        <Text fontSize='4xl'>
          {hours}:{minutes}:{seconds} left...
        </Text>
      </VStack>
    </>
  )
}

export default Timer
