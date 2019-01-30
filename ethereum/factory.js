import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  ' 0x4E33EEcAE9569d4f4AbcdA6b4f25FaE2f9CbE68C'
);

export default instance;