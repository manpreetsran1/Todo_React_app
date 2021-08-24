import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import {useState }from 'react';

export default function AddTodo(props) {
    const [title, settitle] = useState('');
    const [desc, setdesc] = useState('');

    const AddTodoo = (e) =>{
        e.preventDefault();

        if(!title || !desc){
            alert("Title or des is blank");
        }
        else{
        props.addtodo(title, desc);

        settitle('');
        setdesc('');
    }

    }

    return (
        <div>
            <Container>
                <Form inline onSubmit={AddTodoo}>
                    <FormGroup>
                        <Label for="exampleEmail" hidden>title</Label>
                        <Input type="text" id="title" value={title} onChange={(e) =>{settitle(e.target.value)}} />
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <Label for="examplePassword" hidden>desc</Label>
                        <Input type="text" value={desc} onChange={(e) =>{setdesc(e.target.value)}} id="desc"  />
                    </FormGroup>
                    {' '}
                    <Button>Submit</Button>
                </Form>
            </Container>
        </div>
    )
}
