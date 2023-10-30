import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";
function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="newBtn" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="Query" />
              What is Programming
            </button>
            <button className="query">
              <img src={msgIcon} alt="Query" />
              How to use an API ?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="Home" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="Saved" className="listItemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="Rocket" className="listItemsImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatImg" src={userIcon} alt="" />
            <p className="txt">
              I am ChatGPT, a language model developed by OpenAI based on the
              GPT-3.5 architecture. My primary function is to understand and
              generate human-like text based on the input I receive. I have been
              trained on a vast amount of text from the internet up until my
              knowledge cutoff date in September 2021,
            </p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src={gptImgLogo} alt="" />
            <p className="txt">
              I am ChatGPT, a language model developed by OpenAI based on the
              GPT-3.5 architecture. My primary function is to understand and
              generate human-like text based on the input I receive. I have been
              trained on a vast amount of text from the internet up until my
              knowledge cutoff date in September 2021,I am ChatGPT, a language
              model developed by OpenAI based on the GPT-3.5 architecture. My
              primary function is to understand and generate human-like text
              based on the input I receive. I have been trained on a vast amount
              of text from the internet up until my knowledge cutoff date in
              September 2021,
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input
              type="text"
              className="inpt"
              placeholder="Send a message..."
            />
            <button className="send">
              <img src={sendBtn} alt="send" />
            </button>
          </div>
          <p>
            Free Research Preview. ChatGPT may produce inaccurate information
            about people, places, or facts. ChatGPT August 3 Version
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
