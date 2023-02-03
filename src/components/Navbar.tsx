import NextLink from 'next/link'
import {
  Box,
  HStack,
  Button,
  Container,
  ButtonGroup,
  Heading,
  Flex,
  Link,
} from '@chakra-ui/react'

export const NavBar = () => (
  // TODO: add border/drop-shadow to surrounding container
  <Box shadow='sm' w='full'>
    <Container m={5} w='full' p={0}>
      <HStack w='full' alignItems='flex-start'>
        <Heading size='2xl'>
          <Link href='/'>Timershare</Link>
        </Heading>
      </HStack>
    </Container>
  </Box>
)
