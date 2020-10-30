import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

function Submit(props) {

    const [data, setData] = useState({ name: '', address: '', state: '', city: '', zipcode: '' })

    function checkInput(e) {
        e.preventDefault();
        props.changeSubmit(data)
    }

    function setFormData(e) {
        // console.log(data)
        let tempData = data;
        tempData[e.target.id] = e.target.value
        setData({...tempData})
    }

    return (
        <Form onSubmit={checkInput}>
            <FormGroup>
                <Label>Name:</Label>
                <Input id='name' placeholder='name' value={data.name} onChange={setFormData}></Input>
            </FormGroup>
            <FormGroup>
                <Label>Shipping street address:</Label>
                <Input id='address' placeholder='address' value={data.address} onChange={setFormData}></Input>
            </FormGroup>
            <FormGroup>
                <Label>State:</Label>
                <Input id='state' placeholder='state' value={data.state} onChange={setFormData}></Input>
            </FormGroup>
            <FormGroup>
                <Label>City:</Label>
                <Input id='city' placeholder='city' value={data.city} onChange={setFormData}></Input>
            </FormGroup>
            <FormGroup>
                <Label>Zip Code:</Label>
                <Input id='zipcode' placeholder='zip code' value={data.zipcode} onChange={setFormData}></Input>
            </FormGroup>
            <Button type='submit'>Submit</Button>
        </Form>
    );
}

export default Submit;
