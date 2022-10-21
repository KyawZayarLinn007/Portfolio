import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import Rating from "@mui/material/Rating";

const Skills = () => {
  return (
    <>
      <Typography variant="h2">Skills</Typography>

      {/* skills section */}
      <Grid
        container
        spacing={3}
        sx={{
          marginTop: "4%",
          marginBottom: "4%",
        }}
      >
        {/* html */}
        <Grid xs={3}>
          <Stack direction="row" spacing={2} alignItems="center">
            <img src="https://skillicons.dev/icons?i=html" alt="html" />
            <Rating
              name="read-only"
              value={5}
              readOnly
              className="star_rating"
            />
          </Stack>
        </Grid>

        {/* css */}
        <Grid xs={3}>
          <Stack direction="row" spacing={2} alignItems="center">
            <img src="https://skillicons.dev/icons?i=css" alt="css" />
            <Rating
              name="read-only"
              value={3}
              readOnly
              className="star_rating"
            />
          </Stack>
        </Grid>

        {/* js */}
        <Grid xs={3}>
          <Stack direction="row" spacing={2} alignItems="center">
            <img
              src="https://skillicons.dev/icons?i=javascript"
              alt="javascript"
            />
            <Rating
              name="read-only"
              value={5}
              readOnly
              className="star_rating"
            />
          </Stack>
        </Grid>

        {/* jquery */}
        <Grid xs={3}>
          <Stack direction="row" spacing={2} alignItems="center">
            <img src="https://skillicons.dev/icons?i=jquery" alt="jquery" />
            <Rating
              name="read-only"
              value={4}
              readOnly
              className="star_rating"
            />
          </Stack>
        </Grid>

        {/* react */}
        <Grid xs={3}>
          <Stack direction="row" spacing={2} alignItems="center">
            <img src="https://skillicons.dev/icons?i=react" alt="react" />
            <Rating
              name="read-only"
              value={4}
              readOnly
              className="star_rating"
            />
          </Stack>
        </Grid>

        {/* redux */}
        <Grid xs={3}>
          <Stack direction="row" spacing={2} alignItems="center">
            <img src="https://skillicons.dev/icons?i=redux" alt="redux" />
            <Rating
              name="read-only"
              value={3}
              readOnly
              className="star_rating"
            />
          </Stack>
        </Grid>

        {/* nodejs */}
        <Grid xs={3}>
          <Stack direction="row" spacing={2} alignItems="center">
            <img src="https://skillicons.dev/icons?i=nodejs" alt="nodejs" />
            <Rating
              name="read-only"
              value={4}
              readOnly
              className="star_rating"
            />
          </Stack>
        </Grid>

        {/* express */}
        <Grid xs={3}>
          <Stack direction="row" spacing={2} alignItems="center">
            <img src="https://skillicons.dev/icons?i=express" alt="express" />
            <Rating
              name="read-only"
              value={4}
              readOnly
              className="star_rating"
            />
          </Stack>
        </Grid>

        {/* git */}
        <Grid xs={3}>
          <Stack direction="row" spacing={2} alignItems="center">
            <img src="https://skillicons.dev/icons?i=git" alt="git"/>
            <Rating
              name="read-only"
              value={5}
              readOnly
              className="star_rating"
            />
          </Stack>
        </Grid>

        {/* figma */}
        <Grid xs={3}>
          <Stack direction="row" spacing={2} alignItems="center">
            <img src="https://skillicons.dev/icons?i=figma" alt="figma"/>
            <Rating
              name="read-only"
              value={3}
              readOnly
              className="star_rating"
            />
          </Stack>
        </Grid>

        {/* bootstrap */}
        <Grid xs={3}>
          <Stack direction="row" spacing={2} alignItems="center">
            <img src="https://skillicons.dev/icons?i=bootstrap" alt="bootstrap"/>
            <Rating
              name="read-only"
              value={5}
              readOnly
              className="star_rating"
            />
          </Stack>
        </Grid>
        
        {/* mui */}
        <Grid xs={3}>
          <Stack direction="row" spacing={2} alignItems="center">
            <img src="https://skillicons.dev/icons?i=mui" alt="mui"/>
            <Rating
              name="read-only"
              value={3}
              readOnly
              className="star_rating"
            />
          </Stack>
        </Grid>

        {/* mongo */}
        <Grid xs={3}>
          <Stack direction="row" spacing={2} alignItems="center">
            <img src="https://skillicons.dev/icons?i=mongo" alt="mongo"/>
            <Rating
              name="read-only"
              value={4}
              readOnly
              className="star_rating"
            />
          </Stack>
        </Grid>

        {/* mysql */}
        <Grid xs={3}>
          <Stack direction="row" spacing={2} alignItems="center">
            <img src="https://skillicons.dev/icons?i=mysql" alt="mysql"/>
            <Rating
              name="read-only"
              value={4}
              readOnly
              className="star_rating"
            />
          </Stack>
        </Grid>

        {/* postgresql */}
        <Grid xs={3}>
          <Stack direction="row" spacing={2} alignItems="center">
            <img src="https://skillicons.dev/icons?i=postgresql" alt="postgresql"/>
            <Rating
              name="read-only"
              value={3}
              readOnly
              className="star_rating"
            />
          </Stack>
        </Grid>

        {/* prisma */}
        <Grid xs={3}>
          <Stack direction="row" spacing={2} alignItems="center">
            <img src="https://skillicons.dev/icons?i=prisma" alt="prisma"/>
            <Rating
              name="read-only"
              value={4}
              readOnly
              className="star_rating"
            />
          </Stack>
        </Grid>

      </Grid>
    </>
  );
};

export default Skills;
