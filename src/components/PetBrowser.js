import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  petMapper(){
    return this.props.pets.map((pet)=>{
      return <Pet pet={pet} getsAdopted={this.props.getsAdopted}/>
    })
  }

  render() {
    return (<div className="ui cards">
      {this.petMapper()}
    </div>
    )
  }
}

export default PetBrowser
