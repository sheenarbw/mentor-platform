import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

function QuestionDetails(props) {
  const {
    fullQuestionText,
    comments,
    currentResponseText,
    handleAddComment
  } = props;

  return (
    <div>
      {fullQuestionText}
      <br />
      <TextField
        id="standard-multiline-static"
        label="What's on your mind?"
        multiline
        rows="4"
        // defaultValue="your question here"
        margin="normal"
        value={currentResponseText}
        fullWidth
      />
      <Button onClick={handleAddComment}>Add Comment</Button>
      <hr />
      {comments.map((data, index) => {
        return (
          <div key={index}>
            {data.text} - {data.username}
          </div>
        );
      })}
    </div>
  );
}

export default QuestionDetails;
