export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closedHour = 22;
  const isOpen = hour >= openHour && hour <= closedHour;
  //   if (hour >= openHour && hour <= closedHour) {
  //     window.alert("we're currently open");
  //   } else {
  //     window.alert("sorry, we're closed");
  //   }
  return <footer>{new Date().toLocaleDateString()}We're currently open</footer>;
}
