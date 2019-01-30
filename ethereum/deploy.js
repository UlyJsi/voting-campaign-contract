const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'style provide forum brisk forest rabbit amazing ugly civil slow swift ethics',
  'https://rinkeby.infura.io/v3/489003be737f4038bd57b0acc5ae68fb'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Deploying contract from account: ', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({data: '0x'+compiledFactory.bytecode})
    .send({from: accounts[0]});
  
  // console.log(compiledFactory.interface);
  console.log('Contract deployed at: ', result.options.address);
}

deploy();