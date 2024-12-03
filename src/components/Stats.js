export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer>
        <p className="stats">
          <em>Start adding some items to your packing list 🚀</em>
        </p>
      </footer>
    );

  const numItems = items.length;
  const numPacked = items.reduce((add, item) => (item.packed ? ++add : add), 0);
  const perPacked = (numPacked / numItems) * 100;
  return (
    <footer className="stats">
      <em>
        {perPacked === 100
          ? "You got everything! Ready to go 🛫"
          : ` 💼You have ${numItems} items on your list, and you already packed
          ${numPacked} items (${perPacked.toFixed(2)}%)`}
      </em>
    </footer>
  );
}
