import React from 'react';
import './App.css';

function App() {
  return (
  <div>
    <div className='container clearfix'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{"marginTop": "10px"}}>
        <a className="navbar-brand" href="https://mail.google.com/mail/u/0/">
            <img src="./images/logo.jfif" width="60" height="60"/>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

            </ul>
            <form className="form-inline my-2 my-lg-0">
                {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> */}
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Cart</button>
            </form>
    </div>
    </nav>
    <h3 style={{"marginTop": "10px"}}>Products</h3>
    <div className="row">
        <div className="col-3">
            <div className="card" style={{"width": "15rem", "margin": "10px"}}>
                <div className="card-body">
                    <div className="row">
                        <img src="./images/pic1.jpeg" height="80" width="80"/>
                        <h5 className="card-title" style={{"marginLeft": "10px"}}>Phones</h5>
                    </div>
                    <div className="text-center" style={{"marginTop": "20px"}}>
                        <button className="btn btn-outline-success my-2 my-sm-0 add-button" type="submit">Add to
                            Cart</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" style={{"width": "15rem", "margin": "10px"}}>
                <div className="card-body">
                    <div className="row">
                        <img src="./images/pic2.jpeg" alt="Smiley face" height="80" width="80"/>
                        <h5 className="card-title" style={{"marginLeft": "10px"}}>Shoes</h5>
                    </div>
                    <div className="text-center" style={{"marginTop": "20px"}}>
                        <button className="btn btn-outline-success my-2 my-sm-0 add-button" type="submit">Add to
                            Cart</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" style={{"width": "15rem", "margin": "10px"}}>
                <div className="card-body">
                    <div className="row">
                        <img src="./images/pic3.jpeg" alt="Smiley face" height="80" width="80"/>
                        <h5 className="card-title" style={{"marginLeft": "10px"}}>Watches</h5>
                    </div>
                    <div className="text-center" style={{"marginTop": "20px"}}>
                        <button className="btn btn-outline-success my-2 my-sm-0 add-button" type="submit">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
            );
          }
          
          export default App;
