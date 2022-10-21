import Typography from "@mui/material/Typography";
import Typed from "react-typed";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

const Introduction = () => {
  return (
    <>
      <Typography variant="h1" className="intro_header">Hello 👋,</Typography>
      <Typography variant="h1" className="intro_header">I'm Kyaw Zayar Linn,</Typography>
      <Typography variant="h1" className="intro_header">
        a{" "}
        <Typed
          strings={[
            "Web Developer",
            "Programming Enthusiast",
            "Self-Learner",
            "Problem Solver",
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
      </Typography>

      {/* socials section */}
      <Stack 
        direction="row" 
        spacing={2}
        sx={{
            marginTop: "8%",
            marginBottom: "8%"
        }}
        className="socials_divider"
      >
        {/* github */}
        <Link
          href="https://github.com/KyawZayarLinn007"
          underline="none"
          color="inherit"
          target="_blank"
        >
          <IconButton aria-label="github" color="inherit">
            <GitHubIcon style={{fontSize: "4rem"}} className="socials_btns"/>
          </IconButton>
        </Link>

        {/* linkedIn */}
        <Link
          href="https://www.linkedin.com/in/kyaw-zayar-linn-010913191/"
          underline="none"
          color="inherit"
          target="_blank"
        >
          <IconButton aria-label="linkedIn" color="inherit">
            <LinkedInIcon style={{fontSize: "4rem"}} className="socials_btns"/>
          </IconButton>
        </Link>

        {/* facebook */}
        <Link
          href="https://www.facebook.com/kyaw.z.linn.733450/"
          underline="none"
          color="inherit"
          target="_blank"
        >
          <IconButton aria-label="linkedIn" color="inherit">
            <FacebookIcon style={{fontSize: "4rem"}} className="socials_btns"/>
          </IconButton>
        </Link>
      </Stack>
    </>
  );
};

export default Introduction;
