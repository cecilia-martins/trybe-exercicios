import React from 'react';

class Header extends React.Component{
  render() {
    const { title, subtitle } = this.props
    return (
      <div>
        <h1>{ title }</h1>
        <h2>{ subtitle}</h2>
      </div>
    )
  }
}
export default Header;