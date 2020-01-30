import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Container} from '@material-ui/core';
import queryString from 'query-string';

import {searchMovie } from '../../redux/actions/search';

export default ({location}) => {
    const dispatch = useDispatch();
    console.log(queryString.parse(location.search));
    const movies = useSelector( state => {
        console.log(state);
    });

    useEffect( () => {
        const { movieName } = queryString.parse(location.search);
        dispatch(searchMovie({movieName}));
    });

    return(
        <Container>
            Resultados
        </Container>
    )
}