import React, { Component } from "react";

class MtTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnCount: this.props.columnCount,
      rowCount: this.props.rowCount,
      source: this.props.source
    };
  }

  createTable = () => {
    if (this.state.source === undefined) {
      return;
    }
    let rows = [];
    for (let i = 0; i < this.state.rowCount; i++) {
      let columns = [];
      let currMovie = this.state.source[i];
      let movieAttribs = Object.keys(currMovie);
      for (let y = 1; y < this.state.columnCount; y++) {
        let valuetemp = currMovie[movieAttribs[y]];
        console.log(valuetemp);
        columns.push(<td>{valuetemp}</td>);
      }
      rows.push(<tr>{columns}</tr>);
    }
    return rows;
  };

  render() {
    return <table className="table">{this.createTable()}</table>;
  }
}

export default MtTable;
