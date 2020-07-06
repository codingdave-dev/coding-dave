import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Head from "next/head";

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
      <Head>
        <title key={"title"}>
          Website App Design and Development | Coding Dave
        </title>
        <meta
          name={"description"}
          key={"description"}
          content={
            "I provide the fastest, most modern, affordable, and aesthetic design and development services. Contact me now!"
          }
        />
        <meta
          property={"og:title"}
          content={"Bringing West Coast Technology to Tennessee | About Me"}
          key={"og:title"}
        />
        <meta property={"og:url"} content={"codingdave.dev"} key={"og:url"} />
        <link
          rel="canonical"
          key={"canonical"}
          href={"https://codingdave.dev"}
        />
      </Head>

      <ProfileHeader />
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
          <Typography variant={"h2"} align={matchesSM ? "center" : "left"}>
            About
          </Typography>
        </Grid>
        <Grid item container spacing={2} direction={"column"}>
          <Grid item>
            <Typography variant={"body1"} className={classes.bodyText}>
              Welcome, I am Dave. I am originally from England and now live in
              Nashville with my wife and our two cats. I've been in Nashville
              now for about 4 years.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={"body1"} className={classes.bodyText}>
              For over 18 years, I have been a touring lighting technician in
              the live entertainment side of the music industry specializing in
              concerts/events big and small. This has given me an opportunity on
              my days off and on breaks between tours to study and learn
              something new. Over these years I have seen how quickly the tech
              industry has grown and how much more people rely on the web and
              apps. So this is where my studying went.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={"body1"} className={classes.bodyText}>
              Fast forward to March 2020 when the entire entertainment industry
              came to a halt. All shows/events have been postponed or cancelled
              until further notice. Unfortunately, we were one of the first
              industries to shutdown and will likely be the last to get going
              again. This downtime has given me the opportunity to progress more
              with website/app design and development.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={"body1"} className={classes.bodyText}>
              I am a self-taught Full Stack developer. My education has been
              through building and deploying apps, pushing to Github and getting
              peer code reviews through developer groups.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={"body1"} className={classes.bodyText}>
              Whether you already have a website that needs some TLC or are looking
              for a complete new look, I am here to help and guide you along the
              way. I do not use templates. I build everything from the ground up
              which enables a full customizable design.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Index;
