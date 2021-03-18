import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';


const Td = styled.td`
  //Names, Tickers, Prices, Balances
  border: 2px solid #cccccc;
  padding: 0rem 4rem 0rem;
  border-radius: 10px;
  background-color: #0004f7;
  
`;

const Button = styled.button`
//refresh
  color: #ffffff;
  background-color: #0004f7;
  border-radius: 5px;
`;

const BUtton = styled.button`
  //buy
  color: #000000;
  background-color: #19ff05;
  border-radius: 5px;
`;

const BUTton = styled.button`
  //sell
  color: #000000;
  background-color: #ff0505;
  border-radius: 5px;
`;

const BUTTON = styled.button`
  //Chart
  color: #000000;
  background-color: #adadad;
  border-radius: 5px;
`;

const TD = styled.td`
  background-color: #000000;
`;


export default function Coin(props) {


    const handleClick = (event) => {
      //prevent the default action of submitting
      event.preventDefault();
      props.handleRefresh(props.tickerId);
      }

    const handleBuy = (event) => {
      event.preventDefault();
      props.handleBuySell(true, props.tickerId);
    }
    
    const handleSell = (event) => {
      event.preventDefault();
      props.handleBuySell(false, props.tickerId);
    }
    
    const handleChart = (event) => {
      event.preventDefault();
      props.handleChartDisplay(props.tickerId);
    }
    

    
    return (
      <tr>
          <Td>{props.name}</Td>
          <Td>{props.ticker}</Td>
          <Td>${props.price}</Td>
          {props.showBalance ? <Td>{props.balance}</Td> : null}
          <TD>
            <form action="#" method="POST">

            <BUtton onClick={handleBuy}>
                BUY
              </BUtton>

              <BUTton onClick={handleSell}>
                SELL
              </BUTton>

              <Button onClick={handleClick}>
                REFRESH
              </Button>

              <BUTTON onClick={handleChart}>
                CHART
              </BUTTON>
           
            </form>
            
          </TD>

      </tr>
    );
          
};

Coin.propTypes = { 
  name: propTypes.string.isRequired,
  ticker: propTypes.string.isRequired,
  price: propTypes.number.isRequired
};

