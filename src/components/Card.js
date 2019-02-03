import React from 'react';
import styled from 'styled-components';

import img from '../5454.jpg';

// styles

const StyledCard = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 10rem;
    border: 0.5rem black solid;
    border-radius: 1rem;

    img {
        width: 10rem;
        height: 10rem;
    }

    section {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
    }

    h4 {
        font-style: italic;
    }

    p {
        text-align: justify;
        grid-column: 1 / 3;
        grid-row: 2 / 3;
        overflow: hidden;
    }
`;

const Card = () => (
    <StyledCard>
        <img src={img} alt="album" />
        <section>
            <h2>Lorem Ipsum</h2>
            <h3>Sit Amet Consectetur</h3>
            <h4>Vero iusto distinctio natus esse</h4>
        </section>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            sit ex et, consectetur consequatur suscipit placeat ut corrupti
            facere voluptatem ratione, vero iusto distinctio natus esse quos
            incidunt nihil.
        </p>
    </StyledCard>
);

export default Card;
