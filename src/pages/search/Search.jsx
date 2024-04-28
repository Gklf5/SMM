import React from "react";
import "./Search.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CreatorCard from "../../components/UserCard/CreatorCard";
import EditorCard from "../../components/UserCard/EditorCard";
import axios from "axios";
const Search = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(
        `users/${currentUser.role === "editor" ? "creators" : "editors"}`
      );
      setUsers(res.data);
      console.log(res);
    };
    fetchUsers();
  }, [currentUser]);
  return (
    <div className="Search-main">
      hello
      {users &&
        users.map((user) => {
          // console.log(user);
          return currentUser.role === "creator" ? (
            <EditorCard editor={user} />
          ) : (
            <CreatorCard creator={user} />
          );
        })}
    </div>
  );
};

export default Search;
