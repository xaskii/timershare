import React from 'react'
import { Flex, ButtonGroup, Button } from '@chakra-ui/react'
import { Container } from './Container'
import { DarkModeSwitch } from './DarkModeSwitch'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container w='full' h='100vh'>
      {children}
      <Flex w='full' p={6} justifyContent='flex-end' justifySelf='flex-end'>
        <ButtonGroup gap={2} variant='link' size='lg'>
          <Button>Contact</Button>
          <Button>About</Button>
        </ButtonGroup>
      </Flex>
      <DarkModeSwitch />
    </Container>
  )
}
