import { Container, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import TopNav from './components/Topbar'

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container bg='brandWhite' p='0'>
      <Sidebar
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
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

export default App;