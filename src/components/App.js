import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (newType) => {
    this.setState({
      filters: {
        type: newType
      }
    })
  }

  onFindPetsClick = () => {
    if (this.state.filters.type === 'all'){
      fetch('/api/pets').then((res)=>
      res.json()
      ).then((pets)=>{
        this.setState({
          pets: pets
        })
      })

    } else{
      fetch(`/api/pets?type=${this.state.filters.type}`).then((res)=>
      res.json()
      ).then((pets)=>{
        this.setState({
          pets: pets
        })
      })
    }
  }

  getsAdopted = (id) => {
    this.setState({
      pets:this.state.pets.map((pet) => {
        if (pet.id == id){
          return {...pet, isAdopted: true}
        }else{
          return pet
        }
      })
    })
    

    
    // this.setState({
    //   pets
    // })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} getsAdopted={this.getsAdopted}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
