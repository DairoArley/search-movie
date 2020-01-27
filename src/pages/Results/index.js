import React from 'react';
import {Container} from '@material-ui/core';
import queryString from 'querystring';

export default ({location}) => {
    console.log(queryString.parse(location.search) );
    return(
        <Container>
            Resultados
        </Container>
    )
}