import React, { Component } from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
    margin: 15px auto 127px auto;
    display: inline-block;
    font-size: 1.5rem;     
    background-color: #000000;               
`;

export default function CoinList (props) {

        return (
            <Table>
            <thead>
                <tr>
                  <th>Name</th>
                  <th>Ticker</th>
                  <th>Price</th>
                  {props.showBalance ? <th>Balance</th> : null}
                </tr>
            </thead>
            <tbody>
              {
                props.coinData.map( ({key, name, ticker, price, balance, handleBuySell, handlestimulus }) => 
                  <Coin 
                        handleBuySell={props.handleBuySell}
                        key={key} 
                        handleRefresh={props.handleRefresh} 
                        name={name} 
                        ticker={ticker} 
                        showBalance={props.showBalance}
                        balance={balance}
                        price={price} 
                        tickerId={key} 
                        handlestimulus={balance}/>
                )
              }
         
            </tbody>
          </Table>
        )
    
}
