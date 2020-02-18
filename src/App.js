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
            firstState: 'Helloworld',
            cartitem: [
                {
                    num: 'id1',
                    Item: 'Phone',
                    carted: false,
                    pic: pic1
                },
                {
                    num: 'id2',
                    Item: 'Shoe',
                    carted: false,
                    pic: pic2
                },
                {
                    num: 'id3',
                    Item: 'Phone',
                    carted: false,
                    pic: pic3
                },
                {
                    num: 'id4',
                    Item: 'Phone',
                    carted: false,
                    pic: pic4
                }
            ],
            cartCount: 0
        }
    }
    componentDidMount() {
        this.setState({
            firstState: "Welcome to shop"
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
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">{"Cart (" + this.state.cartCount + ")"}</button>
                            </form>
                        </div>
                    </nav>
                    <h3 style={{ "marginTop": "10px" }}>Products</h3>
                    <div className="row">
                        {productTile(this.state.cartitem[0], this.cartClicked)}
                        {productTile(this.state.cartitem[1], this.cartClicked)}
                        {productTile(this.state.cartitem[2], this.cartClicked)}
                        {productTile(this.state.cartitem[3], this.cartClicked)}
                    </div>
                    <div className="container clearfix">
                        <button className="btn btn-outline-success my-2 my-sm-0 float-right" type="submit" onClick={this.checkoutPressed}>{this.state.checkoutPressed ? "Cancel" : "Checkout" }
                        </button>
                        {
                            // this.state.cartitem.map((element, index) => {
                            //     return (
                            //         <h3>{element.num}</h3>
                            //     );
                            // })
                        }
                    </div>
                </div >
            </div>
        );
    }

    cartClicked = (status) => {
        let newCount = this.state.cartCount;
        if (status)
            newCount++;
        else
            newCount--;
        this.setState({
            cartCount: newCount
        });
    }

    checkoutPressed = () => {
        this.setState({
            checkoutClicked: true
        });
    }
}
export default App;
