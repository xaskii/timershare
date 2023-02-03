import {
  Link as ChakraLink,
  Flex,
  Button,
  VStack,
  ButtonGroup,
  Container,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import { Hero } from '../components/Hero'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/Navbar'
import { AboutSection } from '../components/AboutSection'
import { TimerCreation } from '../components/TimerCreation'

// refactored layout into Layout.tsx then imported into _app
// not sure if this decision better or worse when the layouts are simple
const Index = () => (
  <Container p={0} h='full' maxW='container.xl'>
    <VStack
      spacing={4}
      p={4}
      pb={40}
      h='full'
      w='full'
      alignItems='flex-start'
      justifyContent='center'
    >
      <TimerCreation />
    </VStack>
  </Container>
)

export default Index
