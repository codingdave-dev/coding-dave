import React, { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  profileImage: {
    borderRadius: "100%",
    width: 250,
    [theme.breakpoints.down("md")]: {
      width: 200,
    },
    [theme.breakpoints.down("sm")]: {
      width: 175,
    },
  },
  titleText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2em",
    },
  },
  subText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1em",
    },
  },
  contactText: {
    fontSize: "1.3em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1em",
    },
  },
  socialIcon: {
    color: theme.palette.primary.main,
    fontSize: "2em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5em",
    },
  },
}));

const ProfileHeader = ({ showContact }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      item
      container
      direction={matchesSM ? "column" : "row"}
      justify={"center"}
      alignItems={"center"}
    >
      <Grid item>
        {" "}
        <img
          className={classes.profileImage}
          src="/assets/avatar/dave_profile_photo.jpeg"
          alt="Daves Profile Photo"
        />
      </Grid>
      <Grid
        item
        style={matchesSM ? { marginLeft: null } : { marginLeft: "4em" }}
      >
        <Grid
          item
          container
          direction={"column"}
          alignItems={matchesSM ? "center" : null}
        >
          <Grid item>
            <Typography variant={"h1"} className={classes.titleText}>
              Dave Evans
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={"h3"} className={classes.subText}>
              Website/App Design & Development
            </Typography>
          </Grid>
          <Grid item style={{ marginTop: "1em" }}>
            <Grid item container spacing={2}>
              <Grid item>
                <a
                  style={{
                    textDecoration: "none",
                  }}
                  href={"https://github.com/codingdave-dev"}
                  target={"_blank"}
                  aria-owns={"CodingDave gitHub Link"}
                >
                  <GitHubIcon className={classes.socialIcon} />
                </a>
              </Grid>
              <Grid item>
                <a
                  style={{
                    textDecoration: "none",
                  }}
                  href={
                    "https://www.facebook.com/codingDave.dev/?eid=ARCmHFMi1v7kKZNDB9eN9Ks5QXhSh8dR0FBIwElneNgxiVcs7sLVdmx97c_xdV3Td1r-_piMerskk50C"
                  }
                  target={"_blank"}
                  aria-owns={"CodingDave Facebook Link"}
                >
                  <FacebookIcon className={classes.socialIcon} />
                </a>
              </Grid>
              <Grid item>
                <a
                  style={{
                    textDecoration: "none",
                  }}
                  href={"https://twitter.com/coding_dave"}
                  target={"_blank"}
                  aria-owns={"CodingDave Twitter Link"}
                >
                  <TwitterIcon className={classes.socialIcon} />
                </a>
              </Grid>
              <Grid item>
                <a
                  style={{
                    textDecoration: "none",
                  }}
                  href={"https://www.instagram.com/codingdave.dev/"}
                  target={"_blank"}
                  aria-owns={"CodingDave Instagram Link"}
                >
                  <InstagramIcon className={classes.socialIcon} />
                </a>
              </Grid>
              <Grid item>
                <a
                  style={{
                    textDecoration: "none",
                  }}
                  href={""}
                  target={"_blank"}
                  aria-owns={"CodingDave LinkedIn Link"}
                >
                  <LinkedInIcon className={classes.socialIcon} />
                </a>
              </Grid>
            </Grid>
          </Grid>

          {showContact && (
            <Fragment>
              <Grid item style={{ marginTop: "1em" }}>
                <Grid item container alignItems={"center"}>
                  <Grid item>
                    <PhoneIcon className={classes.socialIcon} />
                  </Grid>
                  <Grid item style={{ marginLeft: "0.8em" }}>
                    <Typography variant={"h3"} className={classes.contactText}>
                      +1 323 620 7662
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item style={{ marginTop: "1em" }}>
                <Grid item container alignItems={"center"}>
                  <Grid item>
                    <EmailIcon className={classes.socialIcon} />
                  </Grid>
                  <Grid item style={{ marginLeft: "0.8em" }}>
                    <Typography variant={"h3"} className={classes.contactText}>
                      codingdave.dev@gmail.com
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Fragment>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileHeader;
