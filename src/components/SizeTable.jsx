function SizeTable({ sizes }) {
  if (sizes.length === 0) {
    return <p>No size variations available</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Size</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
        {sizes.map((item, index) => (
          <tr key={index}>
            <td>{item.size}</td>
            <td>₹{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SizeTable;