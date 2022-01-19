import { gql, useQuery } from '@apollo/client';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';


const REVIEW = gql`
    query GetReview($id: ID!) {
        review(id: $id) {
            data {
                id
                attributes {
                    title
                    body
                    rating
                }
            }
        }
    }
`

export default function ReviewDetails() {
    const { id } = useParams();
    const { loading, error, data } = useQuery(REVIEW, {
        variables: { id }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div className='review-card'>
            <div className='rating'>{data.review.data.attributes.rating}</div>
            <h2>{data.review.data.attributes.title}</h2>
            <small>console list</small>
            <ReactMarkdown>{data.review.data.attributes.body}</ReactMarkdown>
        </div>
    )
}
