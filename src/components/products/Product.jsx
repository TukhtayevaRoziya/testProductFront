import React from "react";
import { useParams } from "react-router-dom";

import style from "./Products.module.css";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  return <WrappedComponent {...props} params={params} />;
};

export class Product extends React.Component {
  render() {
    return (
      <>
        <div className={style.product_item_map}>
          <div className={style.product_item_map__img}>
            <img src={this.props.data && this.props.data.thumbnail} alt="" />
            <div className={style.product_map__imgs}>
              <img src={this.props.data && this.props.data.images && this.props.data.images[0]} alt="" />
              <img src={this.props.data && this.props.data.images && this.props.data.images[1]} alt="" />
              <img src={this.props.data && this.props.data.images && this.props.data.images[2]} alt="" />
              <img src={this.props.data && this.props.data.images && this.props.data.images[3]} alt="" />
            </div>
          </div>
          <div className={style.product_item_map__main}>
            <h1><strong> Brand:</strong> {this.props.data.brand}</h1>
            <h1><strong>Title:</strong> {this.props.data.title}</h1>
            <h2><strong>Category:</strong> {this.props.data.category}</h2>
            <h3><strong>Description:</strong> {this.props.data.description}</h3>
            <h4><strong>Discount Percentage: </strong> {this.props.data.discountPercentage}</h4>
            <h4><strong>Price: </strong> {this.props.data.price}</h4>
            <h4><strong>Rating:</strong>{this.props.data.rating}</h4>
            <h4><strong>Stock:</strong> {this.props.data.stock}</h4>
          </div>
        </div>
      </>
    );
  }
}

let WithDataContainerComponent = withRouter(Product);
export default WithDataContainerComponent;
