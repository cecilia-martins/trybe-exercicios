import React from 'react';
import catalog from '../data';
import TvShow from './TvShow';

class TvList extends React.Component {
  render() {
    return(
      <section>
       {catalog.map((tvShow) => {
        return <TvShow cadaSerie={tvShow} />
      })} 
      </section>
    );
  }
}

export default TvList;