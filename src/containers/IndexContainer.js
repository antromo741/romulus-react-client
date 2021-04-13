import React, { Component } from 'react'
import List from '../components/List'
export default class IndexContainer extends Component {


    state = {
        groups: [],
        loading: true,
    }

    componentDidMount() {
      fetch('http://localhost:3001/groups', {
          method: 'get',
          headers: {
              'Accept': 'application/json',
              'contentType': 'application/json'
          }
      })
      .then(res => res.json())
      .then(groupsJson => {
          console.log('groups', groupsJson)
          this.setState({
              groups: groupsJson,
              loading: false
          })
      })
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

