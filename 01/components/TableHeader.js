import React from "react";

class TableHeader extends React.Component {
  render() {
    const { columnNames } = this.props;

    return (
      <thead>
        <tr>
          {columnNames.map((name) => {
            return <th key={name}>{name}</th>;
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
