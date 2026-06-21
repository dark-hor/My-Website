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
    Product:IProduct
};
class ShoppingCart extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            Product:{
                sno : 'AA101',
                name:'MI Watch',
                image:'data:image/jpeg;base64,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',
                price : 1500,
                qty: 2
                
            }
        }
    }

    IncrQty = () => {
        this.setState({
            Product : {
                ...this.state.Product,
                qty: this.state.Product.qty + 1
            }
        })
    };

    DecrQty = () =>{
        this.setState({
            Product:{
                ...this.state.Product,
                qty: this.state.Product.qty - 1
            }
        })
    };

    render() {
        let {Product} = this.state
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
                                        <tr>
                                            <td>{Product.sno}</td>
                                            <td><img src={Product.image} width="70" height="70" alt="" /></td>
                                            <td>{Product.name}</td>
                                            <td>&#8377; {Product.price.toFixed(2)}</td>
                                            <td>
                                                <i className=' fa fa-minus-circle mx-1' onClick={this.DecrQty}/>
                                                {Product.qty}
                                                <i className='fa fa-plus-circle mx-1' onClick={this.IncrQty}/>
                                                </td>
                                            <td>{Product.price * Product.qty}</td>
                                        </tr>
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
export default ShoppingCart;