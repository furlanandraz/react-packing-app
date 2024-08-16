export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter(item => item.packed).length;
  const percentage = Math.round(numPacked / numItems * 100);
  return (
    <footer className="stats">
      <em>{percentage !== 100 ? `You have packed ${numItems} on your list and ${numPacked}% packed` : 'You are ready to go!'}</em>
    </footer>
  );
}
