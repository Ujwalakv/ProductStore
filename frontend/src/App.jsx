import {Routes,Route } from 'react-router-dom';
import {Box,useColorModeValue} from "@chakra-ui/react";
import CreatePage from './pages/CreatePage.jsx';
import HomePage from './pages/HomePage.jsx';
import Navbar from './components/Navbar.jsx';

const App = () => {
  return (
    <div>
      <Box minH={"100vh"} bg={useColorModeValue("gray.100","gray.900")}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/create" element={<CreatePage/>}/>
        </Routes>
      </Box>
    </div>
  )
}

export default App
