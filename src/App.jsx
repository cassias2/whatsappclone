import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from "react";
import './App.css';
import ChatIntro from './components/ChatIntro';
import ChatListItem from './components/ChatListItem';
import ChatWindow from './components/ChatWindow';


export default () => {

const [chatlist, setChatList] = useState([
  {chatId: 1, title: 'Fulano de Tal', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
  {chatId: 2, title: 'Fulano de Tal', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
  {chatId: 3, title: 'Fulano de Tal', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
  {chatId: 4, title: 'Fulano de Tal', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
]);

const [activeChat, setActiveChat] = useState({});

  return (
    <div className="app-window">
      <div className="sidebar">
        
        <header>
            <img className ="header--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
            <div className="header--buttons">
                <div className="header-btn">
                   <DonutLargeIcon style={{color: '#919191'}}/>
                </div>
                <div className="header-btn">
                   <ChatIcon style={{color: '#919191'}}/>
                </div>
                <div className="header-btn">
                   <MoreVertIcon style={{color: '#919191'}}/>
                </div>
            </div>
        </header>

        <div className="search">
            <div className='search-input'>
              <SearchIcon fontSize='small' style={{color: '#919191'}}/>
              <input type="search" placeholder='Procurar ou começar uma conversa'/>
            </div>
        </div>

        <div className="chatlist">
          {chatlist.map((item, key) => (
              <ChatListItem
              key={key}
              data={item}
              active={activeChat.chatId === chatlist[key].chatId}
              onClick={() => setActiveChat(chatlist[key])}
              />
          ))}
        </div>

      </div>

      <div className="contentarea">
            {activeChat.chatId !== undefined &&
              <ChatWindow />
            }
            {activeChat.chatId === undefined &&
              <ChatIntro/>         
            }
          
      </div>
    </div>
  );
}