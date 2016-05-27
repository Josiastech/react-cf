import React from "react"

export default class SearchBar extends React.Component {
  
  constructor() {
    super();
  }

  render() {
    return (
      <form>
        <input onChange={this.props.onChange} type="text" placeholder='Search...'/>
        <input type="checkbox"/>
        Solo productos en stock
      </form>
    )
  }

}