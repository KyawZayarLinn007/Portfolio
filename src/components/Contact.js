import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4mmgt7s",
        "template_3fdenri",
        form.current,
        "hSxOW3kppK1q0ubEk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Typography variant="h2">Contact</Typography>

      {/* wrapper grid */}
      <Grid
        container
        rowSpacing={8}
        columnSpacing={2}
        sx={{ marginTop: "4%", marginBottom: "4%" }}
      >
        {/* contact detail section */}
        <Grid xs={12} md={6}>
          <Typography
            variant="h6"
            sx={{ marginBottom: "4%", fontWeight: "bold" }}
          >
            You can contact me via
          </Typography>

          <Stack direction="row" spacing={1}>
            <EmailIcon />
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              kyawzayarlinnkb10@gmail.com
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1}>
            <LocalPhoneIcon />
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              (+95)9787958124
            </Typography>
          </Stack>
        </Grid>

        {/* direct message section */}
        <Grid xs={12} md={6}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Send me a direct message
          </Typography>

          {/* form section */}
          <Box
            sx={{
              marginTop: "4%",
            }}
          >
            <form ref={form} onSubmit={sendEmail}>
              <Stack direction="row" spacing={6}>
                {/* name field */}
                <TextField id="user_name" name="user_name" label="Name" variant="standard" />
                {/* email field */}
                <TextField id="user_email" name="user_email" label="Email" variant="standard" />
              </Stack>

              {/* message field */}
              <Stack
                direction="row"
                sx={{ marginTop: "2%", marginBottom: "4%" }}
              >
                <TextField
                  id="message"
                  name="message"
                  label="Message"
                  variant="standard"
                  rows={4}
                  multiline
                  sx={{ width: "415px" }}
                />
              </Stack>

              {/* send btn */}
              <Button variant="contained" endIcon={<SendIcon />} type="submit">
                Send
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
