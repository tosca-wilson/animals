import React from 'react'
import { connect } from 'react-redux'
// import { fetchAnimals } from '../actions/animals'


class Animals extends React.Component {
    // constructor(props) {
        // super(props)
        // this.state = {
        //     animals: {}
        // }
    // }

    componentDidMount() {
        // console.log('componenetDidMount')
        // this.props.dispatch(fetchAnimals())
    }

    render() {
        const animalsInfo = this.props.animals
        console.log(animalsInfo)


        return (
            <>
                <h1>List of animals</h1>
                {animalsInfo.map((animal) => {
                    console.log(animal.nouns)
                    return (
                        <ul>
                            <li>{animal.name}</li>
                            <li>{animal.nouns}</li>
                        </ul>
                    )
                })}
            </>

        )
    }
}

const mapStateToProps = (state) => {
    return { animals: state.animals }
}

export default connect(mapStateToProps)(Animals)