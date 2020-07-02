import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import ProfileHeader from "../src/ui/ProfileHeader";

const useStyles = makeStyles((theme) => ({

  aboutContainer: {
    marginLeft: "3em",
    marginRight: "3em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "1em",
      marginRight: "1em",
    },
  },
  bodyText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
    },
  },
}));

const Index = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container>

      <ProfileHeader/>
      {/*ABOUT US TEXT*/}
      <Grid
        item
        container
        direction={"column"}
        spacing={2}
        className={classes.aboutContainer}
        style={{ marginTop: "3em" }}
      >
        <Grid item>
          <Typography
            variant={"h2"}
            align={matchesSM ? "center" : "left"}
          >
            About
          </Typography>
        </Grid>
        <Grid item container spacing={2} direction={"column"}>
          <Grid item>
            <Typography variant={"body1"} className={classes.bodyText}>
              Hi, I'm Dave. I live in Nashville, TN with my wife Ashlee and our
              two cats. I'm originally from the UK but moved to the US about 4
              years ago now.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={"body1"} className={classes.bodyText}>
              For the past 18 years i have been a touring lighting technician in
              the live entertainment side of the music industry specializing in
              concerts/events great and small. This gave me lots of downtime on
              days off and between shows to study and learn something new. Over
              these years i have seen how quickly the tech industry has grown
              and how much more people rely on the web and apps. So this is
              where my studying went.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={"body1"} className={classes.bodyText}>
              Fast forward to March 2020 the entire entertainment industry came
              to a halt. All shows/events have been postponed or cancelled until
              further notice. Unfortunately we were one of the first industries
              to stop and will likely be the last to get going again. So this
              downtime has given me the opportunity to progress more with
              website/app design and development.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={"body1"} className={classes.bodyText}>
              I consider myself a self-taught Full Stack developer. Most of my
              learning has been through building and deploying apps, pushing to
              Github and getting peer code reviews through developer groups.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={"body1"} className={classes.bodyText}>
              Whether you already have a website that needs some TLC or looking
              for a complete new look. I'm here to help and guide you along the
              way. I do not use templates, everything I build everything from
              the ground up. This enables a full customizable design.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Index;
