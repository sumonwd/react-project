import React, { Component } from 'react';
import {Button} from 'reactstrap'

class Checkout extends Component {

    state = {
        values: {
            deliveryAddress: "",
            phone: "",
            paymentType: "Cash On Delivery",
        }
    }
    goBack = () => {
        this.props.history.goBack("/")
    }
    inputChangerHandler = (e) => {
        this.setState({
            values: {
                ...this.state.values,
                [e.target.name]: e.target.value,
            }
        })
    }

    submitHandler = () => {
        console.log(this.state.values);
    }
    render() {
        return (
            <div>
                <form style={{ 
                    border: "1px solid grey",
                    boxShadow: "1px 1px #888888",
                    borderRadius: "5px",
                    padding: "20px"
                     }} 
                     >
                    <textarea 
                    name="deliveryAddress"
                    className="form-control" 
                     value={this.state.values.deliveryAddress}
                     placeholder="Your Address"
                     onChange={(e)=>this.inputChangerHandler(e)}
                     ></textarea>
                    <br />
                    <input 
                    name="phone" 
                    className="form-control" 
                    value={this.state.values.phone}
                    placeholder="Your Phone"
                    onChange={(e)=>this.inputChangerHandler(e)}
                    />
                    <br />
                    <select 
                    name="paymentType" 
                    className="form-control" 
                    value={this.state.values.paymentType}
                    onChange={(e)=>this.inputChangerHandler(e)}
                    >
                        <option value="Cash On Delivery">Cash On Delivery</option>
                        <option value="BKash">BKash</option>
                    </select>
                    <br/>
                    <Button onClick={this.submitHandler} style={{ backgroundColor: '#d70f64' }} className="mr-auto" >Place Order</Button>
                    <Button color="secondary" className="ml-1" onClick={this.goBack} >Cancel</Button>
                </form>
            </div>
        )
    }
}
export default Checkout;