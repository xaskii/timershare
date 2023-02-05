import React, { useEffect, useState } from 'react'
import { useTimer } from 'react-timer-hook'
import { Text, Button, Flex, ButtonGroup, VStack } from '@chakra-ui/react'

import { pad, offsetToDate } from '../utils/helper'

// offset and expiry to add functions for adding and removing time
// will implement own timer hook to fix this in future, cuz this is so bad
interface TimerProps {
  offset: number
  expiry?: Date
}

export const Timer: React.FC<TimerProps> = ({ expiry, offset }) => {
  const { seconds, minutes, hours, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp: offsetToDate(offset),
      onExpire: () => console.warn('onExpire called'),
    })

  return (
    <VStack m={0} spacing={0} alignSelf='center' p={0}>
      <Text fontSize='7xl' textAlign='center'>
        {/* TODO: padding with leading zeros, probably just make helper function */}
        {pad(hours, minutes, seconds)}
      </Text>
      <Flex>
        <ButtonGroup variant='outline' colorScheme='black'>
          <Button>- 15s</Button>
          <Button onClick={() => restart(offsetToDate(offset))}>Restart</Button>
          {isRunning ? (
            <Button onClick={pause}>Pause</Button>
          ) : (
            <Button onClick={resume}>Resume</Button>
          )}

          <Button>+15s</Button>
        </ButtonGroup>
      </Flex>
    </VStack>
  )
}
