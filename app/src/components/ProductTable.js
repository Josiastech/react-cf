import React from "react"

import ProductCategoryRow from "./ProductCategoryRow.js"
import ProductRow from "./ProductRow.js"

export default class ProductTable extends React.Component {

  constructor() {
    super();
  }

  render() {
    var last_category = null
    var rows = []

    if(this.props.filter != null) {
      var filter = this.props.filter;
      this.props.products.filter(function(product) {
        if(product.name.indexOf(filter) > -1) {
          if(product.category !== last_category)
            rows.push(<ProductCategoryRow category={ product.category } key={ product.category } />)
            rows.push(<ProductRow product={ product.name } key={ product.name } />)
            last_category = product.category
        }
      })
    }
    else if(this.props.products != null) {
      this.props.products.forEach(function(product) {
        if (product.category !== last_category)
          rows.push(<ProductCategoryRow category={ product.category } key={ product.category } />)
          rows.push(<ProductRow product={ product.name } key={ product.name } />)
          last_category = product.category
      })
    }
    else {
      rows.push(<h1>Loading</h1>)
    }
    
    return ( 
      <div>
        { rows }
      </div> 
    )
  }

}