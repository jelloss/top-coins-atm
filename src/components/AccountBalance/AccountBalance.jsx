import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    border: 1px;
    font-size: 2.5rem;
    text-align: start;
    padding: 2rem 3rem 0rem;
    margin: 0px 140px 0px;
    background-color: #1619b6;
`;

const Button = styled.button`
    color: #000000;
    background-color:  #fffafa;
    border-radius: 5px;
    margin: 10px 20px 10px;
    padding: 0.5rem 1rem;
`;




export default function AccountBalance (props) {

    const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
    let content = null;
    if ( props.showBalance ) {
        content = <>Balance: ${props.amount}</>;
    }
    return (
        <Section >
            {content}
            <Button onClick={props.handleBalanceVisibilityChange}>{buttonText}</Button>
            <Button onClick={props.handlestimulus}>Claim 1400 stimulus</Button>
        </Section>
    );
}



AccountBalance.propTypes = { 
    amount: PropTypes.number.isRequired
  }