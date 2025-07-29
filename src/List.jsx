import React, { Component } from 'react';

class List extends Component {
  renderList = () => {
    const items = this.props.items || [];
    return items.map((item, index) => (
      <li key={index}>
        {item.name} - {item.type}
      </li>
    ));
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

export default List;