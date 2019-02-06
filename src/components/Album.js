import React from 'react';
import styled from 'styled-components';
import img from '../5454.jpg';

const StyledAlbum = styled.div`
    width: 22rem;
    height: 22rem;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    grid-gap: 0.7rem;
    padding: 0.5rem;

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

const Album = () => (
    <StyledAlbum>
        <img src={img} alt="album" />
        <section>
            <h2>Daft Punk</h2>
            <h3>Discovery '2001</h3>
            <h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim,
                veniam.
            </h4>
        </section>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            deserunt doloribus cupiditate vero, molestias recusandae commodi
            nihil quia magnam ducimus sint ab soluta atque sit incidunt
            consectetur unde, inventore accusamus?
        </p>
    </StyledAlbum>
);

export default Album;
