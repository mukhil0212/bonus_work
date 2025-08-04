import React, { Component } from 'react';

class List extends Component {
  getTypeIcon = (type) => {
    return type === 'Fruit' ? '🍎' : '🥬';
  }

  renderList = () => {
    const items = this.props.items || [];
    
    if (items.length === 0) {
      return (
        <li style={{
          textAlign: 'center',
          color: '#7f8c8d',
          fontStyle: 'italic',
          padding: '20px'
        }}>
          No items found. Try adjusting your search or filter.
        </li>
      );
    }
    
    return items.map((item, index) => (
      <li key={index} style={{
        backgroundColor: item.type === 'Fruit' ? '#fff8dc' : '#f0fff0',
        margin: '8px 0',
        padding: '12px 15px',
        borderRadius: '8px',
        border: `2px solid ${item.type === 'Fruit' ? '#ffa500' : '#32cd32'}`,
        display: 'flex',
        alignItems: 'center',
        transition: 'transform 0.2s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => e.target.style.transform = 'translateX(5px)'}
      onMouseLeave={(e) => e.target.style.transform = 'translateX(0px)'}
      >
        <span style={{ marginRight: '10px', fontSize: '20px' }}>
          {this.getTypeIcon(item.type)}
        </span>
        <span style={{ fontWeight: 'bold', color: '#2c3e50' }}>
          {item.name}
        </span>
        <span style={{ 
          marginLeft: 'auto', 
          fontSize: '12px', 
          color: '#7f8c8d',
          backgroundColor: 'white',
          padding: '4px 8px',
          borderRadius: '12px',
          border: '1px solid #ddd'
        }}>
          {item.type}
        </span>
      </li>
    ));
  }

  render() {
    return (
      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0
      }}>
        {this.renderList()}
      </ul>
    );
  }
}

export default List;