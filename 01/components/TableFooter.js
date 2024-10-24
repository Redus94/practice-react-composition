import React from "react";
import TableRow from "./TableRow";

class TableFooter extends React.Component {
    render() {
        return (
            <tfoot>
                <TableRow items={this.props.items} />
            </tfoot>
        );
    }
}

export default TableFooter;
