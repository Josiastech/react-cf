import React from "react"

export default class ProductCategoryRow extends React.Component {

  constructor() {
    super();
  }
  
  render() {
    return(
      <p>{this.props.category}</p>
    )
  }

}