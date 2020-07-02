import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import ProfileHeader from "../src/ui/ProfileHeader";

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

const MySkills = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const spacing = 1;

  const frameworks = [
    {
      id: "bootstrap",
      name: "Bootstrap",
    },
    {
      id: "semanticUI",
      name: "Semantic UI",
    },
    {
      id: "materialUI",
      name: "Material UI",
    },
  ];
  const frontEnd = [
    {
      id: "html",
      name: "HTML",
    },
    {
      id: "css",
      name: "CSS",
    },
    {
      id: "w3CSS",
      name: "W3.CSS",
    },
    {
      id: "javascript",
      name: "JavaScript",
    },
    {
      id: "react",
      name: "React JS",
    },
    {
      id: "reactNative",
      name: "React Native",
    },
    {
      id: "redux",
      name: "Redux",
    },
  ];
  const backEnd = [
    {
      id: "php",
      name: "PHP",
    },
    {
      id: "node",
      name: "Node JS",
    },
    {
      id: "sql",
      name: "SQL",
    },
    {
      id: "rest",
      name: "REST",
    },
    {
      id: "aws",
      name: "Amazon Web Services",
    },
    {
      id: "firebase",
      name: "Google Firebase",
    },
  ];

  return (
    <Grid container direction={'column'}>

      <Grid item container justify={"center"} style={{ marginTop: "1em" }}>
        <Grid item>
          <Typography variant={"h1"} className={classes.titleText}>
            Skills
          </Typography>
        </Grid>
      </Grid>


      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        justify={matchesSM ? null : "space-around"}
        style={{ marginTop: "3em" }}
        spacing={matchesSM ? 4 : 0}
      >
        {/*UI FRAMEWORKS*/}
        <Grid item>
          <Grid
            item
            container
            direction={"column"}
            alignItems={"center"}
            spacing={spacing}
          >
            <Grid item>
              <Typography variant={"h3"} className={classes.subText}>
                UI Frameworks
              </Typography>
            </Grid>

            {frameworks.map((framework) => (
              <Grid key={framework.id} item>
                <Typography variant={"body1"} className={classes.bodyText}>
                  {framework.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/*CLIENT/FRONTEND*/}
        <Grid item>
          <Grid
            item
            container
            direction={"column"}
            alignItems={"center"}
            spacing={spacing}
          >
            <Grid item>
              <Typography variant={"h3"} className={classes.subText}>
                Client - Front End
              </Typography>
            </Grid>
            {frontEnd.map((front) => (
              <Grid key={front.id} item>
                <Typography variant={"body1"} className={classes.bodyText}>
                  {front.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/*SERVER/BACK END*/}
        <Grid item>
          <Grid
            item
            container
            direction={"column"}
            alignItems={"center"}
            spacing={spacing}
          >
            <Grid item>
              <Typography variant={"h3"} className={classes.subText}>
                Server - Back End
              </Typography>
            </Grid>
            {backEnd.map((back) => (
              <Grid key={back.id} item>
                <Typography variant={"body1"} className={classes.bodyText}>
                  {back.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MySkills;
