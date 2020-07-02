import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import ProfileHeader from "../src/ui/ProfileHeader";

import ComputerIcon from "@material-ui/icons/Computer";
import AppsIcon from "@material-ui/icons/Apps";

import SearchIcon from "@material-ui/icons/Search";
import PeopleIcon from "@material-ui/icons/People";

import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import CloudIcon from "@material-ui/icons/Cloud";
import AssessmentIcon from "@material-ui/icons/Assessment";
import DomainIcon from "@material-ui/icons/Domain";

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
  icon: {
    fontSize: "2em",
  },
}));

const MySkills = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const designServices = [
    {
      id: "webDesign",
      name: "Web Design",
      description:
        "Let me deign and build from the ground up.  Live and up-to-date design tracking.",
      icon: <ComputerIcon className={classes.icon} />,
    },
    {
      id: "appDesign",
      name: "App Design",
      description: "iOS / Android App design from start to finish.",
      icon: <AppsIcon className={classes.icon} />,
    },
    {
      id: "seo",
      name: "Search Engine Optimisation",
      description:
        "SEO is as crucial as the design itself. Improve website traffic by increasing the visibility of a website or a web page to users of a web search engine.",
      icon: <SearchIcon className={classes.icon} />,
    },
  ];

  const developmentServices = [
    {
      id: "cms",
      name: "Content Management System",
      description:
        "A content management system (CMS) is a software web based application that can be used to manage the creation and modification of digital content on your website/app.",
      icon: <CreateNewFolderIcon className={classes.icon} />,
    },
    {
      id: "users",
      name: "User Management",
      description:
        "Need to give your clients access to their own account. I have you covered with a custom built user interface to suit your needs. Email, Phone Number, Social Login authentication options.",
      icon: <PeopleIcon className={classes.icon} />,
    },
    {
      id: "analytics",
      name: "Google Analytics",
      description:
        "Google Analytics is a web analytics service offered by Google that tracks and reports website traffic, currently as a platform inside the Google Marketing Platform brand.",
      icon: <AssessmentIcon className={classes.icon} />,
    },
  ];

  const hostingServices = [
    {
      id: "hosting",
      name: "Hosting",
      description:
        "I can take the pressure of hosting your website on shared or dedicated servers depending on your requirements.",
      icon: <CloudIcon className={classes.icon} />,
    },
    {
      id: "domains",
      name: "Domains",
      description:
        "If you already have a domain no problem we can use that if not I can get one set up for you.",
      icon: <DomainIcon className={classes.icon} />,
    },
    {
      id: "ssl",
      name: "SSL/TLS Certificates",
      description:
        "Most website you visit these days use SSL/TLS certificates.  These create an encrypted connection between your clients computer and the server that is hosting your website.  I can assist in setting this up.",
      icon: <CloudIcon className={classes.icon} />,
    },
  ];

  return (
    <Grid container direction={"column"}>

      <Grid item container justify={"center"} style={{ marginTop: "1em" }}>
        <Grid item>
          <Typography variant={"h1"} className={classes.titleText}>
            Services
          </Typography>
        </Grid>
      </Grid>


      <Grid item  style={{ marginTop: "1em" }}>
        <Grid item container>
          {/*DESIGN*/}
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
            style={matchesSM ? null : { padding: "0.6em" }}
          >
            {designServices.map((design) => (
              <Grid
                key={design.id}
                item
                container
                style={{ marginTop: "2em", marginBottom: "2em" }}
              >
                <Grid item container direction={matchesSM ? "column" : "row"}>
                  <Grid item md={matchesSM ? 0 : 2}>
                    <Grid item container justify={"center"}>
                      <Grid item>{design.icon}</Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={matchesSM ? 0 : 10}>
                    <Grid item container direction={"column"} spacing={1}>
                      <Grid item>
                        <Typography
                          variant={"body1"}
                          style={{ fontWeight: 600 }}
                          align={matchesSM ? "center" : "left"}
                        >
                          {design.name}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant={"body1"}
                          align={matchesSM ? "center" : "left"}
                        >
                          {design.description}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>

          {/*DEVELOPMENT*/}
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
            style={matchesSM ? null : { padding: "0.6em" }}
          >
            {developmentServices.map((development) => (
              <Grid
                key={development.id}
                item
                container
                style={{ marginTop: "2em", marginBottom: "2em" }}
              >
                <Grid item container direction={matchesSM ? "column" : "row"}>
                  <Grid item md={matchesSM ? 0 : 2}>
                    <Grid item container justify={"center"}>
                      <Grid item>{development.icon}</Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={matchesSM ? 0 : 10}>
                    <Grid item container direction={"column"} spacing={1}>
                      <Grid item>
                        <Typography
                          variant={"body1"}
                          style={{ fontWeight: 600 }}
                          align={matchesSM ? "center" : "left"}
                        >
                          {development.name}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant={"body1"}
                          align={matchesSM ? "center" : "left"}
                        >
                          {development.description}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>

          {/*HOSTING*/}
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
            style={matchesSM ? null : { padding: "0.6em" }}
          >
            {hostingServices.map((hosting) => (
              <Grid
                key={hosting.id}
                item
                container
                style={{ marginTop: "2em", marginBottom: "2em" }}
              >
                <Grid item container direction={matchesSM ? "column" : "row"}>
                  <Grid item md={matchesSM ? 0 : 2}>
                    <Grid item container justify={"center"}>
                      <Grid item>{hosting.icon}</Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={matchesSM ? 0 : 10}>
                    <Grid item container direction={"column"} spacing={1}>
                      <Grid item>
                        <Typography
                          variant={"body1"}
                          style={{ fontWeight: 600 }}
                          align={matchesSM ? "center" : "left"}
                        >
                          {hosting.name}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant={"body1"}
                          align={matchesSM ? "center" : "left"}
                        >
                          {hosting.description}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MySkills;
