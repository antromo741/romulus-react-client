import React from 'react';
import ListItem from './ListItem';

const List = ({ groups }) => {
    return (
        <>
        <h1>List</h1>
        <ul>
            {groups.map((group) => (
                <ListItem key={group.id} group={group} />
            ))}
        </ul>
        </>
    )
}
export default List