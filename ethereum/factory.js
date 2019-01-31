import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xbd5784cF22dC005BDe30cC4473484E20bb84D3a1'
);

export default instance;