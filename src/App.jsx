import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Timer from "./Components/Timer";
import Trivia from "./Components/Trivia";
import Start from "./Components/Start";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [username, setUsername] = useState(null);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("₹ 0");

  const data = [
    {
      id: 1,
      question:
        "Which of the following is used in React.js to increase performance?",
      answers: [
        {
          text: "Virtual DOM",
          correct: true,
        },
        {
          text: "Original DOM",
          correct: false,
        },
        {
          text: "Both A and B",
          correct: false,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question:
        "Identify the one Which is used to pass data to components from outside?",
      answers: [
        {
          text: "Render with arguments",
          correct: false,
        },
        {
          text: "setState",
          correct: false,
        },
        {
          text: "PropTypes",
          correct: false,
        },
        {
          text: "props",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question:
        "In which language is React.js written?",
      answers: [
        {
          text: "Python",
          correct: false,
        },
        {
          text: "JavaScript",
          correct: true,
        },
        {
          text: "Java",
          correct: false,
        },
        {
          text: "PHP",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question:
        "What is Babel?",
      answers: [
        {
          text: "JavaScript compiler",
          correct: true,
        },
        {
          text: "JavaScript interpreter",
          correct: false,
        },
        {
          text: "JavaScript transpiler",
          correct: false,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question:
        "Identify the command used to create a react app.",
      answers: [
        {
          text: "npm install create-react-app",
          correct: false,
        },
        {
          text: "npm install -g create-react-app",
          correct: true,
        },
        {
          text: "install -g create-react-app",
          correct: false,
        },
        {
          text: "none of the above",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question:
        "How many elements can a valid react component return?",
      answers: [
        {
          text: "1",
          correct: true,
        },
        {
          text: "2",
          correct: false,
        },
        {
          text: "3",
          correct: false,
        },
        {
          text: "4",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question:
        "A state in React.js is also known as?",
      answers: [
        {
          text: "The internal storage of the component",
          correct: true,
        },
        {
          text: "External storage of the component",
          correct: false,
        },
        {
          text: "Permanent storage",
          correct: false,
        },
        {
          text: "All of the above",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question:
        "Using which of the following command can prevent default behaviour at in react?",
      answers: [
        {
          text: "preventDefault()",
          correct: true,
        },
        {
          text: "avoidDefault()",
          correct: false,
        },
        {
          text: "revokeDefault()",
          correct: false,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question:
        "Which of the following are two ways to handle data in react?",
      answers: [
        {
          text: "Services and components",
          correct: false,
        },
        {
          text: "State and services",
          correct: false,
        },
        {
          text: "State and props",
          correct: true,
        },
        {
          text: "state and component",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question:
        "ES6 stands for___",
      answers: [
        {
          text: "ECMA 6",
          correct: false,
        },
        {
          text: "ECMAJavaScript 6",
          correct: false,
        },
        {
          text: "EJavaScript 6",
          correct: false,
        },
        {
          text: "ECMAScript 6",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question:
        "In react, the key should be?",
      answers: [
        {
          text: "Does not requires to be unique",
          correct: false,
        },
        {
          text: "Unique in the DOM",
          correct: false,
        },
        {
          text: "Unique among his sibling only",
          correct: true,
        },
        {
          text: "all of the above",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question:
        "Choose the component which should be overridden to stop the component from updating?",
      answers: [
        {
          text: "componentDidUpdate",
          correct: false,
        },
        {
          text: "componentDidMount",
          correct: false,
        },
        {
          text: "willComponentUpdate",
          correct: false,
        },
        {
          text: "shouldComponentUpdate",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question:
        "Why is ref used?",
      answers: [
        {
          text: "to bind the function",
          correct: false,
        },
        {
          text: "to call a function",
          correct: false,
        },
        {
          text: "to directly access the DOM node",
          correct: true,
        },
        {
          text: "to refer to another js file",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question:
        "React is a___",
      answers: [
        {
          text: "JavaScript framework",
          correct: false,
        },
        {
          text: "JavaScript library",
          correct: true,
        },
        {
          text: "both a and b",
          correct: false,
        },
        {
          text: "none of the above",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question:
        " What is ReactJS mainly used for building?",
      answers: [
        {
          text: "Database",
          correct: false,
        },
        {
          text: "User interface",
          correct: true,
        },
        {
          text: "Connectivity",
          correct: false,
        },
        {
          text: "Design platform",
          correct: false,
        },
      ],
    },
  ];
  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "₹ 10,000" },
        { id: 2, amount: "₹ 50,000" },
        { id: 3, amount: "₹ 1,00,000" },
        { id: 4, amount: "₹ 5,00,000" },
        { id: 5, amount: "₹ 10,00,000" },
        { id: 6, amount: "₹ 25,00,000" },
        { id: 7, amount: "₹ 30,00,000" },
        { id: 8, amount: "₹ 50,00,000" },
        { id: 9, amount: "₹ 60,00,000" },
        { id: 10, amount: "₹ 75,00,000" },
        { id: 11, amount: "₹ 90,00,000" },
        { id: 12, amount: "₹ 1,00,00,000" },
        { id: 13, amount: "₹ 1,50,00,000" },
        { id: 14, amount: "₹ 1,75,00,000" },
        { id: 15, amount: "₹ 2,00,00,000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="App">
      {username ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">You Earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
