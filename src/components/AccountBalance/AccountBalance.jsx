import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    font-size: 2rem;
    text-align: left;
    padding: 2rem 3rem 0rem;
`;


export default class AccountBalance extends Component {
    render() {
        return (
            <Section >
             Balance: ${this.props.amount}   
            </Section>
        );
    }
}

AccountBalance.propTypes = { 
    amount: PropTypes.number.isRequired
  }