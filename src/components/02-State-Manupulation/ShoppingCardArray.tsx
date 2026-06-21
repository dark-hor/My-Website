import React from 'react';
interface IProduct {
    sno: string,
    image: string,
    name: string,
    price: number,
    qty: number
}
interface IProps { };
interface IState {
    Product: IProduct[]
};

class ShoppingArr extends React.Component<IProps, IState> {
    /**
     *
     */
    constructor(props: IProps) {
        super(props);
        this.state = {
            Product: [
                { sno: 'AA101', name: 'MI Watch', image: 'https://www.sathya.store/img/product/qDJ58YIJyfMMYQXw.png', price: 1500, qty: 1 },
                { sno: 'AA102', name: 'Apple watch', image: 'https://www.sathya.store/img/product/qDJ58YIJyfMMYQXw.png', price: 1500, qty: 1 },
                { sno: 'AA103', name: 'xiomi Watch', image: 'https://www.sathya.store/img/product/qDJ58YIJyfMMYQXw.png', price: 1500, qty: 1 },
                { sno: 'AA104', name: 'samsung Watch', image: 'https://www.sathya.store/img/product/qDJ58YIJyfMMYQXw.png', price: 1500, qty: 1 },
                { sno: 'AA105', name: 'lunar Watch', image: 'https://www.sathya.store/img/product/qDJ58YIJyfMMYQXw.png', price: 1500, qty: 1 }

            ]
        };

    };

    //   IncrQty = () => {
    //     this.setState({
    //         Product : {
    //             ...this.state.Product,
    //             qty: this.state.Product.qty + 1
    //         }
    //     })
    // };

    // DecrQty = () =>{
    //     this.setState({
    //         Product:{
    //             ...this.state.Product,
    //             qty: this.state.Product.qty - 1
    //         }
    //     })
    // };

    render() {
        let { Product } = this.state
        return (
            <React.Fragment>
                <div className="section mt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="h3">Product Item</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptatibus temporibus a, facilis ratione facere dolore sunt dicta quaerat, voluptatum, consequatur accusamus est fuga vitae atque! Voluptates architecto error exercitationem?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section mt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <table className='table table-hover table-stripped'>
                                    <thead className='bg-success text white'>
                                        <tr>
                                            <th>Sno</th>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Product.map(product => {
                                                return (
                                                    <tr>
                                                        <td>{product.sno}</td>
                                                        <td><img src={product.image} width="70" height="70" alt="" /></td>
                                                        <td>{product.name}</td>
                                                        <td>&#8377;{product.price.toFixed(2)}</td>
                                                        <td>{product.qty}</td>
                                                        <td>&#8377;{(product.price * product.qty).toFixed(2)}</td>
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
}
export default ShoppingArr;