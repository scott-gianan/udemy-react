export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closedHour = 22;
  const isOpen = hour >= openHour && hour <= closedHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closedHour={closedHour} />
      ) : (
        <p className="order">
          We're Happy to welcome you between {openHour}:00 and {closedHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closedHour }) {
  return (
    <div className="order">
      <p>We're open until {closedHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}
