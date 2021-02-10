import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';


const Td = styled.td`
  border: 1px solid #cccccc;
  padding: 0.5rem 3rem 0.5rem;
`;


export default class Coin extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

    handleClick(event) {
      //prevent the default action of submitting
      event.preventDefault();

      this.props.handleRefresh(this.props.ticker);
      }
      
    render() {
        return (
          <tr>
              <Td>{this.props.name}</Td>
              <Td>{this.props.ticker}</Td>
              <Td>{this.props.price}</Td>
              {this.props.showBalance ? <Td>{this.props.balance}</Td> : null}
              <Td>
                <form action="#" method="POST">
                  <button onClick={this.handleClick}>Refresh</button>
                </form>
                
              </Td>

          </tr>
        );
      }
};

Coin.propTypes = { 
  name: propTypes.string.isRequired,
  ticker: propTypes.string.isRequired,
  price: propTypes.number.isRequired
};

