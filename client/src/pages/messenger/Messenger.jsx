import Conversation from "../../components/conversations/Conversation";
import Topbar from "../../components/topbar/Topbar";
import "./messenger.css";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";


export default function Messenger() {

    const [conversations, setConversations] = useState([]);

    const {user} =  useContext(AuthContext);
// getting all the conversations according to the specific user 
    useEffect(() => {
        const getConversations = async() => {
            try{
            const res = await axios.get("/conversations/"+user._id);
            console.log(res);
            } catch(err) {
             console.log(err);
            }
        }
        getConversations();
    }, [user._id])

    return (
        <>
        <Topbar />
        <div className="messenger">
           <div className="chatMenu">
               <div className="chatMenuWrapper">
                  <input placeholder="Search Friends" className="chatMenuInput"/>
                  <Conversation />
                  <Conversation />
                  <Conversation />
                  <Conversation />
               </div>
           </div>

            <div className="chatBox">
                <div className="chatBoxWrapper">
                    <div className="chatBoxTop">
                        <Message />
                        <Message own={true}/>
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />


                    </div>
                    <div className="chatBoxBottom">
                        <textarea className="chatMessageInput" placeholder="Write Something"></textarea>
                        <button className="chatSubmitButton">Send</button>
                    </div>
                </div>
            </div>
             <div className="chatOnline">
                 <div className="chatOnlineWrapper">
                    <ChatOnline />
                 </div>
             </div>
        </div>
        </>
    )
}
