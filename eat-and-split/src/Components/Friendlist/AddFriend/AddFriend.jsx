import { useState } from "react";
import Button from "../../Button/Button";
function AddFriend({ isShown, onAddFriend }) {
  const [friend, setFriend] = useState({
    id: crypto.randomUUID(),
    name: "",
    photo: "https://i.pravatar.cc/48",
    balance: 0,
    isSelected: false,
  });
  const handleOnChange = (event) => {
    setFriend((currentFriend) => {
      return {
        ...currentFriend,
        [event.target.name]: event.target.value,
      };
    });
  };
  const addFriend = (event) => {
    event.preventDefault();
    onAddFriend(friend);
    setFriend({
      id: crypto.randomUUID(),
      name: "",
      photo: "https://i.pravatar.cc/48",
      balance: 0,
      isSelected: false,
    });
  };
  return (
    isShown && (
      <form className="form-add-friend" onSubmit={addFriend}>
        <label htmlFor="name">👫 Friend name</label>
        <input
          name="name"
          value={friend.name}
          id="name"
          onChange={handleOnChange}
          required
        ></input>
        <label htmlFor="image-url">🌄 Image URL</label>
        <input
          name="photo"
          value={friend.photo}
          id="image-url"
          onChange={handleOnChange}
        ></input>
        <Button>Add</Button>
      </form>
    )
  );
}
export default AddFriend;
