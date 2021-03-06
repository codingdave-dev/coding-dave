import React from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
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

const ContactSuccess = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Grid container alignItems={"center"} direction={"column"} style={{marginTop: '4em'}}>
            <Grid item>
                <Typography variant={'h2'}>Thank you for your message</Typography>
            </Grid>
            <Grid item>
                <Typography variant={'body1'}>We will be in contact with you shortly.</Typography>
            </Grid>
        </Grid>
    );
};

export default ContactSuccess;