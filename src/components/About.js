import Typography from "@mui/material/Typography";
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';
import Link from "@mui/material/Link";

const About = () => {
  return (
    <>
      <Typography
        variant="h2"
      >
        About
      </Typography>
      
      {/* about content */}
      <Typography 
        variant="body2"
        sx={{
            marginTop: "4%",
            marginBottom: "4%",
            fontWeight: "bold"
        }}
        className="about_section_divider"
      >
        I’m a second year student from University of Computer Studies Mandalay
        (UCSM) and currently doing CDM due to Covid and government issues. I’ve
        been self-studying since Covid and I got a few experiences with both
        local and foreign companies. Now I’m seeking for a more challenging
        work.
      </Typography>
    
     {/* resume download btn */}
      <Link
          href="./Kyaw-Zayar-Linn.pdf"
          underline="none"
          color="inherit"
          target="_blank"
      >
        <Button 
            variant="contained" 
            endIcon={<DownloadIcon />}
            color="primary">
            My Resume
        </Button>
      </Link>
    </>
  );
};

export default About;
