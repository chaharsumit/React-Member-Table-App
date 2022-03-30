function Table() {
  return (
    <table className="table">
      <thead>
        <tr className="bg-grey text-align-left">
          <th></th>
          <th>Name</th>
          <th>Company</th>
          <th>Status</th>
          <th>Last Updated</th>
          <th>Notes</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-light text-align-left">
          <td>
            <input type="checkbox" />
          </td>
          <td>$100</td>
          <td>January</td>
          <td>$100</td>
          <td>January</td>
          <td>$100</td>
          <td>🗑</td>
          <td>$100</td>
        </tr>
        <tr className="bg-grey">
          <td>
            <input type="checkbox" />
          </td>
          <td>$100</td>
          <td>January</td>
          <td>$100</td>
          <td>January</td>
          <td>$100</td>
          <td>🗑</td>
          <td>$100</td>
        </tr>
      </tbody>
      <tfoot>
        <tr className="bg-light text-align-left">
          <td>
            <input type="checkbox" />
          </td>
          <td>$100</td>
          <td>January</td>
          <td>$100</td>
          <td>January</td>
          <td>$100</td>
          <td>🗑</td>
          <td>$100</td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Table;