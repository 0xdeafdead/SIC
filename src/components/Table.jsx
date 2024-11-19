export default function Table({ data }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest per Year</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.year}>
            <td>{item.year}</td>
            <td>{`$${item.investmentValue.toLocaleString()}`}</td>
            <td>{`$${item.interestPerYear.toLocaleString()}`}</td>
            <td>{`$${item.totalInterest.toLocaleString()}`}</td>
            <td>{`$${item.investedCapital.toLocaleString()}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
