import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { VStack, Text } from '@chakra-ui/react'
import { Timer } from '../../components/Timer'

interface TimerPageProps {}

const TimerPage: React.FC<TimerPageProps> = ({}) => {
  const router = useRouter()
  useEffect(() => {
    if (!router.isReady) return
  })
  return (
    <>
      <VStack
        spacing={4}
        p={4}
        pb={40}
        h='full'
        w='full'
        alignItems='center'
        justifyContent='center'
      >
        <Timer offset={Number(router.query.offset)} />
        <Text>offset: {router.query.offset} </Text>
      </VStack>
    </>
  )
}

export default TimerPage
