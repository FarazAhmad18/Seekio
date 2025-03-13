import React, { useState } from "react";
import {
  Bell,
  AlertCircle,
  CheckCircle,
  Info,
  Trash,
  Eye,
  EyeOff,
} from "lucide-react";

const initialNotifications = [
  {
    id: 1,
    title: "New Assignment Uploaded",
    description: "Assignment 2 for React Basics is now available. Deadline: March 20.",
    type: "Update",
    time: "5 minutes ago",
    read: false,
    icon: <CheckCircle className="text-green-600 w-5 h-5" />,
  },
  {
    id: 2,
    title: "Course Reminder",
    description: "Live session for 'UI/UX Design Basics' tomorrow at 7 PM.",
    type: "Reminder",
    time: "2 hours ago",
    read: false,
    icon: <Bell className="text-yellow-500 w-5 h-5" />,
  },
  {
    id: 3,
    title: "Platform Announcement",
    description: "Scheduled maintenance this Saturday from 2 AM to 4 AM.",
    type: "Announcement",
    time: "Yesterday",
    read: true,
    icon: <AlertCircle className="text-red-500 w-5 h-5" />,
  },
  {
    id: 4,
    title: "New Feature Released",
    description: "Check out the new progress analytics dashboard.",
    type: "Update",
    time: "2 days ago",
    read: true,
    icon: <Info className="text-blue-500 w-5 h-5" />,
  },
];

const NotificationPage = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [filterType, setFilterType] = useState("All");

  // Toggle read/unread
  const toggleRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, read: !n.read } : n
      )
    );
  };

  // Delete a notification
  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  // Filter notifications
  const filteredNotifications =
    filterType === "All"
      ? notifications
      : notifications.filter((n) => n.type === filterType);

  return (
    <div className="pt-20 min-h-screen bg-gray-50 py-10 px-4 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-800 mb-6">
          Notifications
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
          Stay informed with the latest updates, reminders, and announcements from Seekio LMS.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["All", "Update", "Reminder", "Announcement"].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-4 py-1 text-sm rounded-full font-medium transition ${
                filterType === type
                  ? "bg-indigo-700 text-white"
                  : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Notification Cards */}
        <div className="space-y-5">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((note) => (
              <div
                key={note.id}
                className={`flex items-start gap-4 bg-white rounded-lg shadow-sm transition p-4 border-l-4 ${
                  note.read ? "border-gray-300 opacity-80" : "border-indigo-600"
                }`}
              >
                <div className="mt-1">{note.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">{note.title}</h3>
                  <p className="text-gray-600 text-sm mb-1">{note.description}</p>
                  <div className="text-xs text-gray-500 flex gap-4">
                    <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-md">
                      {note.type}
                    </span>
                    <span>{note.time}</span>
                    <span>{note.read ? "(Read)" : "(Unread)"}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col items-end gap-2">
                  <button
                    onClick={() => toggleRead(note.id)}
                    title={note.read ? "Mark as Unread" : "Mark as Read"}
                    className="text-indigo-700 hover:text-indigo-900"
                  >
                    {note.read ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                  <button
                    onClick={() => deleteNotification(note.id)}
                    title="Delete Notification"
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash size={18} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 mt-10 text-sm">
              No notifications found for <strong>{filterType}</strong>.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
