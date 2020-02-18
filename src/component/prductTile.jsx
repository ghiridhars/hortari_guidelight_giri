import React from 'react';

export default function productTile(item, callback) {
    return (
        <div className="col-3" key={item.id}>
            <div className="card" style={{ "width": "15rem", "margin": "10px" }}>
                <div className="card-body">
                    <div className="row">
                        <img src={item.image} height="80" width="80" />
                        <h5 className="card-title" style={{ "marginLeft": "10px" }}>{item.title}</h5>
                    </div>
                    <div className="text-center" style={{ "marginTop": "20px" }}>
                        <button className="btn btn-outline-success my-2 my-sm-0 add-button" type="submit" onClick={() => {
                            callback(item);
                        }}>{false ? "Remove" : "Add to cart"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}