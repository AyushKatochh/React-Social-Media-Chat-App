import { Avatar, IconButton } from '@mui/material';
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';

function Chat() {
  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar />

        <div className='chat__headerInfo'>
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        <div className='chat__headerRight'>
          <IconButton>
            <SearchIcon />
          </IconButton>
            
          <IconButton>
               <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
              </div>
  )
}

export default Chat;
