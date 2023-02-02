import {
  Box,
  HStack,
  Button,
  Container,
  ButtonGroup,
  Heading,
} from '@chakra-ui/react'

export const NavBar = () => (
  // TODO: add border/drop-shadow to surrounding container
  <Box as='nav' outline='xs' w='full'>
    <Container m={6} w='full' p={0}>
      <HStack w='full' alignItems='flex-start'>
        <Heading size='2xl'>Timershare</Heading>
      </HStack>
    </Container>
  </Box>
)
