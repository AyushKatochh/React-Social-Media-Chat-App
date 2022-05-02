import "./chatOnline.css";

export default function ChatOnline() {
    return (
        <div className="chatOnline">
           <div className="chatOnlineFriend">
               <div className="chatOnlineImgContainer">
                   <img className="chatOnlineImg" src="" alt="" />
                   <div className="chatOnlineBadge"></div>
               </div>
               <span className="chatOnlineName">Ayush Katoch</span>
           </div>
           <div className="chatOnlineFriend">
               <div className="chatOnlineImgContainer">
                   <img className="chatOnlineImg" src="" alt="" />
                   <div className="chatOnlineBadge"></div>
               </div>
               <span className="chatOnlineName">Ayush Katoch</span>
           </div>
           <div className="chatOnlineFriend">
               <div className="chatOnlineImgContainer">
                   <img className="chatOnlineImg" src="" alt="" />
                   <div className="chatOnlineBadge"></div>
               </div>
               <span className="chatOnlineName">Ayush Katoch</span>
           </div>
        </div>
    )
}