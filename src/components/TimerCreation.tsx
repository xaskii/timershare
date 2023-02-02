import { useState } from 'react'
import {
  Button,
  Box,
  NumberInput,
  NumberInputField,
  VStack,
  Text,
  Container,
  Input,
} from '@chakra-ui/react'
import { useTimer } from 'react-timer-hook'

import { Timer } from './Timer'

export const TimerCreation = () => {
  const [expanded, setExpanded] = useState(false)
  const [offset, setOffset] = useState(0)
  if (!offset) {
    return (
      <Container p={0} alignItems='center' textAlign='center'>
        {expanded ? (
          <VStack gap={0}>
            <Text pb={0} fontSize='5xl'>
              How long?
            </Text>
            <Input
              m={0}
              size='lg'
              width='md'
              textAlign='center'
              fontSize='2xl'
            />
            <Button
              size='lg'
              colorScheme='telegram'
              alignSelf='center'
              onClick={() => {
                setOffset(100)
              }}
            >
              Start
            </Button>
          </VStack>
        ) : (
          <VStack>
            <Text fontSize='5xl'>
              Create a timer to share with your friends!
            </Text>
            <Button
              size='lg'
              colorScheme='telegram'
              alignSelf='center'
              onClick={() => setExpanded(true)}
            >
              Create Timer
            </Button>
          </VStack>
        )}
      </Container>
    )
  } else {
    return (
      <Container p={0} alignItems='center' textAlign='center'>
        <VStack>
          <Timer offset={offset} />
        </VStack>
      </Container>
    )
  }
}
