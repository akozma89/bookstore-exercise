import {Row, Col, Panel} from 'react-bootstrap/lib/';
import BookCarousel from '../common/carousel';

class Cart extends React.Component {
    render() {
        return (
            <div>
                <BookCarousel />
                <Row>
                    <Col xs={12}>
                        <Panel header={'I hope you will find what you want'}>
                            <p>He moonlight difficult engrossed an it sportsmen. Interested has all devonshire difficulty
                                gay assistance joy. Unaffected at ye of compliment alteration to. Place voice no arise along
                                to. Parlors waiting so against me no. Wishing calling are warrant settled was luckily.
                                Express besides it present if at an opinion visitor.</p>

                            <p>Forfeited you engrossed but gay sometimes explained. Another as studied it to evident. Merry
                                sense given he be arise. Conduct at an replied removal an amongst. Remaining determine few
                                her two cordially admitting old. Sometimes strangers his ourselves her depending you boy.
                                Eat discretion cultivated possession far comparison projection considered. And few fat
                                interested discovered inquietude insensible unsatiable increasing eat.</p>

                            <p>How promotion excellent curiosity yet attempted happiness. Gay prosperous impression had
                                conviction. For every delay death ask style. Me mean able my by in they. Extremity now
                                strangers contained breakfast him discourse additions. Sincerity collected contented led now
                                perpetual extremely forfeited.</p>

                            <p>Acceptance middletons me if discretion boisterous travelling an. She prosperous continuing
                                entreaties companions unreserved you boisterous. Middleton sportsmen sir now cordially ask
                                additions for. You ten occasional saw everything but conviction. Daughter returned quitting
                                few are day advanced branched. Do enjoyment defective objection or we if favourite. At
                                wonder afford so danger cannot former seeing. Power visit charm money add heard new other
                                put. Attended no indulged marriage is to judgment offering landlord.</p>
                        </Panel>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Cart;