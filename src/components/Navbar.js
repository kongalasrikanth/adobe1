import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import search from '../images/search.jpg';
import user from '../images/user.jpg';
// import '../src/index.css';
import shop from '../images/shopping-bag.jpg';

export default class Navbar extends Component {
    render() {
        return (
           
<div className='container'>
            <div class="aem-Grid aem-Grid--12">
                <div class="aem-GridColumn aem-GridColumn--default--3">
                    <div>
                        <h4>VENIA</h4>
                    </div>
                </div>
                <div class="aem-GridColumn aem-GridColumn--default--5">
                    <div className='Nav'>
                        <ul className='Navbar_one'>
                            <li><a href="">Women</a></li>
                            <li><a href="">Men</a></li>
                            <li><a href="">Smart Gear</a></li>
                            <li><a href="">Accessories</a></li>
                        </ul>
                    </div>
                </div>
                <div class="aem-GridColumn aem-GridColumn--default--4">
                    <div className='navSearch'>
                        <ul className='Navbar_two'>
                            <img src={search} />
                            <li><a href="">Search</a></li>
                            <img src={user} />
                            <li><a href="">Sign in</a></li>
                            <img src={shop} />
                        </ul>
                    </div>
                </div>
            </div>
        </div>

     )
    }
}
