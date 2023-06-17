import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import EmojiPicker from "emoji-picker-react";
import React, { useState } from "react";
import "./ChatWindow.css";


export default () => {

  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState('')

  const onEmojiClick = (emojiData, event) => {
    console.log('@@@', emojiData.emoji);
    
  }
  
  const handleOpenEmoji = () => {
    setEmojiOpen(true);
  }

  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  }

  return (
    <div className="chatWindow">
      <div className="chatWindow--header">
        <div className="chatWindow--headerinfo">
          <img
            className="chatWindow--avatar"
            src="https://www.w3schools.com/howto/img_avatar2.png"
            alt=""
          />
          <div className="chatWindow--name">Cassia</div>
        </div>

        <div className="chatWindow--headerbuttons">
          <div className="chatWindow--btn">
            <SearchIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatWindow--btn">
            <AttachFileIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatWindow--btn">
            <MoreVertIcon style={{ color: "#919191" }} />
          </div>
        </div>
      </div>

      <div className="chatWindow--body">
        
      </div>

      <div className="chatWindow--emojiarea"
      style={{height: emojiOpen ? '200px' : '0px'}}>
        <EmojiPicker 
          width='auto'
          onEmojiClick={onEmojiClick}
          skinTonesDisabled
          disableSearchdBar
        />
      </div>

      <div className="chatWindow--footer">


        <div className="chatWindow--pre">


          <div className="chatWindow--btn"
          onClick={handleCloseEmoji}
          style={{width: emojiOpen?40:0}}>
            <CloseIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatWindow--btn"
          onClick={handleOpenEmoji}>
            <InsertEmoticonIcon style={{ color: emojiOpen?'#009688':"#919191" }} />
          </div>
        </div>

        <div className="chatWindow--inputarea">
          <input
            className="chatWindow--input"
            type="text"
            placeholder="Digite uma mensagem"
            value={text}
            onChange={e=>setText(e.target.value)}
          />
        </div>

        <div className="chatWindow--pos">
          <div className="chatWindow--btn">
            <SendIcon style={{ color: "#919191" }} />
          </div>
        </div>
      </div>
    </div>
  );
};
