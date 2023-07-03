//react
import { useState } from "react";
//Components
import Friend from "./Friend/Friend";
import data from "../../assets/data";
function FriendList() {
  const [friends, setFriends] = useState(data);
  return (
    <div className="sidebar">
      <ul>
        {friends.map(({ id, name, photo, balance, isSelected }) => {
          return (
            <Friend key={id} name={name} photoSrc={photo} balance={balance} />
          );
        })}
      </ul>
    </div>
  );
}

export default FriendList;
