import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: 10,
    width: 300,
    height: 200
  }
}));

export default function LocationCard({ name, type, dimension, residents }) {
  // image={image}
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              {/* <img
                className={classes.img}
                alt="complex"
                src="/static/images/grid/complex.jpg"
              /> */}
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="body3">
                  Location Name: {name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Location Type: {type}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Dimension: {dimension}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  Population: {residents.length}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
