import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, Button } from 'reactstrap'
const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]
const BuildControl = props => {
    return (
        <div className="d-flex mb-2">
            <div className="mr-auto ml-5" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{props.label}</div>

            <button onClick={props.removed} className="btn btn-danger btn-sm m-1">Less</button>
            <button onClick={props.added} className="btn btn-success btn-sm">More</button>
        </div>
    )
}
const Controls = props => {
    return (
        <div className="container ml-md-5" style={{ textAlign: 'center' }}>

            <Card style={{
                marginTop: '30px',
                marginBottom: '30px',
                textAlign: 'center'
            }}>
                <CardHeader style={{
                    backgroundColor: '#d70f64',
                    color: '#fff'
                }}><h4>Add Ingredients</h4></CardHeader>
                <CardBody>
                    {
                        controls.map(item => {
                            return <BuildControl
                                label={item.label}
                                type={item.type}
                                key={Math.random()}
                                added={()=>props.ingredientAdded(item.type)}
                                removed={()=>props.ingredientRemoved(item.type)}
                            />
                        })
                    }
                </CardBody>
                <CardFooter><h5>Price: <strong>{props.price}</strong>BDT</h5></CardFooter>
                <Button onClick={props.toggleModal} disabled={!props.purchasable}>Order Now</Button>
            </Card>
        </div>
    )
}

export default Controls;