import Button from "../../Button/Button";
function Friend({ friend, onAddSelectFriend, setToggleBill }) {
  const { id, name, photo, balance, isSelected } = friend;
  let message;
  let status;
  if (balance === 0) {
    message = `You and ${name} are even`;
  } else if (balance > 0) {
    status = "green";
    message = `${name} owes you ₱ ${balance}.`;
  } else if (balance < 0) {
    status = "red";
    message = `You owe ${name} ₱ ${Math.abs(balance)}`;
  }
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={photo} alt={name} />
      <h3>{name}</h3>
      <p className={status}>{message}</p>
      <Button
        addOnClick={() => {
          onAddSelectFriend(id);
          setToggleBill(!isSelected);
        }}
      >
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
export default Friend;
