import React from 'react'
import {useSelector} from "react-redux";

import {AddPage, EditPage, ListPage} from './containers'

const App = () => {
    const screen = useSelector(state => state.screen);
    if (screen === "list")
        return (<div style={{margin: "auto"}}><ListPage/></div>)
    if (screen === "add")
        return (<div style={{margin: "auto"}}><AddPage/></div>)

    return (<div style={{margin: "auto"}}><EditPage/></div>)


}

export default App
