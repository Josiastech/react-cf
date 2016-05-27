import React from "react"

export default class ProductRow extends React.Component {

  constructor() {
    super();
  }

  render() {
    var name = this.props.product.stocked ?
      this.props.product.name :
      <span>
        {this.props.product.name}
      </span>;
    return (
      <div>
        <p>{name}</p>
        <p>{this.props.product.price}</p>
      </div>
    );
  }

}