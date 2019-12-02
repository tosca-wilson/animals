import React from 'react'
import { connect } from 'react-redux'
import Animals from './Animals'
import { fetchAnimals } from '../actions/animals'

class App extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.dispatch(fetchAnimals())
  }

  render(){
    return (
      <div>
      <Animals />
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {} 
}

export default connect(mapStateToProps)(App)