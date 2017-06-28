class CustomList extends React.Component {
    constructor(props) {
        super(props);

        this.buildList = this.buildList.bind(this);
    }

    buildList(item, index) {
        return (
            <li key={`li_${item + index}`}>{item}</li>
        );
    }

    render() {
        const customList = this.props.customList.map(this.buildList);

        return (
            <ul className={'customList'}>
                {customList}
            </ul>
        );
    }
}

export default CustomList;