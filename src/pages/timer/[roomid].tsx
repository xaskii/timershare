import { Container, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Timer } from '../../components/Timer'

const TimerPage = ({}) => {
  const router = useRouter()
  const roomID = router.query.roomid
  return (
    <Container p={0} h='full' maxW='container.xl'>
      <VStack
        spacing={0}
        p={4}
        h='full'
        w='full'
        alignItems='center'
        justifyContent='center'
      >
        <Timer offset={100}></Timer>
      </VStack>
    </Container>
  )
}

export default TimerPage
