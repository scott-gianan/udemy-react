//react
import { useState } from "react";
//Components
import Friend from "./Friend/Friend";
import data from "../../assets/data";
import Button from "../Button/Button";
import AddFriend from "./AddFriend/AddFriend";
import Bill from "../Bill/Bill";
function FriendList() {
  const [friends, setFriends] = useState(data);
  const [toggleAddFriend, setToggleAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState("");
  const [toggleBill, setToggleBill] = useState(false);
  const toggleAdd = () => {
    setToggleAddFriend((t) => !t);
  };
  const handleAddFriend = (newFriend) => {
    setFriends((currFriends) => [...currFriends, newFriend]);
  };
  const selectFriend = (friendId) => {
    setToggleBill((b) => !b);
    friends.forEach((friend) => {
      if (friend.id === friendId) {
        setSelectedFriend(() => friend);
      }
    });
    setFriends((currFriends) => {
      return currFriends.map((friend) => {
        return friend.id === friendId
          ? { ...friend, isSelected: !friend.isSelected }
          : { ...friend, isSelected: false };
      });
    });
    setToggleAddFriend(false);
  };
  const handleSplitBill = (id, payee, friendExpense, myExpense) => {
    setFriends((currentFriends) => {
      return currentFriends.map((friend) => {
        const finalBalance =
          payee === "myself"
            ? friend.balance + friendExpense
            : friend.balance - myExpense;
        return friend.id === id
          ? { ...friend, balance: finalBalance, isSelected: false }
          : friend;
      });
    });
    setToggleBill((v) => !v);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <ul>
          {friends.map((friend) => {
            return (
              <Friend
                key={friend.id}
                friend={friend}
                onAddSelectFriend={selectFriend}
                setToggleBill={setToggleBill}
              />
            );
          })}
        </ul>
        <AddFriend isShown={toggleAddFriend} onAddFriend={handleAddFriend} />
        <Button addOnClick={toggleAdd}>
          {toggleAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <Bill
        key={selectedFriend.id}
        isToggled={toggleBill}
        selectedFriend={selectedFriend}
        setFriends={setFriends}
        setToggleBill={setToggleBill}
        onAddSplitBill={handleSplitBill}
      />
    </div>
  );
}

export default FriendList;
