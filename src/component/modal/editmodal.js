import React, { useState, useContext } from 'react';
import { themeContext } from '../../js/theme.js';
import ReactModal from 'react-modal';
import axios from 'axios';

ReactModal.setAppElement('#root');

function EditBookModal({ book, open, setOpen, fetchBooks }){
    let th = useContext(themeContext);

    const [updating, setUpdating] = useState(false);
    const [name, setName] = useState(book.name);
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [price, setPrice] = useState(book.price);
    const [edition, setEdition] = useState(book.edition);
    const [desc, setDesc] = useState(book.desc);

    const update = async () => {
        setUpdating(true);
        const body = {
            'id': book.id,
            'name':name,
            'title':title,
            'price':parseInt(price),
            'author':author,
            'edition': edition,
            'genre': [],
            'desc':desc,
        }

        const res = await axios.put('http://localhost:3002/books', body);
        console.log(res.data);
        fetchBooks();
        setUpdating(false);
        setOpen(false);
    }

    return(
        <ReactModal
            isOpen={open}
            style={
                {
                    overlay: {
                        zIndex: 10,
                        backgroundColor: 'rgba(200,200,200,1.9)'
                    },
                    content : {
                        backgroundColor: th.modalBg,
                        padding: 0,
                        margin: '0 20px'
                    }
                }
            }
        >
            <div className='displayFlex modalheader'>
                <button className='btn close' onClick={()=> setOpen(false)} />
            </div>
            <div className='modalbody text-center'>
                <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                        <div className='input-group-text'>Name</div>
                    </div>
                    <input className='form-control' type='text' style={{marginLeft:'5px'}} value={name} onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                        <div className='input-group-text'>Title</div>
                    </div>
                    <input className='form-control' type='text' style={{marginLeft:'5px'}} value={title} onChange={(e)=> setTitle(e.target.value)}/>
                </div>
                <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                        <div className='input-group-text'>Author</div>
                    </div>
                    <input className='form-control' type='text' style={{marginLeft:'5px'}} value={author} onChange={(e)=> setAuthor(e.target.value)}/>
                </div>
                <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                        <div className='input-group-text'>Edition</div>
                    </div>
                    <input className='form-control' type='text' style={{marginLeft:'5px'}} value={edition} onChange={(e)=> setEdition(e.target.value)}/>
                    <div className='input-group-prepend' style={{marginLeft:"10px"}}>
                        <div className='input-group-text'>Price</div>
                    </div>
                    <input className='form-control' type='text' style={{marginLeft:'5px'}} value={price} onChange={(e)=> setPrice(e.target.value)}/>
                </div>
                <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                        <div className='input-group-text'>Summary</div>
                    </div>
                    <textarea className="form-control" value={desc} style={{marginLeft:"5px",height:"200px"}} onChange={(e)=>setDesc(e.target.value)} maxLength={1000}></textarea>
                </div>
                <button className='btn btn-success' style={{ marginTop:'10px' }} onClick={update}>
                    {updating ?
                        <div class="spinner-border spinner-border-sm" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        :
                        <></>
                    }
                    Update
                </button>
            </div>
            <div className='modalfooter'></div>
        </ReactModal>
    )
}

export default EditBookModal;