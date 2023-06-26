export default function Stats({ items }) {
  const numOfItems = items.length;
  const numOfPackedItems = items.reduce((acc, currentItem) => {
    const packedItem = currentItem.isPacked;
    return packedItem ? acc + 1 : acc;
  }, 0);
  const percentageOfPackedItems = Math.floor(
    (numOfPackedItems / numOfItems) * 100
  );
  const isAllPacked = numOfItems === numOfPackedItems;
  return (
    <footer className="stats">
      <em>
        {numOfItems === 0
          ? `Start adding some items to your packing list 🚀`
          : isAllPacked
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numOfItems} item(s) on your list, and you already packed ${numOfPackedItems} (${percentageOfPackedItems}%) `}
      </em>
    </footer>
  );
}
