import { Grid } from 'react-bootstrap/lib/';
import { BrowserRouter as Router, Route, Switch, withRouter, Link } from 'react-router-dom';
import RootConfig from '../helpers/routes.config';
import Home from '../sections/home';

class Content extends React.Component {
    render() {
        return (
            <Grid>
                <Route exact path="/" component={Home}/>
                {RootConfig.map((route, index) => (
                    <Route key={index} path={route.path} component={route.component} />
                ))}
            </Grid>
        );
    }
}

export default Content;