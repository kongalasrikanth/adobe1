import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import '../styles/aem-grid.css';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, company, img, info, price, title, inCart } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div className="aem-Grid  aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--10 text-center text-slanted text-blue my-5">
                                </div>
                            </div>
                            <div className="aem-Grid  aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--6 my-3">
                                    <img width={300} src={img} className="img-fluid" alt="product" />
                                </div>
                                <div className=" aem-GridColumn aem-GridColumn--default--6 my-3 text-capitalize">
                                    <ul class="breadcrumb">
                                        <li><a href="#">Clothing</a></li>
                                        <li><a href="#">Women's</a></li>
                                        <li><a href="#">OuterWear</a></li>
                                    </ul>
                                    <h3>{title}</h3>
                                    <h6 className="text-blue">
                                        <strong>
                                            <span>$</span>
                                            {price}
                                        </strong>
                                    </h6>
                                    <p >{info}</p>

                                    <div className='color_width'>
                                        <h5>Color</h5>
                                        <span className='color1'></span>
                                        <span className='color2'></span>
                                        <span className='color3'></span>
                                        <span className='color4'></span>
                                    </div>
                                    <div className='size'>
                                        <h5>Size</h5>
                                        <span >SL</span>
                                        <span >SX</span>
                                        <span >XS</span>
                                        <span >M</span>
                                    </div><br />
                                    <div className='cart_display'>

                                        <Link to="/">
                                            <ButtonContainer>back to products</ButtonContainer>
                                        </Link>
                            <Link to='/cart'>
                                            <ButtonContainer >
                                            go to cart                                              
                                            </ButtonContainer>
                                            </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="aem-Grid  aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--8">
                                <h3>{title}</h3>
                                <h4>Decription</h4>
                                <p>{info}</p>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--4">
                                    <h4>Details</h4>
                                    <div className="aem-Grid  aem-Grid--12">
                                    <div className="aem-GridColumn aem-GridColumn--default--6">
                                        <p>Details</p>
                                        <p>Details</p>
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--6">
                                    <p>Details</p>
                                    <p>Details</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
