import React, { Component } from 'react';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      typeFilter: 'All'
    };
  }

  onSearch = (event) => {
    this.setState({
      search: event.target.value.toLowerCase()
    });
  }

  onTypeFilter = (event) => {
    this.setState({
      typeFilter: event.target.value
    });
  }

  filterItem = (item) => {
    const matchesSearch = item.name.toLowerCase().includes(this.state.search);
    const matchesType = this.state.typeFilter === 'All' || item.type === this.state.typeFilter;
    return matchesSearch && matchesType;
  }

  render() {
    const filteredItems = this.props.items.filter(this.filterItem);
    
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>🥕 Produce Filter 🍎</h1>
        
        <div style={{ marginBottom: '20px' }}>
          <input 
            type="text" 
            placeholder="Search for produce..." 
            onChange={this.onSearch}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '2px solid #3498db',
              borderRadius: '8px',
              marginBottom: '10px'
            }}
          />
          
          <select 
            onChange={this.onTypeFilter}
            value={this.state.typeFilter}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '2px solid #e74c3c',
              borderRadius: '8px',
              backgroundColor: 'white'
            }}
          >
            <option value="All">All Types</option>
            <option value="Fruit">🍓 Fruits</option>
            <option value="Vegetable">🥬 Vegetables</option>
          </select>
        </div>
        
        <div style={{ 
          backgroundColor: '#ecf0f1',
          padding: '15px',
          borderRadius: '8px',
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          <strong>Showing {filteredItems.length} items</strong>
          {this.state.search && (
            <span> matching "{this.state.search}"</span>
          )}
          {this.state.typeFilter !== 'All' && (
            <span> in {this.state.typeFilter}s</span>
          )}
        </div>
        
        <List items={filteredItems} />
      </div>
    );
  }
}

export default FilteredList;