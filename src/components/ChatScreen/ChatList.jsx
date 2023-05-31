import React, { useEffect, useState } from "react";
import "../ChatScreen/ChatScreen.css";
import SearchIcon from "../../images/search.png";
import Picture from "../../images/profilepic.png";
import Picture1 from "../../images/tabprofileimg1.png";
import Picture2 from "../../images/tabprofileimg2.png";
import Picture3 from "../../images/tabprofileimg3.png";
import Picture4 from "../../images/circularprofile.png";
import { StarBorder } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import ChatConversation from "./ChatConversation";

const ChatList = ({ onUserSelect, username }) => {

  const [chatListData, setChatListData] = useState({ chatlist: [], groupChatlist: [] });
  // const [formData, setFormData] = useState([]);
  // const handleClick = () => {
  //   const newFormData = [...formData, formData ]; // Add new data to the existing data array
  //   setFormData(newFormData); // Update the state with the new data
  // console.log("formData=========>>>>>>>", setFormData)

  // };

  useEffect(() => {
    console.log("soiw me dataa");
    const fetchChatList = async () => {
      try {
        const res = await newRequest.get("/get-chatlist");
        setChatListData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChatList();
  }, []);

  const handleUserClick = (user) => {
    onUserSelect(user);
  };
  const SenderMessagesData = [
    {
      profileImage: Picture,
      profiler_name: "Lucifer",
      favourite: "false",
      msg_received_time: "10:22 PM",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consectetur voluptates quos ullam fuga inventore unde voluptate deserunt commodi accusantium. Animi quis recusandae, hic repellendus nulla voluptate nisi exercitationem. Voluptate?",
    },
    {
      profileImage: Picture1,
      profiler_name: "Thor Oden",
      favourite: "true",
      msg_received_time: "07:12 PM",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consectetur voluptates quos ullam fuga inventore unde voluptate deserunt commodi accusantium. Animi quis recusandae, hic repellendus nulla voluptate nisi exercitationem. Voluptate?",
    },
    {
      profileImage: Picture2,
      profiler_name: "Martin",
      favourite: "true",
      msg_received_time: "yesterday",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consectetur voluptates quos ullam fuga inventore unde voluptate deserunt commodi accusantium. Animi quis recusandae, hic repellendus nulla voluptate nisi exercitationem. Voluptate?",
    },
    {
      profileImage: Picture3,
      profiler_name: "Sunny",
      favourite: "false",
      msg_received_time: "yesterday",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consectetur voluptates quos ullam fuga inventore unde voluptate deserunt commodi accusantium. Animi quis recusandae, hic repellendus nulla voluptate nisi exercitationem. Voluptate?",
    },
    {
      profileImage: Picture4,
      profiler_name: "James Bond",
      favourite: "false",
      msg_received_time: "yesterday",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consectetur voluptates quos ullam fuga inventore unde voluptate deserunt commodi accusantium. Animi quis recusandae, hic repellendus nulla voluptate nisi exercitationem. Voluptate?",
    },
    {
      profileImage: Picture1,
      profiler_name: "John Carter",
      favourite: "true",
      msg_received_time: "06/07/22",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consectetur voluptates quos ullam fuga inventore unde voluptate deserunt commodi accusantium. Animi quis recusandae, hic repellendus nulla voluptate nisi exercitationem. Voluptate?",
    },
    {
      profileImage: Picture2,
      profiler_name: "Yaralek",
      favourite: "false",
      msg_received_time: "05/07/21",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consectetur voluptates quos ullam fuga inventore unde voluptate deserunt commodi accusantium. Animi quis recusandae, hic repellendus nulla voluptate nisi exercitationem. Voluptate?",
    },
    {
      profileImage: Picture3,
      profiler_name: "Lucifer",
      favourite: "true",
      msg_received_time: "10:22 PM",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consectetur voluptates quos ullam fuga inventore unde voluptate deserunt commodi accusantium. Animi quis recusandae, hic repellendus nulla voluptate nisi exercitationem. Voluptate?",
    },
  ];
  const navigate = useNavigate();

  return (
    <div className="buyer_chat_list_main">
      <div className="buyer_allChat_n_group_chat_div_main">
        <div className="buyer_All_chat">All chat</div>
        <div
          className="buyer_create_grp_chat_div"
          onClick={() => navigate("/buyerhome")}
        >
          <span className="grp_chat_pls_symbol">+</span>Create Group Chat
        </div>
      </div>
      <div className="buyer_chat_search_bar_div">
        <div className="buyer_chat_search_icon_div">
          <img src={SearchIcon} alt="icon" className="searcH_icon_css" />
        </div>
        <input
          type="search"
          className="buyer_chat_search_type_css"
          placeholder="Search for Chat"
        />
      </div>
      <div className="profiles_Chat_list_main">
        {chatListData.chatlist.map((item) => {
          {/* {SenderMessagesData.map((item) => { */ }
          return (
            <div className="buyer_chat_first_profile_main"
              onClick={() => handleUserClick(item)}

            >
              <div className="profile_picture_div_main">
                <img
                  src={item.profileImg !== "" ? item.profileImg : Picture}
                  alt="img"
                  className="profilePicute_css_for_chat"
                />
              </div>
              <div className="profiler_name_n_msg_main">
                <div className="profiler_name_with_time_n_fvrt_icon_main">
                  <div className="profiler_name_with_online_status">
                    <div className="Profiler_name_text" 
                    // onClick={handleClick}
                    >
                      {item.username}
                    {/* <ChatConversation data={formData} /> */}
                    </div>
                    <div className="chat_online_status"></div>
                  </div>

                  <div className="time_n_fvrt_div_css">
                    {item.favourite === "true" && (
                      <div className="fvrt_icon_div_css">
                        <StarBorder
                          style={{ color: "gold", fontSize: "large" }}
                        />
                      </div>
                    )}
                    {/* <div className="time_css">{item.msg_received_time}</div> */}
                    <div className="time_css">10:22 PM</div>
                  </div>
                </div>
                {/* <div className="chat_sender_msg_css">{item.message}</div> */}
                <div className="chat_sender_msg_css">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consecteture</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatList;
