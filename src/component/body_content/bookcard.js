import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import EditBookModal from '../modal/editmodal.js';
import ShowBookModal from '../modal/showmodal.js';
import { themeContext } from '../../js/theme.js';
import axios from 'axios';

function BookCard({ book, fetchBooks }){
    const [openShow, setOpenShow] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    
    let th = useContext(themeContext);

    const deleteBook = async () => {
        try {
            const res = await axios.delete(`http://localhost:3002/books/${book.id}`);
            if(res.data === 'Deleted') {
                fetchBooks();
            }
        } catch(err) {
            console.log(err);
        }
    }

    return(
        <>
            <div className='bcard' style={{ boxShadow: th.cardShadow }}>
                <div className='flip-card'>
                    <img className='bcard-img flip-card-front' src={book.coverPhoto ? book.coverPhoto : 'nocover.png'} alt='card' />
                    <div className='bcard-body flip-card-back' style={{ backgroundColor : th.cardBody }}>
                        <div className='bcard-text'>
                            <h5 className='card-title' onClick={()=>setOpenShow(true)}>
                                {book.name}
                            </h5>
                            <p className='bcard-author'>
                                by {book.author}
                            </p>
                        </div>
                        <div className='bcard-button'>
                            <Button className='btn btn-primary' onClick={()=>setOpenEdit(true)}>Edit</Button>
                            <Button className='btn btn-danger' onClick={deleteBook}>Delete</Button>
                        </div>
                    </div>
                </div>
            </div>
            <ShowBookModal book={book} open={openShow} setOpen={setOpenShow}/>
            <EditBookModal book={book} open={openEdit} setOpen={setOpenEdit} fetchBooks={fetchBooks}/>
        </>
    );
}

export default BookCard;