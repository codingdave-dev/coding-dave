import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Head from "next/head";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";

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
    height: "100%",
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
      image: "/assets/vectors/dougiesGuide/dg_vector.jpeg",
      frontEnd: [
        {
          id: 1,
          name: "ReactJS,",
        },
        {
          id: 2,
          name: "Material UI,",
        },
        {
          id: 3,
          name: 'React Redux,'
        },
        {
          id: 4,
          name: 'React Redux Firebase,'
        },
        {
          id: 5,
          name: 'React Redux Form,'
        }
      ],
      backEnd: [
        {
          id: 1,
          name: "NextJS,",
        },
        {
          id: 2,
          name: "Firebase Auth,",
        },
        {
          id: 3,
          name: "Firebase Firestore,",
        },
        {
          id: 4,
          name: "Firebase Storage,",
        },
      ],
      webIcon: <LinkIcon fontSize={"large"} />,
      gitIcon: <GitHubIcon fontSize={"large"} />,
      webLink: "https://dougiesguide.com",
      gitHub: "https://github.com/codingdave-dev/dougies-guide",
    },
    {
      id: "theMacEvansWedding",
      name: "The Mac Evans Wedding",
      description:
        "A couple of years ago when my now wife and me decided to get married, i suggested we should have a website so that we can manage guest information. And the guests could RSVP to their invitations online.",
      description2:
        "After thinking of a domain to use, we registered that and then i began to develop the site.  At the time i only knew how to code in HTML/CSS and PHP for the backend.  So this is what i built the website in.  Since i have developed in other backend languages since i decided to recode the entire website.",
      description3:
        "As the domain is no longer registered there is no link to the site.",
      image: "/assets/vectors/theMacEvansWedding/theMacEvans_vector.jpeg",
      frontEnd: [
        {
          id: 1,
          name: "ReactJS,",
        },
        {
          id: 2,
          name: "Material UI,",
        }
      ],
      backEnd: [
        {
          id: 1,
          name: "NextJS,",
        },
        {
          id: 2,
          name: "Firebase Auth,",
        },
        {
          id: 3,
          name: "Firebase Firestore,",
        },
        {
          id: 4,
          name: "Firebase Storage,",
        },
      ],
      gitIcon: <GitHubIcon fontSize={"large"} />,
      gitHub: "https://github.com/codingdave-dev/theMacEvansWedding",
    },
  ];

  return (
    <Grid container direction={"column"} alignItems={"center"}>
      <Head>
        <title key={'title'}>Portfolio | Coding Dave</title>
        <meta
            name={"description"}
            key={"description"}
            content={
              "See a list of my previous work with links to their Git Hub and live sites."
            }
        />
        <meta property={'og:title'} content={'Bringing West Coast Technology to Tennessee | Portfolio'} key={'og:title'}/>
        <meta property={'og:url'} content={'codingdave.dev/my_portfolio'} key={'og:url'}/>
        <link rel="canonical" key={'canonical'} href={'https://codingdave.dev/my_portfolio'}/>
      </Head>
      <Grid item>
        <Grid item container style={{ marginTop: "1em" }}>
          <Grid item>
            <Typography variant={"h1"} className={classes.titleText}>
              Portfolio
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item style={{ marginTop: "1em" }}>
        {portfolios.map((portfolio) => (
          <Grid key={portfolio.id} item container style={{ marginTop: "6em" }}>
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

                {portfolio.frontEnd && (
                  <Grid item style={{ marginTop: "1em" }}>
                    <Grid item container>
                      <Grid item style={{ marginRight: "1em" }}>
                        <Typography
                          variant={"body1"}
                          style={{ fontWeight: 600 }}
                          className={classes.bodyText}
                        >
                          Front End:
                        </Typography>
                      </Grid>

                      <Grid item>
                        <Grid item container direction={'column'}>
                          {portfolio.frontEnd.map((front) => (
                              <Grid
                                  key={front.id}
                                  item
                                  style={{ marginRight: "0.5em" }}
                              >
                                <Typography
                                    variant={"body1"}
                                    className={classes.bodyText}
                                >
                                  {front.name}
                                </Typography>
                              </Grid>
                          ))}
                        </Grid>
                      </Grid>

                    </Grid>
                  </Grid>
                )}

                {portfolio.backEnd && (
                  <Grid item style={{ marginTop: "1em" }}>
                    <Grid item container>
                      <Grid item style={{ marginRight: "1em" }}>
                        <Typography
                          variant={"body1"}
                          style={{ fontWeight: 600 }}
                          className={classes.bodyText}
                        >
                          Back End:
                        </Typography>
                      </Grid>

                      <Grid item>
                        <Grid item container direction={'column'}>
                          {portfolio.backEnd.map((back) => (
                              <Grid
                                  key={back.id}
                                  item
                                  style={{ marginRight: "0.5em" }}
                              >
                                <Typography
                                    variant={"body1"}
                                    className={classes.bodyText}
                                >
                                  {back.name}
                                </Typography>
                              </Grid>
                          ))}
                        </Grid>
                      </Grid>


                    </Grid>
                  </Grid>
                )}

                <Grid item style={{ marginTop: "2em" }}>
                  <Grid
                    item
                    container
                    spacing={3}

                  >

                    <Grid item style={{ marginRight: "1.8em" }}>
                      <Typography
                          variant={"body1"}
                          style={{ fontWeight: 600 }}
                          className={classes.bodyText}
                      >
                        Links:
                      </Typography>
                    </Grid>

                    {portfolio.gitHub && (
                      <Grid item>
                        <a
                          style={{
                            textDecoration: "none",
                            color: theme.palette.primary.main,
                          }}
                          href={portfolio.gitHub}
                          target={"_blank"}
                          aria-owns={`${portfolio.name} github link`}
                        >
                          {portfolio.gitIcon}
                        </a>
                      </Grid>
                    )}

                    {portfolio.webLink && (
                      <Grid item>
                        <a
                          style={{
                            textDecoration: "none",
                            color: theme.palette.primary.main,
                          }}
                          href={portfolio.webLink}
                          target={"_blank"}
                          aria-owns={`${portfolio.name} website`}
                        >
                          {portfolio.webIcon}
                        </a>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default MyPortfolio;
