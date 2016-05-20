import React from "react";
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export default class ProductTable extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
			<div>
				<ProductCategoryRow/>
				<ProductRow/>
				<ProductRow/>
				<ProductRow/>
				<ProductCategoryRow/>
				<ProductRow/>
				<ProductRow/>
				<ProductRow/>
			</div>
		)
	}
}