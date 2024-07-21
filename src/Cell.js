import React from 'react'

const Cell = ({cellData}) => {
    return (
        <td>
            {JSON.stringify(cellData)}
        </td>
    )
}

export default Cell
