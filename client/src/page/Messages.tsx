import React, { useState } from 'react';
import { Search, Send, Paperclip, MoreVertical, Phone, Video } from 'lucide-react';

const Messages: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(0);
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessage] = useState([{
    id: 1,
    sender: 'Client 1',
    content: 'Hi, I wanted to discuss the consultation schedule.',
    time: '10:30 AM',
    isSender: false
  }])
  const [chats, setChats] = useState([{
      id: 1,
      name: 'Client 1',
      lastMessage: 'Start Chat by Sending Message',
      time: '2m ago',
      unread: 0,
      online: false
    }])

  // Mock data for chats
  // const chats = [
  //   {
  //     id: 1,
  //     name: 'Client 1',
  //     lastMessage: 'Start Chat by Sending Message',
  //     time: '2m ago',
  //     unread: 0,
  //     online: false
  //   },
    // {
    //   id: 2,
    //   name: 'Alex Morgan',
    //   lastMessage: 'When can we schedule the next...',
    //   time: '1h ago',
    //   unread: 0,
    //   online: false
    // },
    // {
    //   id: 3,
    //   name: 'Robert Chen',
    //   lastMessage: 'The proposal looks great',
    //   time: '3h ago',
    //   unread: 1,
    //   online: true
    // }
  // ];

  // Mock messages for the selected chat
  // const messages = [
  // {
  //   id: 1,
  //   sender: 'Client 1',
  //   content: 'Hi, I wanted to discuss the consultation schedule.',
  //   time: '10:30 AM',
  //   isSender: false
  // },
  // {
  //   id: 2,
  //   sender: 'You',
  //   content: 'Of course! I"m available tomorrow afternoon.',
  //   time: '10:32 AM',
  //   isSender: true
  // },
  // {
  //   id: 3,
  //   sender: 'Jane Cooper',
  //   content: 'Perfect! Would 2 PM work for you?',
  //   time: '10:33 AM',
  //   isSender: false
  // },
  // {
  //   id: 4,
  //   sender: 'You',
  //   content: 'Yes, 2 PM works great. I"ll send you the meeting link.',
  //   time: '10:35 AM',
  //   isSender: true
  // }
  // ];

  const handelSend = () => {
    let nowTime = new Date();
    let hour = nowTime.getHours();
    let minuts = nowTime.getMinutes();
    let ampm = nowTime.getHours() < 12 ? "AM" : "PM";
    let exactTime = `${hour > 12 ? (hour - 12) : hour}:${minuts} ${ampm}`;
    
    setMessage((prev) => [
      ...prev,
      {
        id: 2,
        sender: 'You',
        content: messageInput,
        time: exactTime.toString(),
        isSender: true
      }
    ])
    setMessageInput("");
  }
  

  return (
    <div className="h-[calc(100vh-64px)] flex">
      {/* Chat List */}
      <div className="w-80 border-r border-gray-200 bg-white">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100%-73px)]">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`p-4 cursor-pointer hover:bg-gray-50 ${selectedChat === chat.id ? 'bg-blue-50' : ''
                }`}
              onClick={() => setSelectedChat(chat.id)}
            >
              <div className="flex items-center">
                <div className="relative">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                    {chat.name.charAt(0)}
                  </div>
                  {chat.online && (
                    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></div>
                  )}
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">{chat.name}</h3>
                    <p className="text-xs text-gray-500">{chat.time}</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-1 truncate">{chat.lastMessage}</p>
                </div>
                {chat.unread > 0 && (
                  <div className="ml-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {chat.unread}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      {selectedChat ? (
        <div className="flex-1 flex flex-col bg-gray-50">
          {/* Chat Header */}
          <div className="p-4 bg-white border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                J
              </div>
              <div className="ml-3">
                <h2 className="text-lg font-medium text-gray-900">Jane Cooper</h2>
                <p className="text-sm text-green-500">Online</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <Phone size={20} />
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <Video size={20} />
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <MoreVertical size={20} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            {messages.length === 0 ? <></> : messages.map((message) => (
              <div
                key={message.id}
                className={`flex mb-4 ${message.isSender ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${message.isSender
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-900 border border-gray-200'
                    }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className={`text-xs mt-1 ${message.isSender ? 'text-blue-100' : 'text-gray-500'}`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex items-center">
              <button className="text-gray-400 hover:text-gray-600 mr-2">
                <Paperclip size={20} />
              </button>
              <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="ml-2 text-blue-500 hover:text-blue-600" onClick={handelSend}>
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <p className="text-gray-500">Select a chat to start messaging</p>
        </div>
      )}
    </div>
  );
};

export default Messages;