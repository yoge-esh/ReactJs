import {BrowserRouter as Router, Route} from 'react-router-dom'

function C_Router() {
  return <div>
       <Router>
                {/* content to be here to route the page */}
                <Route path={'/'} component={homepage}/>
                <Route path={'/contact'} component={contactPage}/>
            </Router>
  </div>;
}

export default C_Router;
