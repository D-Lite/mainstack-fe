import { Container, Drawer, DrawerContent, VStack, useDisclosure } from '@chakra-ui/react'
import './App.css'
import { useTheme } from '@chakra-ui/react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import TopNav from './components/Topbar'

function App() {
  const theme = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container bg='brandWhite' p='0' maxW='100vw'>
      <Sidebar
        onClose={() => onClose
        }
        display={{ base: 'none', md: 'block' }}
      // maxW='30vw'
      />
      < Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full" >
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer >
      {/* mobilenav */}
      <TopNav onOpen={onOpen} />
      <Dashboard />
    </Container >
  )
}

export default App
