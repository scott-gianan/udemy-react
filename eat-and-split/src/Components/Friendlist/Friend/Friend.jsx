import Button from "../../Button/Button";
function Friend({ photoSrc, name, balance, isSelected }) {
  let status;
  if (balance === 0) {
    status = `You and ${name} are even`;
  } else if (balance > 0) {
    status = `${name} owes you money.`;
  } else if (balance < 0) {
    status = `You owe ${name} money`;
  }
  return (
    <li>
      <img src={photoSrc} alt={name} />
      <h3>{name}</h3>
      <p>{status}</p>
      <Button>Test</Button>
    </li>
  );
}
export default Friend;
