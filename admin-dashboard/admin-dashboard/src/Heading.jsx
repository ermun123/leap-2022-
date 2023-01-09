import React, { useState } from 'react';
import { SlPlus, SlWrench } from "react-icons/sl";
import Button from 'react-bootstrap/Button';
export default function Heading({ title, handleShow }) {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center my-3">
                <div>
                    <h1>{title}</h1>
                </div>
                <div>
                    <Button variant="primary" size="sm" onClick={handleShow}>
                        Create<SlPlus className="ms-2" />
                    </Button>
                </div>
            </div>
        </>)

}

