import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Home from "./Home";
import QuestionDetails from "./QuestionDetails";

const isServer = typeof window === "undefined";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      home: {
        currentQuestionText: "", // whatever question the user is currently typing
        questionsSummaries: [
          {
            summary: "What language should I learn?...",
            commentCount: 12,
            username: "Rokhuda",
            avatar: "RO" // https://material-ui.com/components/avatars/#avatars
          },
          {
            summary: "I want to work for a big cmoopany, wha...",
            commentCount: 21,
            username: "Kimmy",
            avatar: "KI"
          },
          {
            summary: "I'm going for my first job inerview at...",
            commentCount: 13,
            username: "Sbu",
            avatar: "SB"
          }
        ]
      },
      questionDetails: {
        fullQuestionText:
          "What language should I learn? I am a scientist and I like biology and anime waaaaay too much. What languages can I use to make my microbiology career awesome?",

        comments: [
          {
            text: "Python!!! Woooo python",
            username: "Sheena",
            avatar: "SH"
          },
          {
            text:
              "R might be nice too. By statiticians, for stataticians. And the graphics are cool",
            username: "Warwick",
            avatar: "WA"
          },
          {
            text:
              "Agreed, but I would start with Python, it's generally a more useful language so you can use it for ... many nifty things.Check this out: https://automatetheboringstuff.com/",
            username: "sheena",
            avatar: "SB"
          }
        ],
        currentResponseText: "" // whatever comment the user is currently typing
      }
    };
  }

  handleAddComment() {
    if (this.state.questionDetails.currentResponseText) {
      this.setState({
        questionDetails: {
          ...this.state.questionDetails,
          currentResponseText: "",
          comments: [
            ...this.state.questionDetails.comments,
            {
              text: this.state.questionDetails.currentResponseText,
              username: "demo"
            }
          ]
        }
      });
    }
  }

  handleAddQuestion() {
    this.setState({
      home: {
        ...this.state.home,

        currentQuestionText: "",
        questionsSummaries: [
          {
            summary: this.state.home.currentQuestionText.slice(0, 8) + "...",
            commentCount: 0,
            username: "demo",
            avatar: "DE"
          },
          ...questionsSummaries
        ]
      }
    });
  }

  handleChangeQuestionInput(text) {
    this.setState({
      home: {
        ...this.state.home,
        currentQuestionText: text
      }
    });
  }

  handleChangeCommentInput(text) {
    this.setState({
      questionDetails: {
        ...this.state.questionDetails,
        currentResponseText: text
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <Home
          {...this.state.home}
          handleAddQuestion={() => this.handleAddQuestion()}
          handleChangeQuestionInput={text => handleChangeQuestionInput(text)}
        ></Home>
        <QuestionDetails
          {...this.state.questionDetails}
          handleAddComment={() => this.handleAddComment()}
          handleChangeCommentInput={text => this.handleAddComment(text)}
        ></QuestionDetails>
      </React.Fragment>

      //   <div>
      //     {this.state.questionDetails.currentResponseText}
      //     <hr />
      //     <div>
      //       {this.state.questionDetails.comments.map((comment, index) => (
      //         <div key={index}>{comment.text}</div>
      //       ))}

      //       <button onClick={() => this.handleAddComment()}>Add Comment</button>
      //     </div>
      //   </div>
    );
  }
}

// const Home = () => (
//   <div>
//     <Head>
//       <title>Home</title>
//       <link rel="icon" href="/favicon.ico" />
//     </Head>

//     <Nav />
//     <Hi name="Rok"></Hi>
//     <div className="hero">
//       <h1 className="title">Welcome to Next.js!</h1>
//     </div>

//     <style jsx>{`
//       .hero {
//         width: 100%;
//         color: #333;
//       }
//       .title {
//         margin: 0;
//         width: 100%;
//         padding-top: 80px;
//         line-height: 1.15;
//         font-size: 48px;
//       }
//       .title,
//       .description {
//         text-align: center;
//       }
//       .row {
//         max-width: 880px;
//         margin: 80px auto 40px;
//         display: flex;
//         flex-direction: row;
//         justify-content: space-around;
//       }
//       .card {
//         padding: 18px 18px 24px;
//         width: 220px;
//         text-align: left;
//         text-decoration: none;
//         color: #434343;
//         border: 1px solid #9b9b9b;
//       }
//       .card:hover {
//         border-color: #067df7;
//       }
//       .card h3 {
//         margin: 0;
//         color: #067df7;
//         font-size: 18px;
//       }
//       .card p {
//         margin: 0;
//         padding: 12px 0 0;
//         font-size: 13px;
//         color: #333;
//       }
//     `}</style>
//   </div>
// );

export default App;
