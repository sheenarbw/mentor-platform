import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

// username
// avatar

function Home(props) {
  const {
    questionsSummaries,
    currentQuestionText,
    handleAddQuestion,
    goToQuestionDetails
  } = props;
  //   console.log(currentQuestionText);
  return (
    <div>
      <TextField
        id="standard-multiline-static"
        label="What's on your mind?"
        multiline
        rows="4"
        // defaultValue="your question here"
        margin="normal"
        value={currentQuestionText}
        fullWidth
      />
      <Button onClick={handleAddQuestion}>Ask</Button>
      <hr />

      {questionsSummaries.map((data, index) => {
        return (
          <div key={index} onClick={goToQuestionDetails}>
            <b>{data.commentCount}</b> {data.summary} - {data.username}
            {/* <Avatar>{data.avatar}</Avatar> */}
          </div>
        );
      })}
    </div>
  );
}

export default Home;
