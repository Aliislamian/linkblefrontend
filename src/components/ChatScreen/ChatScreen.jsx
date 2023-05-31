import React, { useState } from "react";
import "../ChatScreen/ChatScreen.css";
import Navbar from "../MyNav/Navbar";
import ChatList from "./ChatList";
import ChatConversation from "./ChatConversation";
import { useRef } from "react";
import SelectOfferPopUP from "../../TalentComponents/SelectOfferPopUP/SelectOfferPopUP";

const ChatScreen = () => {
  const navRef = useRef();
  const [selectedUser, setSelectedUser] = useState(null);
  const handleUserSelect = (user) => {
    setSelectedUser(user);
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
          <ChatList onUserSelect={handleUserSelect} />
        </div>
        <div className="chat_screen_chat_conversation_comp_div_main">
          <ChatConversation user={selectedUser} />
        </div>
        <div className="chat_screen_chat_conversation_comp_div_main">
          <SelectOfferPopUP user={selectedUser} />
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
