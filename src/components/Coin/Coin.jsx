import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';


const Td = styled.td`
  border: 1px solid red;
  padding: 0.5rem 3rem 0.5rem;
`;


export default class Coin extends Component {
  constructor(props){
    super(props);
    this.state = {
        price: this.props.price 
    }
    this.handleClick = this.handleClick.bind(this);
  }
    handleClick(event){
      //prevent the default action of submitting
      event.preventDefault();

      const randomPercentage = 0.995 + Math.random() * 0.01;

        this.setState( function(oldState) {
          return{
            price: oldState.price * randomPercentage
          };
        });
      }
    render() {
        return (
          <tr>
              <Td>{this.props.name}</Td>
              <Td>{this.props.ticker}</Td>
              <Td>{this.state.price}</Td>
              <Td>
                <form action="#" method="POST">
                  <button onClick={this.handleClick }>Refresh</button>
                </form>
                
              </Td>

          </tr>
        );
      }
    }

Coin.propTypes = { 
  name: propTypes.string.isRequired,
  ticker: propTypes.string.isRequired,
  price: propTypes.number.isRequired
}

