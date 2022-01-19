import { gql, useQuery } from '@apollo/client';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';


const REVIEWS = gql`
    query GetReviews {
        reviews {
            data {
                id
                attributes {
                    title
                    body
                    rating
                    categories {
                        data {
                            id
                            attributes {
                                name
                            }
                        }
                    }
                }
            }
        }
    }
`

export default function Home() {
    const { loading, error, data } = useQuery(REVIEWS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            {data.reviews.data.map(review =>
                <div key={review.id} className='review-card'>
                    <div className='rating'>{review.attributes.rating}</div>
                    <h2>{review.attributes.title}</h2>
                    
                    {review.attributes.categories.data.map(category =>
                        <small key={category.id}>{category.attributes.name}</small>    
                    )}

                    <ReactMarkdown>{review.attributes.body.substring(0,200) + "..."}</ReactMarkdown>
                    <Link to={`/details/${review.id}`}>Read more</Link>
                </div>
            )}
        </div>
    )
}
