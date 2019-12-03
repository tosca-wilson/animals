import React from 'react'
import { connect } from 'react-redux'
import {addAnimal} from '../actions/animals'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.handleChange =this.handleChange.bind(this)
        this.handleSubmit =this.handleSubmit.bind(this)
    }
    componentDidMount() {

    }
    
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }

    handleSubmit(event) {
        event.preventDefault()
    }


    render() {
        return (
            <React.Fragment>
                <h2>Add a new animal:</h2>
                <form onSubmit={this.handleSubmit}>
                    <section>
                        Name:
                        <input type='text' name='name' onChange={this.handleChange} />
                    </section>

                    <section>
                        Nouns:
                        <input type='text' name='nouns' onChange={this.handleChange} />
                    </section>

                    <section>
                        <button type='submit' onClick={() => this.props.dispatch(addAnimal(this.state))}>Add</button>
                    </section>
                </form>
            </React.Fragment>
        )
    }
}

export default connect()(Form)