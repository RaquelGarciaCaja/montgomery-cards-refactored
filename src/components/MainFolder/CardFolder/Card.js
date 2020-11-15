import React from 'react';
import '../Main.scss';
import CardsFill from '../CardFolder/../../../components/AppFolder/CardsFolder/CardsFill';
import Design from '../../AppFolder/DesignFolder/Design';
import Share from '../././../AppFolder/ShareFolder/Share';

class Card extends React.Component {
  render() {
    return (
      <form class="form">
        <Design></Design>
        <CardsFill></CardsFill>
        <Share></Share>
      </form>
    );
  }
}

export default Card;