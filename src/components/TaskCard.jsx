import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import Swal from "sweetalert2";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function TaskCard({ tasks, setTasks }) {
  const classes = useStyles();

  return (
    <>
      {tasks.map((res, index) => (
        <span style={{ padding: "5em" }} key={index}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={res.imgurl}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {res.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {res.desc}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <DeleteIcon
                style={{ color: "red" }}
                onClick={() => {
                  let t = tasks;
                  t = t.splice(index, 1);
                  console.log(t.splice(index, 1));
                  setTasks(t.splice(index, 1));
                }}
              ></DeleteIcon>
            </CardActions>
          </Card>
        </span>
      ))}
    </>
  );
}
