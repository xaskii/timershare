import React from 'react'
import { Flex, ButtonGroup, Button } from '@chakra-ui/react'
import { DarkModeSwitch } from './DarkModeSwitch'
import { NavBar } from './Navbar'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex
      // bg='gray.50'
      direction='column'
      w='full'
      h='100vh'
      justifyContent='flex-start'
    >
      <NavBar />
      {children}
      <Flex w='full' p={6} justifyContent='flex-end' justifySelf='flex-end'>
        <ButtonGroup gap={2} variant='link' size='lg'>
          <Button>Contact</Button>
          <Button>About</Button>
        </ButtonGroup>
      </Flex>
      <DarkModeSwitch />
    </Flex>
  )
}
