import { Link }         from 'react-router-dom';

import { Carousel }     from 'react-bootstrap/lib/';

import BookApi          from '../helpers/network';
import buildBookObject  from '../helpers/bookObject';

class BookCarousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            carouselData: []
        };

        this.buildCarouselItem  = this.buildCarouselItem.bind(this);
        this.buildCarouselState = this.buildCarouselState.bind(this);
    }

    buildCarouselState() {
        BookApi.getCarouselData().then((response) => response.json()).then((carouselData) => {
            if (!carouselData.items) {
                throw Error('Something went wrong.');
            }

            this.setState({
                carouselData: carouselData.items.map((carouselItem) => {
                    const carouselBookObject = buildBookObject(carouselItem);

                    return this.buildCarouselItem(carouselBookObject);
                })
            });

        }).catch((error) => {
            throw Error('Something went wrong.', error);
        });
    }

    buildCarouselItem(carouselItem) {
        const carouselImage         = carouselItem.images.smallThumbnail,
              maxDescriptionLength  = 300;

        return (
            <Carousel.Item key={carouselItem.id}>
                <Link to={`/book/${carouselItem.id}`} key={carouselItem.id}>
                    <img src={carouselImage}/>

                    <Carousel.Caption>
                        <h3>{carouselItem.title}</h3>
                        <p>{carouselItem.description.length > maxDescriptionLength ? `${carouselItem.description.slice(0, maxDescriptionLength)}...` : carouselItem.description }</p>
                    </Carousel.Caption>
                </Link>
            </Carousel.Item>
        );
    }

    componentWillMount() {
        this.buildCarouselState();
    }

    render() {
        return (
            <Carousel controls={false} indicators={false}>
                {this.state.carouselData}
            </Carousel>
        );
    }
}

export default BookCarousel;