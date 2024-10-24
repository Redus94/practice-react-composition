import React from "react";

class TableRow extends React.Component {
  render() {
    const { items } = this.props
    return (
      <tr>
        {items.map((item, index) => {
          return (
            <td key={index}>{item}</td>
          )
        })}
      </tr>
    );
  }
}

export default TableRow;
