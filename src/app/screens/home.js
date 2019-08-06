import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Typography variant="h5">
          Ficha de Acolhimento Permanente
        </Typography>
        <Typography variant="h6">
          Casa de Apoio São Francisco Muzambinho/MG
        </Typography>
      </div>
    );
  }
}
