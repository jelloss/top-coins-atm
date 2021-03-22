import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';


const Td = styled.td`
  border: 1px solid #cccccc;
  width: 16vh;
  
`;


const TdControls = styled(Td)`
  width: 36vw;
`;

const TdName = styled(Td)`
  width: 24vw;
`;

const Button = styled.button`
  font-size: 11px;
  width: 64px;
  margin: 3px 5px 0;
`;



export default function Coin(props) {


    const handleRefresh = (event) => {
      //prevent the default action of submitting
      event.preventDefault();
      props.handleRefresh(props.tickerId);
      }

      const handleBuy = (event) => {
        //prevent the default action of submitting
        event.preventDefault();
        props.handleTransaction(true, props.tickerId);
        }

      const handleSell = (event) => {
        //prevent the default action of submitting
        event.preventDefault();
        props.handleTransaction(false, props.tickerId);
        }


    

    
    return (
      <tr>
          <TdName>{props.name}</TdName>
          <Td>{props.ticker}</Td>
          <Td>${props.price}</Td>
          <Td>{props.showBalance ? props.balance : '-'}</Td>
          <TdControls>
            <form action="#" method="POST">
              <Button className="btn btn-info"onClick={handleRefresh}>
                Refresh
              </Button>
              <Button className="btn btn-warning"onClick={handleBuy}>
                Buy
              </Button>
              <Button className="btn btn-danger"onClick={handleSell}>
                Sell
              </Button>


           
            </form>
            
          </TdControls>

      </tr>
    );
          
};

Coin.propTypes = { 
  name: propTypes.string.isRequired,
  ticker: propTypes.string.isRequired,
  price: propTypes.number.isRequired
};

