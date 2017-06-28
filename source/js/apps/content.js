import { Grid }                             from 'react-bootstrap/lib/';
import { BrowserRouter as Router, Route }   from 'react-router-dom';

import RootConfig                           from '../helpers/routes.config';

class Content extends React.Component {
    render() {
        return (
            <Grid>
                {RootConfig.map((route, index) => (
                    <Route exact key={index} path={route.path} component={route.component} />
                ))}
            </Grid>
        );
    }
}

export default Content;