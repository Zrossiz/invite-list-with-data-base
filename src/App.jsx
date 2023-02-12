import React from "react";
import "./index.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";
import { useState, useEffect } from "react";

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([]);
  const [invites, setInvites] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.war(err);
        alert("Ошибка при получении пользователя");
      })
      .finally(() => setLoading(false));
  });

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  const onClickSendInvites = () => {
    setSuccess(true);
  };

  return (
    <div className="App">
      {success ? (
        <Success count={invites.length} />
      ) : (
        <Users
          onClickInvite={onClickInvite}
          searchValue={searchValue}
          onChangeSearchValue={onChangeSearchValue}
          items={users}
          isLoading={isLoading}
          invites={invites}
          onClickSendInvites={onClickSendInvites}
        />
      )}
    </div>
  );
}

export default App;
