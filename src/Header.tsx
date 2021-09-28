import React, { ReactElement } from 'react'

export default function Header(): ReactElement {
    return (
        <div className="header-title">
            <h1>My Todos</h1>
            <h4>Create, edit, and remove Todos to help track your current Tasks</h4>
        </div>
    )
}
