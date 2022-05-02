import "./message.css";

export default function Message({own}) {
    return (
        // Conditional Rendering
        <div className={own ? "message own" : "message"}>
          <div className="messageTop">
                 <img 
                 className="messageImg"
                 src=""
                  alt="" />
                  <p className="messageText">But I must explain to you how aising pain </p>
          </div>
          <div className="messageBottom">2 hours ago</div>
        </div>
    )
}