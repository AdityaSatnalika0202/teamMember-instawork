import React from 'react'

import { AddPage,EditPage,ListPage } from './containers'
import { useSelector } from "react-redux";


const App = () => {
    const screen = useSelector(state => state.screen);
 
    console.log(screen)
    if (screen === "list")
        return (<div style={{margin:"auto"}}><ListPage /> </div>)
    if (screen === "add")
        return (<div style={{margin:"auto"}}><AddPage /></div>)
    
        return (<div style={{margin:"auto"}}><EditPage /></div>)


}

export default App
