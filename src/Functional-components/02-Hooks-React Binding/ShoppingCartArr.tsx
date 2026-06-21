import React,{useState} from 'react';
interface IProduct {
    sno: string,
    image: string,
    name: string,
    price: number,
    qty: number
}
interface IProps{};
interface IState{
    Product : IProduct[]
};

let ShoppingArrH : React.FC<IProps>=()=>{
    let[shoppingState, setShoppingState] = useState<IState>({
       Product: [
                { sno: 'AA101', name: 'MI Watch', image: 'https://www.sathya.store/img/product/qDJ58YIJyfMMYQXw.png', price: 1500, qty: 1 },
                { sno: 'AA102', name: 'Apple watch', image: 'https://www.sathya.store/img/product/qDJ58YIJyfMMYQXw.png', price: 1500, qty: 1 },
                { sno: 'AA103', name: 'xiomi Watch', image: 'https://www.sathya.store/img/product/qDJ58YIJyfMMYQXw.png', price: 1500, qty: 1 },
                { sno: 'AA104', name: 'samsung Watch', image: 'https://www.sathya.store/img/product/qDJ58YIJyfMMYQXw.png', price: 1500, qty: 1 },
                { sno: 'AA105', name: 'lunar Watch', image: 'https://www.sathya.store/img/product/qDJ58YIJyfMMYQXw.png', price: 1500, qty: 1 }
            ]
    });

    return(
        <React.Fragment>
          <div className="section mt-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Product Items</h3>
                        <p className="h3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime eos fuga illo aliquid, blanditiis nihil officiis? Quidem omnis velit odio, rerum sapiente fugiat voluptatum dicta nesciunt modi repellendus unde accusamus.</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="section mt-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className='table table-hover table-stripped'>
                            <thead className='bg-success text-white'>
                                <tr>
                                    <th>Sno</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                  {
                                    shoppingState.Product.map(product =>{
                                        return(
                                            <tr>
                                                <td>{product.sno}</td>
                                                <td><img src={product.image} width="70" height="70" alt="" /></td>
                                                <td>{product.name}</td>
                                                <td>&#8377;{product.price.toFixed(2)}</td>
                                                <td>{product.qty}</td>
                                            </tr>
                                        )
                                    })
                                  }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </div>
        </React.Fragment>
    )
}
export default ShoppingArrH;