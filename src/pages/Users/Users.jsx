import React from "react";
import "./Users.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [isAssigned, setIsAssigned] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    const fetchUser = async () => {
      const usersList = await axios.get(
        `users/${currentUser.role === "creator" ? "editors" : "creators"}`
      );
      // console.log(usersList);
      setUsers(usersList.data);
    };
    fetchUser();
  }, [currentUser]);

  const handleAssign = async (user_id) => {
    try {
      // console.log(user_id);
      let res;
      if (!isAssigned) {
        res = await axios.put(`users/assign/${user_id}`);
        setIsAssigned(true);
      } else {
        res = await axios.put(`users/unassign/${user_id}`);
        setIsAssigned(false);
      }
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="users-main">
      {users.map((user) => (
        <div className="user-card" key={user._id}>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          {currentUser.role === "creator" ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                handleAssign(user._id);
              }}
            >
              {isAssigned ? "Unassign" : "Assign"}
            </button>
          ) : (
            <button disabled>editor</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Users;
