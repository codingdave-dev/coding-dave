import React, { Fragment, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Head from "next/head";

import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Router from "next/router";

import CircularProgress from "@material-ui/core/CircularProgress";
import ProfileHeader from "../src/ui/ProfileHeader";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
}));

const Contact = ({ handleSubmit, error, submitting }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = () => {
    setLoading(true);
    axios
      .get("https://us-central1-codingdave-cd664.cloudfunctions.net/sendMail", {
        params: {
          name: name,
          email: email,
          phone: phone,
          message: message,
        },
      })
      .then((res) => {
        setLoading(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        Router.push({ pathname: "/contact_success" });
      })
      .catch((err) => setLoading(false));
  };

  return (
    <Grid container justify={"center"}>
      <Head>
        <title key={"title"}>Contact Us | Coding Dave</title>
        <meta
          name={"description"}
          key={"description"}
          content={
            "Contact Me now for your next web/app design and development project."
          }
        />
        <meta
          property={"og:title"}
          content={"Bringing West Coast Technology to Tennessee | Contact"}
          key={"og:title"}
        />
        <meta
          property={"og:url"}
          content={"codingdave.dev/contact"}
          key={"og:url"}
        />
        <link
          rel="canonical"
          key={"canonical"}
          href={"https://codingdave.dev/contact"}
        />
      </Head>

      <ProfileHeader showContact={true} />

      <Grid item className={classes.formContainer} style={{ marginTop: "2em" }}>
        <Grid item container direction={"column"} spacing={2}>
          <Grid item>
            <TextField
              label={"Name"}
              id={"name"}
              value={name}
              required
              fullWidth
              autoComplete={"off"}
              onChange={(event) => setName(event.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label={"Email"}
              id={"email"}
              value={email}
              required
              fullWidth
              autoComplete={"off"}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label={"Phone"}
              id={"phone"}
              value={phone}
              fullWidth
              autoComplete={"off"}
              onChange={(event) => setPhone(event.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label={"Message"}
              id={"message"}
              value={message}
              required
              multiline
              rows={10}
              fullWidth
              autoComplete={"off"}
              onChange={(event) => setMessage(event.target.value)}
            />
          </Grid>
          <Grid item style={{ marginTop: "2em" }}>
            <Grid item container justify={"center"}>
              <Button variant={"outlined"} onClick={() => sendMessage()}>
                {loading ? <CircularProgress /> : "Send Message"}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
