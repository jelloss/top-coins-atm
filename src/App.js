import React from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance'
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';

const Div = styled.div`
  text-align: center;
  background-color: rgb(20, 56, 97);
  color: #cccccc;

`;

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        balance: 10000,
        coinData:[
          {
            key: uuidv4(),
            name: "Bitcoin",
            ticker: "BTC",
            price: 9999.99
          },
          {
            key: uuidv4(),
            name: "Ethereum",
            ticker: "ETH",
            price: 299.99
          },
          {
            key: uuidv4(),
            name: "Tether",
            ticker: "USDT",
            price:  1.0
          },
          {
            key: uuidv4(),
            name: "Ripple",
            ticker: "XRP",
            price:  0.2
          },
          {
            key: uuidv4(),
            name: "Bitcoin cash",
            ticker: "BCH",
            price:  298.99
          }


        ]
      }
  }
  render(){
    return (
      <Div className="App">
        <ExchangeHeader />
        <AccountBalance amount={this.state.balance}/>
        <CoinList coinData={this.state.coinData} />
      </Div>
    );

  }
 
}

export default App;
