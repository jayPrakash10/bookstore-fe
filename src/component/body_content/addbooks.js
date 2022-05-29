import axios from 'axios';
import React, { useContext } from 'react';
import { useState } from 'react';
import { themeContext } from '../../js/theme.js';

function Addbooks(){
    let th = useContext(themeContext)
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState();
    const [edition, setEdition] = useState('');
    const [desc, setDesc] = useState('');
    const [author, setAuthor] = useState('');
    const [coverPhoto, setCover] = useState('');

    const setValues = (value, type)=> {
        if(type === 'name') {
            setName(value);
         }
        if(type === 'title') {
            setTitle(value);
        }
        if(type === 'price') {
            setPrice(value);
        }
        if(type === 'edition') {
            setEdition(value);
        }
        if(type === 'desc') {
            setDesc(value);
        }
        if(type === 'author') {
            setAuthor(value);
        }
        if(type === 'cover') {
            setCover(value);
        }
    }

    const submit = async () => {
        const body = {
            'name':name,
            'title':title,
            'price':parseInt(price),
            'author':author,
            'edition': edition,
            'genre': [],
            'desc':desc,
            'coverPhoto': coverPhoto
        }

        console.log(body);

        const res = await axios.post('http://localhost:3002/books', body);
        console.log(res.data);
    }
    return(
        <div className="container">
            <div style={{margin:"20px", fontSize:"30px", color:th.navColor }}><strong>Add Book</strong></div>
            
            <div className="alert alert-success" style={{display:'none'}} role="alert" id="alert">
                <strong>Book added Successfully</strong>.
            </div>
            <div className='warning' id='tw'>* Field is required</div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Name</span>
                </div>
                <input type="text" className="form-control" id="title" style={{marginLeft:"5px"}} onChange={(e)=>setValues(e.target.value, 'name')}/>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Title</span>
                </div>
                <input type="text" className="form-control" id="subtitle" style={{marginLeft:"5px"}} onChange={(e)=>setValues(e.target.value, 'title')}/>
            </div>
            <div className='warning' id='aw'>* Field is required</div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Author</span>
                </div>
                <input type="text" className="form-control" style={{marginLeft:"5px"}} onChange={(e)=>setValues(e.target.value, 'author')}/>
            </div>
            <div className='warning' id='yw' style={{width:'48.5%'}}>* Field is required</div>            
            <div className='warning' id='pw'>* Field is required</div>            
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Year</span>
                </div>
                <input type="text" className="form-control" id="year" style={{marginLeft:"5px"}} onChange={(e)=>setValues(e.target.value, 'edition')}/>

                <div className="input-group-prepend" style={{marginLeft:"10px"}}>
                    <span className="input-group-text" >Price (Rs.)</span>
                </div>
                <input type="text" className="form-control" id="price" style={{marginLeft:"5px"}} 
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                        }
                    }}
                    onChange={(e)=>setValues(e.target.value, 'price')}/>
            </div>
            <div class="input-group mb-3">
                <input type="file" placeholder='upload cover' class="form-control" id="inputGroupFile02" accept="image/*" onChange={(e)=> setValues(e.target.value, 'cover')}/>
            </div>
            <div className='warning' id='dw'>* Field is required</div>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">Summary</span>
                </div>
                <textarea className="form-control"  id="desc" style={{marginLeft:"5px",height:"200px"}} onChange={(e)=>setValues(e.target.value, 'desc')}></textarea>
            </div>
            <button type="button" class="btn btn-primary btn-lg" style={{marginTop:"50px"}} onClick={submit}>Add</button>
        </div>
    )
}

export default Addbooks;