import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";

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
  vectorImage: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "60%",
      height: "100%",
    },
  },
  portfolioHeader: {
    fontWeight: 600,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.4em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2em",
    },
  },
}));

const MyPortfolio = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const portfolios = [
    {
      id: "dougiesGuide",
      name: "Dougies Guide To Dive Bars and Fine Dining",
      description:
        "I have know Doug Eder for several years from our previous concert tours. He does love a good dive bar and has documented every single one he had been to over the years he had been on the road and still documents them to this day.",
      description2:
        "A couple of years ago, i said to Doug that he should have a website designed where he could list all his favourites.  Over a couple of beers Dougies Guide was formed.",
      description3: "On my next day off I immediately started coding.",
      image: "/assets/vectors/dg_vector.jpeg",
      link: "https://dougiesguide.com",
    },
  ];

  return (
    <Grid container direction={"column"} alignItems={"center"}>
      <Grid item>
        <Grid item container style={{ marginTop: "1em" }}>
          <Grid item>
            <Typography variant={"h1"} className={classes.titleText}>
              Portfolio
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item style={{ marginTop: "3em" }}>
        {portfolios.map((portfolio) => (
          <Grid key={portfolio.id} item container>
            <Grid item xs={12} sm={12} md={3} lg={4}>
              <Grid item container justify={"center"}>
                <img
                  src={portfolio.image}
                  className={classes.vectorImage}
                  alt="test"
                />
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={9}
              lg={8}
              style={
                matchesSM
                  ? {
                      marginTop: "1em",
                      paddingLeft: "1em",
                      paddingRight: "1em",
                    }
                  : { paddingLeft: "1em", paddingRight: "1em" }
              }
            >
              <Grid item container direction={"column"}>
                <Grid item>
                  <Typography
                    align={matchesSM ? "center" : "left"}
                    variant={"h2"}
                    className={classes.portfolioHeader}
                  >
                    {portfolio.name}
                  </Typography>
                </Grid>
                <Grid item style={{ marginTop: "1em" }}>
                  <Typography variant={"body1"} className={classes.bodyText}>
                    {portfolio.description}
                  </Typography>
                </Grid>
                {portfolio.description2 && (
                  <Grid item style={{ marginTop: "1em" }}>
                    <Typography variant={"body1"} className={classes.bodyText}>
                      {portfolio.description2}
                    </Typography>
                  </Grid>
                )}
                {portfolio.description3 && (
                  <Grid item style={{ marginTop: "1em" }}>
                    <Typography variant={"body1"} className={classes.bodyText}>
                      {portfolio.description3}
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default MyPortfolio;
