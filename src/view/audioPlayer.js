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

const BorderLinearProgress = withStyles({
  root: {
    height: 5,
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
    flexDirection: "row",
    display: "flex",
    padding: "15px",
    boxShadow:
      "0px 8px 9px -5px rgba(189,140,153,0.2),0px 15px 22px 2px rgba(189,140,153,0.2),0px 6px 28px 5px rgba(189,140,153,0.2)"
  },
  bigAvatar: {
    position: "absolute",
    top: -75,
    left: 0,
    margin: 10,
    width: 125,
    height: 125,
    zIndex: 500
  },
  rotation: {
    animation: "App-logo-spin infinite 20s linear"
  },

  button: {
    borderRadius: "15%"
  },
  paper2: {
    width: "90%",
    backgroundColor:"#fff7"
  }
}));

export default function AudioPlayer() {
  const classes = useStyles();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <main className={classes.root}>
      <div style ={{justifyContent:"center"}}>
        <Paper className={classes.paper2}>
          <h5>title</h5>
          <h6>artist</h6>
          <BorderLinearProgress
            variant="determinate"
            color="secondary"
            value={5}
          />
        </Paper>
        <Paper elevation={15} className={classes.paper}>
          <div style={{ position: "relative", width: "150px" }}>
            <Avatar
              src="http://www.idolesmag.com/images/photos2017/8232-slimane-pochette-album-solune-26-janvier-2018.jpg"
              className={[classes.bigAvatar, isPlaying && classes.rotation]}
            >
              <Avatar style={{ backgroundColor: "green", zIndex: 501 }} />
            </Avatar>
          </div>
          <IconButton aria-label="delete" className={classes.button}>
            <FastRewind fontSize="large" />
          </IconButton>
          {isPlaying ? (
            <IconButton
              onClick={() => setIsPlaying(false)}
              aria-label="delete"
              className={classes.button}
            >
              <Pause style={{ fontSize: "50px" }} fontSize="large" />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => setIsPlaying(true)}
              aria-label="delete"
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
