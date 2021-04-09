import React from 'react';

import Card from '../components/Card';

import quiz from '../assets/images/quiz.png';
import profilepicture from '../assets/images/profilepicture.png';
import adoption from '../assets/images/adoption.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Coding Quiz',
                    subTitle: 'Test your coding skills',
                    imgSrc: quiz,
                    link: 'https://reinarivera16.github.io/quizing-coding-skills/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Reina',
                    subTitle: 'LinkedIn',
                    imgSrc: profilepicture,
                    link: 'https://www.linkedin.com/in/reina-rivera-4629901b7/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Pet Adoption Application',
                    subTitle: 'Web application that can be used to adopt cats and dogs',
                    imgSrc: adoption,
                    link: 'https://pet-adoption-platform.herokuapp.com/',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;