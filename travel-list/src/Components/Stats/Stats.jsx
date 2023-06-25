export default function Stats({ items }) {
  const numOfItems = items.length;
  const numOfPackedItems = items.reduce((acc, currentItem) => {
    const packedItem = currentItem.isPacked;
    return packedItem ? acc + 1 : acc;
  }, 0);
  const percentageOfPackedItems = Math.floor(
    (numOfPackedItems / numOfItems) * 100
  );
  return (
    <footer className="stats">
      <em>
        {numOfItems
          ? `💼 You have ${numOfItems} item(s) on your list, and you already packed ${numOfPackedItems} (${percentageOfPackedItems}%) `
          : `Start adding some items to your packing list 🚀`}
      </em>
    </footer>
  );
}
