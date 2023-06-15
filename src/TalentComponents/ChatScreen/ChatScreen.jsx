import React, { useState } from "react";
import "../ChatScreen/ChatScreen.css";
import Navbar from "../../components/MyNav/Navbar";
import ChatList from "./ChatList";
import ChatConversation from "./ChatConversation";
import { useRef } from "react";
import SelectOfferPopUP from "../../TalentComponents/SelectOfferPopUP/SelectOfferPopUP";

const ChatScreen = (props) => {
  const navRef = useRef();
  const [selectedUser, setSelectedUser] = useState(null);
  const [show , setShow] = useState(false);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleButtonClick = () => {
    setShow(true)
    console.log("setShow",show);

  };

  return (
    <div
    //  style={{ overflow: "hidden" }}
    >
      <div>
        <Navbar ref={navRef} />
      </div>
      <div
        className="chat_list_n_chat_conversation_main"
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <div className="chat_screen_chat_list_comp_div_main">
          <ChatList onUserSelect={handleUserSelect} handleButtonClick={handleButtonClick} />
        </div>
        <div className="chat_screen_chat_conversation_comp_div_main">
          <ChatConversation user={selectedUser} show={show} />
        </div>
        <div className="chat_screen_chat_conversation_comp_div_main">
          <SelectOfferPopUP user={selectedUser} />
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
