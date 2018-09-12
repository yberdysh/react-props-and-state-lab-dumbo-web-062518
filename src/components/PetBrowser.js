import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">{this.props.pets.forEach(pet => <Pet pet={pet}/>)}</div>
  }
}

export default PetBrowser
