// import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function Router() {
    return (
        <div className='main-app'>
            <Router>
                {/* content to be here to route the page */}
                <Route path={'/'} component={homepage}/>
                <Route path={'/contact'} component={contactPage}/>
            </Router>
        </div>
    )
}

export default Router

