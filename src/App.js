import React from 'react';
import './App.css';
import productTile from './component/prductTile';

import pic1 from './images/pic1.jpeg'
import pic2 from './images/pic2.jpeg'
import pic3 from './images/pic3.jpeg'
import pic4 from './images/pic4.jpeg'
import pic5 from './images/pic5.jpeg'
import pic6 from './images/pic6.jpg'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cartCount: 0,
            cart: []
        }
    }

    componentDidMount() {
        this.setState({
            firstState: "Welcome to shop"
        })
        this.loadProducts()
    }

    addToCart = (product) => {
        let tmpCart = this.state.cart;

        let found = false;
        tmpCart.some((element) => {
            if (element.id === product.id) {
                found = true;
                return true;
            }
        })
        if (!found) {
            tmpCart.push(product);
            this.setState({
                cart: tmpCart
            });
        }
    }

    loadProducts() {
        fetch('http://my-json-server.typicode.com/shiyasvp92/sample_products/products', {
            method: 'GET'
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data)
                this.setState({
                    products: data
                })
            })
            .catch((error) => {
                console.error(error)
            })

    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <div className='container clearfix'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ "marginTop": "10px" }}>
                        <a className="navbar-brand">
                            <img src="./images/logo.jfif" width="60" height="60" />
                        </a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">

                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> */}
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">{"Cart (" + this.state.cart.length + ")"}</button>
                            </form>
                        </div>
                    </nav>
                    <h3 style={{ "marginTop": "10px" }}>Products</h3>
                    <div className="row">
                        {
                            this.state.products.map((element) => {
                                return (
                                    productTile(element, this.addToCart)
                                )
                            })
                        }
                    </div>
                    <div className="container clearfix">
                        <button className="btn btn-outline-success my-2 my-sm-0 float-right" type="submit" onClick={this.checkoutPressed}>{this.state.checkoutPressed ? "Cancel" : "Checkout"}
                        </button>
                    </div>
                </div >
            </div>
        );
    }

    // cartClicked = (status) => {
    //     let newCount = this.state.cartCount;
    //     if (status)
    //         newCount++;
    //     else
    //         newCount--;
    //     this.setState({
    //         cartCount: newCount
    //     });
    // }

    checkoutPressed = () => {
        this.setState({
            checkoutClicked: true
        });
    }
}
export default App;
