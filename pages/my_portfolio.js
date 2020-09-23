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
      id: "klippitMerchant",
      name: "Klippit Merchant Waitlist",
      description:
          "I was approached by the client to build a membership website as per his design documents. Its a full membership signup website that uses Google Firebase Auth and Firestore database.",
      description2:
          "It allows users/business to add campaigns for their products.",
      description3: "",
      image: "/assets/vectors/klippitMerchant/klippit_vector.jpg",
      frontEnd: [
        {
          id: 0,
          name: "ReactJS,",
        },
        {
          id: 1,
          name: "NextJS,",
        },

        {
          id: 2,
          name: "Material UI,",
        },
        {
          id: 3,
          name: "React Redux,",
        },
        {
          id: 4,
          name: "React Redux Firebase,",
        },
        {
          id: 5,
          name: "React Redux Form,",
        },
      ],
      backEnd: [
        {
          id: 1,
          name: "Firebase Auth,",
        },
        {
          id: 2,
          name: "Firebase Firestore,",
        },
        {
          id: 3,
          name: "Firebase Storage,",
        },
        {
          id: 4,
          name: "Firebase Functions,",
        },
      ],
      webIcon: <LinkIcon fontSize={"large"} />,
      gitIcon: <GitHubIcon fontSize={"large"} />,
      webLink: "https://klippitmerchant.com/",
      gitHub: "https://github.com/codingdave-dev/klippit",
    },
    {
      id: "reelexCalculator",
      name: "REELEX Package Calculator",
      description:
          "I was approached by the REELEX team about developing them a new packaging calculator for their website as the current one wasn't working correctly and they want to moved the new secret formulas away from the front end code.",
      description2:
          "So i revamped the front end user inputs, created new javascript functions that reached out to a backend Google Function that done all the relevant calculations and then returned the value to the client.",
      description3: "",
      image: "/assets/vectors/reelex/reelex_vector.jpg",
      frontEnd: [
        {
          id: 1,
          name: "HTML,",
        },
        {
          id: 2,
          name: "CSS,",
        },
        {
          id: 3,
          name: "Javascript,",
        },
        {
          id: 4,
          name: "Axios,",
        }
      ],
      backEnd: [
        {
          id: 1,
          name: "Firebase Functions,",
        }
      ],
      webIcon: <LinkIcon fontSize={"large"} />,
      gitIcon: <GitHubIcon fontSize={"large"} />,
      webLink: "http://www.reelex.com/support/packaging-calculator/",
    },
    {
      id: "dougiesGuide",
      name: "Dougies Guide To Dive Bars and Fine Dining",
      description:
          "I met Dougie a few years ago on tour and he loved a good dive bar, but sometimes he would be in a new city and didn’t know where the good local spots were. We had a conversation one night where he said he’d love to come up with an app or the like to guide roadies to great local dive bars or just a good local restaurant.",
      description2:
          "So that had me thinking. I said to Doug I would help design a website and eventually an app where people in our industry could sign up and add a great local spot they had been to passing through a city on tour. That is how Dougie’s Guide to Dive Bars and Fine Dining came about.",
      description3: "",
      image: "/assets/vectors/dougiesGuide/dg_vector.jpg",
      frontEnd: [
        {
          id: 0,
          name: "ReactJS,",
        },
        {
          id: 1,
          name: "NextJS,",
        },
        {
          id: 2,
          name: "Material UI,",
        },
        {
          id: 3,
          name: "React Redux,",
        },
        {
          id: 4,
          name: "React Redux Firebase,",
        },
        {
          id: 5,
          name: "React Redux Form,",
        },
      ],
      backEnd: [

        {
          id: 1,
          name: "Firebase Auth,",
        },
        {
          id: 2,
          name: "Firebase Firestore,",
        },
        {
          id: 3,
          name: "Firebase Storage,",
        },
        {
          id: 4,
          name: "Firebase Functions,",
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
          "I proposed to my now wife in April of 2016 and she was looking at different sites to set up a registry, RSVP, etc and did not find anything she was fond of. I then asked her if she’d like me to design something specifically for us. I looked at what some others had done and designed our wedding website based on how we were approaching our wedding.",
      description2:
          "We could link our registry to our website.  Our invitations had an online code that I generated so our guests could enter on our website as well as let us know if there were any dietary restrictions or any other information we may need to let our venue know. I also linked the venue to our website and other places and things to do nearby, as where we were married had rooms for so many guests.",
      description3:
          "",
      image: "/assets/vectors/theMacEvansWedding/theMacEvans_vector.jpg",
      frontEnd: [
        {
          id: 1,
          name: "ReactJS,",
        },
        {
          id: 2,
          name: "Material UI,",
        },
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
      webLink: "https://the-mac-evans-wedding.vercel.app",
      gitHub: "https://github.com/codingdave-dev/theMacEvansWedding",
    },
  ];

  return (
      <Grid container direction={"column"} alignItems={"center"}>
        <Head>
          <title key={"title"}>Portfolio | Coding Dave</title>
          <meta
              name={"description"}
              key={"description"}
              content={
                "See a list of my previous work with links to their Git Hub and live sites."
              }
          />
          <meta
              property={"og:title"}
              content={"Bringing West Coast Technology to Tennessee | Portfolio"}
              key={"og:title"}
          />
          <meta
              property={"og:url"}
              content={"codingdave.dev/my_portfolio"}
              key={"og:url"}
          />
          <link
              rel="canonical"
              key={"canonical"}
              href={"https://codingdave.dev/my_portfolio"}
          />
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
                              <Grid item container direction={"column"}>
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
                              <Grid item container direction={"column"}>
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
                      <Grid item container spacing={3}>
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
