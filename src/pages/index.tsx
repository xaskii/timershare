import {
  Link as ChakraLink,
  Flex,
  Button,
  VStack,
  ButtonGroup,
  Container,
  Heading,
  HStack,
  Stack,
  Input,
} from '@chakra-ui/react'

// refactored layout into Layout.tsx then imported into _app
// not sure if this decision better or worse when the layouts are simple
const Index = () => (
  <Container p={0} h='full' maxW='90%'>
    <Stack
      justifyContent='center'
      alignContent='center'
      direction={['column', 'column', 'column', 'row']}
      h='full'
      w='full'
      p={10}
    >
      <VStack
        h='full'
        w={['full', 'full', 'full', '50%']}
        alignItems='center'
        textAlign='center'
        justifyContent='center'
      >
        <Heading fontSize='8xl'>Share a timer with a friend.</Heading>
      </VStack>
      <VStack
        justifyContent='center'
        w={['full', 'full', 'full', '50%']}
        spacing={4}
        textAlign='center'
      >
        <Heading>How long should it be?</Heading>
        <Input textAlign='center' w='80%' fontSize='md' shadow='md'></Input>
        {/* <Button
          borderColor='black'
          size='lg'
          borderRadius='lg'
          border='2px'
          bg='black'
          color='gray.300'
        >
          Start
        </Button> */}
      </VStack>
    </Stack>
  </Container>
)

export default Index
