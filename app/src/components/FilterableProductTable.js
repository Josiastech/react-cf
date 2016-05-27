import React from "react"

import SearchBar from "./SearchBar.js"
import ProductTable from "./ProductTable.js"

export default class FilterableProductTable extends React.Component {
  
  constructor() {
    super();
    this.state = {
      filter: null   
    }
  }

  filterData(ev) {
    var search = ev.target.value
    this.setState({filter: search})
  }

  render() {
    return (
      <div>
        <SearchBar onChange={this.filterData.bind(this)}/>
        <ProductTable products={this.props.data} filter={this.state.filter}/>
      </div>
    )
  }

}