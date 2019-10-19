import { API_BASE_URL } from './config';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from "graphql-tag";

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: API_BASE_URL + 'graphql'
});

const client = new ApolloClient({
    cache,
    link
});

export const ADD_PROFILE = 'ADD_PROFILE';
export const addProfile = () => ({
    type: ADD_PROFILE
});

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const fetchDataSuccess = data => ({
    type: FETCH_DATA_SUCCESS,
    data
});

export const fetchData = () => dispatch => {
    client
        .query({
            query: gql`
        query {allPersons {
            name,
            distance,
            lastOnline,
            photo,
            aboutMe,
            favoriteGames,
            wantToPlay,
            id
        }
    }
      `
        })
        .then(data => dispatch(fetchDataSuccess(data)));
};