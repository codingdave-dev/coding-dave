import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  titleText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2em",
    },
  },
  subText: {
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1em",
    },
  },
  bodyText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
    },
  },
}));

const Privacy = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container direction={"column"}>
      <Grid item>
        <Grid
          item
          container
          alignItems={"center"}
          direction={"column"}
          style={{ marginTop: "1em" }}
        >
          <Grid item>
            <Typography variant={"h1"} className={classes.titleText}>
              Privacy Policy
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item style={matchesSM ? { margin: "2em" } : { margin: "4em" }}>
        <Grid item>
          <Grid item container direction={"column"}>
            <Grid item>
              <Typography variant={"h3"} className={classes.subText}>
                Google Analytics
              </Typography>
            </Grid>
            <Grid item style={{ marginTop: "1em" }}>
              <Typography variant={"body1"} className={classes.bodyText}>
                This website uses Google Analytics to help analyse how visitors
                use this site. Google Analytics uses cookies, which are small
                text files placed on your computer, to collect standard internet
                log information and visitor behaviour information in an
                anonymous form - no personally identifiable information is
                collected about you unless you explicitly submit that
                information on this website.
              </Typography>
            </Grid>
            <Grid item style={{ marginTop: "1em" }}>
              <Typography variant={"body1"} className={classes.bodyText}>
                The anonymous information generated by Google Analytics cookies
                about your use of this website is transmitted to Google. This
                information is then processed to compile statistical reports on
                website activity for this site only. I then utilise these
                anonymous reports to optimise the website for users.
              </Typography>
            </Grid>
            <Grid item style={{ marginTop: "1em" }}>
              <Typography variant={"body1"} className={classes.bodyText}>
                For further information about how Google Analytics uses cookies
                and IP address data, see:{" "}
                <a
                  style={{ color: "inherit" }}
                  href="https://marketingplatform.google.com/about/analytics/"
                >
                  Google Analytics
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item style={{ marginTop: "2em" }}>
          <Grid item container direction={"column"}>
            <Grid item>
              <Typography variant={"h3"} className={classes.subText}>
                Information You Submit
              </Typography>
            </Grid>
            <Grid item style={{ marginTop: "1em" }}>
              <Typography variant={"body1"} className={classes.bodyText}>
                If you choose to submit your personal details and/or a message
                to me via this website, I will use these details only for the
                purpose of replying to your message. Your details will not be
                sold on, nor used for any other purpose, unless explicitly
                requested by you.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Privacy;
