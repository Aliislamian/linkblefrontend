import React from "react";
import "../ChatScreen/ChatScreen.css";
import TalentNavbar from "../TalentNavbar/TalentNavbar";
import ChatList from "./ChatList";
import ChatConversation from "./ChatConversation";
import { useRef } from "react";

const ChatScreen = () => {
  const navRef = useRef();

  return (
    <div
    //  style={{ overflow: "hidden" }}
    >
      <div>
        <TalentNavbar ref={navRef} />
      </div>
      <div
        className="chat_list_n_chat_conversation_main"
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <div className="chat_screen_chat_list_comp_div_main">
          <ChatList />
        </div>
        <div className="chat_screen_chat_conversation_comp_div_main">
          <ChatConversation />
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
