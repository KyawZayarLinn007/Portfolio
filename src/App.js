import Navbar from "./components/Navbar"
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Introduction from "./components/Introduction";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  return ( 
    <>
      {/* navbar */}
      <Navbar />
      <Toolbar />
      <Box 
        sx={{
          paddingLeft: "8%",
          paddingRight: "8%"
        }}
      >

        {/* intro */}
        <Box
          sx={{
            paddingTop: "6%",
            paddingBottom: "6%"
          }}
          className="intro_section_divider"
        >
          <Introduction />
        </Box>

        {/* about */}
        <Box className="section_divider" id="About">
          <About />
        </Box>

        {/* skills */}
        <Box
          sx={{
            marginTop: "10%"
          }}
          className="section_divider"
          id="Skills"
        >
          <Skills />
        </Box>

        {/* contact */}
        <Box
          sx={{
            marginTop: "10%"
          }}
          className="section_divider"
          id="Contact"
        >
          <Contact />
        </Box>
      </Box>
    </>
   );
}
 
export default App;