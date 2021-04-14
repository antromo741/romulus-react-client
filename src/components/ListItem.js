import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({ group }) => {
    return (
        <li className="" key={group.id}>
            <Link to={`/groups/${group.id}`}>{group.name}</Link>
        </li>
    )
}

export default ListItem