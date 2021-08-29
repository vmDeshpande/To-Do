import React, { useState, useEffect } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TaskCard from "./TaskCard";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";

export default function Content() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  function addTask(title, desc, imgurl) {
    

    setTasks([...tasks,  { title: title, desc: desc, imgurl: imgurl }]);
    
    setShowForm(false);
  }

  return (
    <>
      <div style={{ height: "85px" }}>
        <AddCircleIcon
          onClick={() => {
            setShowForm(!showForm);
          }}
          style={{
            width: "50px",
            height: "50px",
            color: "#3f51b5",
            float: "right",
            padding: "0.6em 1.2em",

            transform: showForm ? "rotate(45deg)" : "rotate(0deg)",
          }}
        ></AddCircleIcon>
      </div>
      {showForm && (
        <div style={{ margin: "2em" }}>
          <div>
            <TextField
              helperText="Enter Task Title"
              variant="outlined"
              type="text"
              name="tasktitle"
              onChange={(data) => {
                console.log(data)
                setTitle(data.target.value);
              }}
            ></TextField>
          </div>
          <div>
            <TextField
              helperText="Enter Task Description"
              variant="outlined"
              type="text"
              name="taskdesc"
              onChange={(data) => {
                setDesc(data.target.value);
              }}
            ></TextField>
          </div>
          <div>
            <TextField
              helperText="Enter Image URL"
              variant="outlined"
              type="text"
              name="imgurl"
              onChange={(data) => {
                setImgUrl(data.target.value);
              }}
            ></TextField>
          </div>
          <Button
            name="addtask"
            variant="contained"
            color="primary"
            size="large"
           style={{marginTop:"2em"}}
            startIcon={<SaveIcon />}
            onClick={() => {
              addTask(title, desc, imgUrl);
            }}
          >
           Save
          </Button>
        </div>
      )}
      <div style={{ padding: "3em" }}>
        <TaskCard tasks={tasks} setTasks={setTasks}></TaskCard>
      </div>
    </>
  );
}
