import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableRow from "./TableRow";
import TableFooter from "./TableFooter";

class Table extends React.Component {
  renderRows() {
    const { data } = this.props

    return data.map(({ id, name, price, quantity }) => {
      return <TableRow key={id} items={[id, name, price, quantity, price * quantity]} />
    })
  }

  calcTotalPrice() {
    const { data } = this.props

    return data.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  }

  render() {
    const { data } = this.props;

    return (
      <table>
        <TableHeader columnNames={["id", "nazwa", "cena", "ilość", "razem"]} />
        <TableBody>
          {this.renderRows()}
        </TableBody>
        <TableFooter items={['', '', '', '', this.calcTotalPrice()]} />
      </table>
    );
  }
}

export default Table;
