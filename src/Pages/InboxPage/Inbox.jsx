import React, { useState } from "react";
import "./Inbox.css";
import { Link } from "react-router-dom";

const Inbox = () => {
  const [message, setMessage]=useState("")
  const [chatInbox, setChatInbox ]= useState([
    {
      text: "Text here",
    },
  ]);
  const chatProfiles = [
    {
      profile: {
        image: "https://source.unsplash.com/random/51x50?man/",
        name: "Name",
        text: "text",
        lastOnline: "Last online",
      },
    },
    {
      profile: {
        image: "https://source.unsplash.com/random/51x51?man/",
        name: "Name",
        text: "text",
        lastOnline: "Last online",
      },
    },
  ];
  const submitHandle=(e)=>{
    e.preventDefault();
    setMessage("");
setChatInbox([...chatInbox,{text:message, id:Math.random()}])
  }
  return (
    <div className="inbox mb-4">
      <div className="d-flex links">
        {" "}
        <Link to="/">Home</Link>
        <span className="sp">/</span>
        <Link to="/dashboard">dashboard</Link>
        <span className="sp">/</span>
        <Link to="#">inbox</Link>
      </div>
      <div className="d-flex headlist my-3 mb-4">
        <h1>Inbox</h1>
      </div>
      <div className="row row21">
        <div className="col-md-4 row21">
          <div className="">
            <p className="px-4 all-con">All Conversations</p>
          </div>
          {/* <div className="d-img d-flex">
            <img
              src="https://source.unsplash.com/random/61x61?wild-life/"
              alt="image"
              className="pro-img"
            />
          </div> */}
        </div>
        <div className="col-md-8 chat">
          <div className="px-3 man-name">
            <h6 className="p-online">
              <span className="online"> </span>Name
            </h6>
            <p className="pb2 p">Last seen: 11 hours ago</p>
          </div>
        </div>
      </div>
      <div className="row row2">
        <div className="col-md-4 b-r">
          {chatProfiles.map((chat, id) => (
            <div key={id} className="d-img d-flex p-3">
              <div className="d-block">
                <img src={chat.profile.image} alt="image" className="pro-img" />
                <p className="text-right d-flex">
                  <span className="online"> </span>
                </p>
              </div>
              <div className="d-block mx-3">
                <h6 className="">{chat.profile.name}</h6>
                <p className="">Me:{chat.profile.text}</p>
              </div>
              <div className="d-flex text-right">
                <p className="p">{chat.profile.lastOnline}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-8 b-l ib-chat">
          {chatInbox.map((chat, id) => (
            <div key={id} className="d-flex p-3">
              <div className="d-block">
                <img src="https://source.unsplash.com/random/51x50?man/" alt="image" className="pro-img" />
              </div>
              <div className="d-block mx-3">
                <h6 className="">Name</h6>
                <p className="">{chat.text}</p>
              </div>
            </div>
          ))}

          <form className="px-3" onSubmit={submitHandle}>
            <input
              value={message}
              type="text"
              required
              title="Write a message"
              className="form-control chat-inp"
              id="exampleFormControlInput1"
              placeholder="Text here"
              onChange={(e) => setMessage( e.target.value)}
            />
            <button className="send-btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
