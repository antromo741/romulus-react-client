import React from 'react'
const ListItem = ({ group}) => {
    return (
        <li className="" key={group.id}>
        {group.name}
        </li>
    )
}
export default ListItem