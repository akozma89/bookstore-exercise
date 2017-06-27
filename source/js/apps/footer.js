import { Grid } from 'react-bootstrap/lib/';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <Grid>
                    <ul>
                        <li>
                            <a href="https://github.com/kala89" target="_blank">GitHub</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/árpád-kozma-b56674114" target="_blank">LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/arpad.kozma.3" target="_blank">Facebook</a>
                        </li>
                        <li>
                            <a href="mailto:arpadkozma89@gmail.com">Mail</a>
                        </li>
                    </ul>
                </Grid>
            </footer>
        );
    }
}

export default Footer;