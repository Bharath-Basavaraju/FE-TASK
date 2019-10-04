import React from 'react';
import { connect } from 'react-redux';
import * as styles from '../resources/css/style.scss';
import * as actions from '../actions/feActions';
import { Dropdown, Segment } from 'semantic-ui-react';
import { getProductList, getBandOption, getSubBandOption } from '../utils/helperFunction';

export class ProductContainer extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchData();
    }

    render() {
        let productOption = (this.props.productList) ? getProductList(this.props.productList): [];
        let bandOption = (this.props.selectedProduct) ? getBandOption(this.props.selectedProduct) : [];
        let subBandOption = (this.props.selectedProduct) ? getSubBandOption(this.props.selectedProduct) : [];        
        return (
            <Segment>
                {this.props.apiFailed ?
                    <p>Sorry Data is not avilable right now</p>
                    :
                    <div>
                        <Dropdown placeholder='Product'selection options={productOption} onChange={this.props.productChange} value={this.props.selectedProduct}></Dropdown>
                        <Dropdown placeholder='Bands' selection options={bandOption} onChange={this.props.bandChange} value={this.props.selectedBand}></Dropdown>
                        <Dropdown placeholder='Sub Bands' selection options={subBandOption} onChange={this.props.subBandChange} value={this.props.selectedSubBand}></Dropdown>
                    </div>
                }
            </Segment>
        );
    }
}
export default connect(
    (store, ownProps)=>{
        return{
            store : store,
            apiFailed: store.get("apiFailed"),
            productList : store.get("productList"),
            selectedProduct: store.get("selectedProduct"),
            selectedBand: store.get("selectedBand"),
            selectedSubBand: store.get("selectedSubBand"),
            ...ownProps
        }
    },
    (dispatch)=>{
        return{
            fetchData: () => {
              dispatch(actions.fetchData());
            },
            productChange:(e,obj) => {
                dispatch(actions.setProduct(obj.value));
            },
            bandChange:(e,obj) => {
                dispatch(actions.setBand(obj.value));
            },
            subBandChange:(e,obj) => {
                dispatch(actions.setSubBandt(obj.value));
            }
        }
    }
)(ProductContainer);