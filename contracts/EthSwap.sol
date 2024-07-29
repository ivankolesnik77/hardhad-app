pragma solidity 0.8.19; // SPDX-License-Identifier: UNLICENSED
import "./Token.sol";

import "hardhat/console.sol";

contract EthSwap {
   address payable public owner;
   string public title = "EthSwap Instant Exchange";
   uint public rate = 100;
   Token public tokenToSwap;

   event TokenPurchased(
        address account,
        address token,
        uint amount,
        uint rate
   );

    event TokenSold(
        address account,
        address token,
        uint amount,
        uint rate
   );

   constructor(Token _token) payable {
        tokenToSwap = _token;
        owner = payable(msg.sender);
   }

   function buyToken() public payable {
       uint totalAmount = msg.value * rate;


        console.log('Transfer: ', msg.sender," ", totalAmount);
       tokenToSwap.transfer(msg.sender, totalAmount);

       emit TokenPurchased(msg.sender, address(tokenToSwap), totalAmount, rate);
   }

   function sellToken(uint _amount) public  {
       uint etherToSend = _amount / rate;
    
      
       tokenToSwap.transferFrom(address(tokenToSwap), msg.sender, etherToSend);

       payable(msg.sender).transfer(etherToSend);
       emit TokenSold(msg.sender, address(tokenToSwap), _amount, rate);
   }
}