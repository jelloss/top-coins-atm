import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    border: 1px;
    font-size: 2rem;
    text-align: start;
    padding: 2rem 3rem 0rem;
    margin: 0px 140px 0px;
`;

const Button = styled.button`
    color: #ffffff;
    background-color: #0004f7;
    border-radius: 10px;
    margin: 10px 20px 10px;

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
            <Button>helicoptermoney!!!</Button>
        </Section>
    );
}



AccountBalance.propTypes = { 
    amount: PropTypes.number.isRequired
  }