import React, { Component } from 'react'

export default class ShowContainer extends Component {
    state = {
        group: {},
        events: [],
        loading: true,
    }

    componentDidMount() {
        const groupId = this.props.match.params.groupId
        fetch(`http://localhost:3001/groups/${groupId}`)
            .then((res) => res.json())
            .then(({ group, events }) => {
                this.setState({
                    group,
                    events,
                    loading: false,
                })
            })
    }

    render() {
        if (this.state.loading) {
            return <div>Loading Spinner</div>
        }
        return (
            <section className="max-w-6xl w-11/12 mx-auto mt-16">
                <h1 className="text-3xl font-bold text-center">
                    {this.state.group.name}
                </h1>
                <div className="grid grid-cols-3">
                    {this.state.events.map((event) => (
                        <figure>
                            <img className="" alt={event.name} src={event.poster_url} />
                            <h2>{event.name}</h2>
                            <p>{event.start_time}</p>
                            <p>{event.end_time}</p>
                            <p>{event.location}</p>
                            {/* Later we'll add a spoiler here to show the description */}
                        </figure>
                    ))}
                </div>
            </section>
        )
    }
}