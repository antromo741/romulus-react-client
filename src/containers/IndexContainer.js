import React, { Component } from 'react'
import List from '../components/List'
export default class IndexContainer extends Component {


    state = {
        groups: [],
        loading: true,
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                groups: [
                    { name: 'Anthony'},
                    { name: 'Romo' }
                ],
                loading: false,
            })
        },1000)

    }

    render() {
        return (
            <section className="max-w-6xl mx-auto mt-16">
                {this.state.loading ? (
                    'loading spinner'
                ) : (
                    <List groups={this.state.groups} />
                )}
            </section>
        )
    }
}

