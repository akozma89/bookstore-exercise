import { Carousel } from 'react-bootstrap/lib/';
import BookApi from '../helpers/network';

class BookCarousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            carouselData: []
        };

        this.buildCarouselItem = this.buildCarouselItem.bind(this);
        this.buildCarouselState = this.buildCarouselState.bind(this);
    }

    buildCarouselState() {
        BookApi.getCarouselData().then((response) => response.json()).then((carouselData) => {
            if (!carouselData.items) {
                throw Error('Something went wrong. There is no book to show.');
            }

            this.setState({
                carouselData: carouselData.items.map((carouselItem) => {
                    return this.buildCarouselItem({
                        id:             carouselItem.id,
                        title:          carouselItem.volumeInfo.title,
                        description:    carouselItem.volumeInfo.description,
                        image:          carouselItem.volumeInfo.imageLinks
                    });
                })
            });
        }).catch((error) => {
            throw Error('Something went wrong.');
        });
    }

    buildCarouselItem(carouselItem) {
        /*width={900} height={500} */
        const itemVolumeInfo = carouselItem.volumeInfo,
            carouselImage = carouselItem.image.smallThumbnail,
            maxDescriptionLength = 300;

        return (
            <Carousel.Item key={carouselItem.id}>
                <img src={carouselImage}/>
                <Carousel.Caption>
                    <h3>{carouselItem.title}</h3>
                    <p>{carouselItem.description.length > maxDescriptionLength ? `${carouselItem.description.slice(0, maxDescriptionLength)}...` : carouselItem.description }</p>
                </Carousel.Caption>
            </Carousel.Item>
        );
    }

    componentWillMount() {
        this.buildCarouselState();
    }

    render() {
        return (
            <Carousel controls={false}>
                {this.state.carouselData}
            </Carousel>
        );
    }
}

export default BookCarousel;