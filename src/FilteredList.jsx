import React, { Component } from 'react';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  onSearch = (event) => {
    this.setState({
      search: event.target.value.toLowerCase()
    });
  }

  filterItem = (item) => {
    return item.name.toLowerCase().includes(this.state.search);
  }

  render() {
    const filteredItems = this.props.items.filter(this.filterItem);
    
    return (
      <div>
        <h1>Produce Filter</h1>
        <input 
          type="text" 
          placeholder="Search for produce..." 
          onChange={this.onSearch}
        />
        <List items={filteredItems} />
      </div>
    );
  }
}

export default FilteredList;