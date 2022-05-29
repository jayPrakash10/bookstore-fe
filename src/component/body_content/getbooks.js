import axios from 'axios';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { themeContext } from '../../js/theme';
import BookCard from './bookcard';

function Getbooks(){
    let th = useContext(themeContext)

    const [books, setBooks] = useState();
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        setFetching(true);
        const res = await axios.get('http://localhost:3002/books');
        setBooks(res.data)
        setFetching(false);
    }

    return(
        <div className="container">
            <div style={{margin:"20px", fontSize:"30px", color:th.navColor }}><strong>Books</strong></div>
                <div style={{ minHeight : '500px' }}>
                {fetching ? 
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    :
                    <>{books &&
                        <div className='card-group'>
                        {    books.map((book) => 
                            <BookCard book={book} fetchBooks={fetchBooks}/>
                            )
                        }
                        </div>
                    }
                    {!books &&
                        <div><strong>No Records</strong></div>
                    }
                    </>
                }
                </div>
        </div>
    )
}

export default Getbooks;