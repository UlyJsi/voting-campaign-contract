import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // in browser & metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // in server || user no using metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/489003be737f4038bd57b0acc5ae68fb'
  );

  web3 = new Web3(provider);
}

export default web3;