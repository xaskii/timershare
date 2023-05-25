import { Container, VStack, Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { Timer } from '../../components/Timer'
import { SocketWrapper } from '../../components/SocketWrapper'

const TimerView = () => {
  const router = useRouter()
  return (
    <Container p={0} h='full' maxW='90%'>
      <SocketWrapper />
    </Container>
  )
}

export default TimerView
