import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FastForward from "@material-ui/icons/FastForwardRounded";
import FastRewind from "@material-ui/icons/FastRewindRounded";
import PlayArrow from "@material-ui/icons/PlayArrowRounded";
import Pause from "@material-ui/icons/PauseRounded";
import Avatar from "@material-ui/core/Avatar";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import { fadeInUp } from "react-animations";
import styled, { keyframes } from "styled-components";

//const Bounce =styled.div`animation: 2s ${keyframes`${fadeInUp}`} infinite`
const BorderLinearProgress = withStyles({
  root: {
    height: 5,
    width:"100%",
    borderRadius: 20,
    backgroundColor: "#fbfbfb"
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#fc7ba9"
  }
})(LinearProgress);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  paper: {
    // padding: theme.spacing(3)
    zIndex: "501",
    borderRadius: "15px",
    flexDirection: "row",
    display: "flex",
    padding: "10px",
    boxShadow:
      "0px 35px 9px -5px rgba(189,140,153,0.2),0px 15px 22px 2px rgba(189,140,153,0.2),0px 6px 28px 5px rgba(189,140,153,0.2)"
  },
  bigAvatar: {
    position: "absolute",
    width: 125,
    height: 125,
    zIndex: 500
  },
  avatar: {
    top: -75,
    left: 0,
    margin: 10
  },
  rotation: {
    animation: "App-logo-spin infinite 20s linear"
  },
  shadow: {
    boxShadow: "0px 5px 10px 5px rgb(0,0,0,0.2)"
  },
  button: {
    borderRadius: "15%"
  },
  button1: {
    borderRadius: "15%",
    backgroundColor:"#1117"
  },
  paper2: {
    zIndex: "500",
    position: "relative",
    display: "flex",
    width: "90%",
    backgroundColor: "#fff7"
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column"
  }
}));

export default function AudioPlayer() {
  const classes = useStyles();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <main className={classes.root}>
      <div className={classes.container}>
        <Paper className={classes.paper2}>
          <div style={{ position: "relative", width: "150px" }}></div>
          <div
            style={{
              bottom: "-10px",
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              padding: "15px",
              flexShrink: 1,
              justifyContent: "flex-start",
              alignItems:"flex-start"
            }}
          >
            <Typography variant="body2" gutterBottom>
              title
            </Typography>
            <Typography variant="body2" gutterBottom>
              artist
            </Typography>
            <BorderLinearProgress
              variant="determinate"
              color="secondary"
              value={5}
            />
          </div>
        </Paper>
        <Paper elevation={15} className={classes.paper}>
          <div style={{ position: "relative", width: "150px" }}>
            <Avatar
              className={[
                classes.bigAvatar,
                classes.avatar,
                isPlaying && classes.shadow
              ]}
            >
              <Avatar
                src="http://www.idolesmag.com/images/photos2017/8232-slimane-pochette-album-solune-26-janvier-2018.jpg"
                className={[classes.bigAvatar, isPlaying && classes.rotation]}
              ></Avatar>
              <Avatar
                style={{
                  display: "absolute",
                  backgroundColor: "#fff",
                  height: 30,
                  width: 30,
                  zIndex: 501
                }}
              />
            </Avatar>
          </div>
          <IconButton aria-label="delete" className={classes.button}>
            <FastRewind fontSize="large" />
          </IconButton>
          {isPlaying ? (
            <IconButton
              onClick={() => setIsPlaying(false)}
              aria-label="delete"
              className={classes.button1}
            >
              <Pause style={{ fontSize: "50px", color:"#fff" }} fontSize="large" />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => setIsPlaying(true)}
              aria-label="play"
              className={classes.button}
            >
              <PlayArrow style={{ fontSize: "50px" }} fontSize="large" />
            </IconButton>
          )}
          <IconButton aria-label="delete" className={classes.button}>
            <FastForward fontSize="large" />
          </IconButton>
        </Paper>
      </div>
    </main>
  );
}
