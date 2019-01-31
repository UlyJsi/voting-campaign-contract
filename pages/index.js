import React from 'react';
import factory from '../ethereum/factory';

export default class CampaignsList extends React.Component {

  static async getInitialProps(props) {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns }
  }

  render() {console.log(this.props)
    return(
      <h1>List</h1>
    )
  }
}