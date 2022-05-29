import React, { useContext } from 'react';
import { themeContext } from '../../js/theme.js';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

function ShowBookModal({ book, open, setOpen }){
    let th = useContext(themeContext);

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
            <div className='displayFlex modalbody'>
                <div className='imgContainer'>
                    <img 
                        src={book.coverPhoto ? book.coverPhoto : 'nocover.png'} 
                        className={`mcard-img ${book.coverPhoto ? 'mcard-img-shadow' : ''}`} 
                        alt=''
                    />
                </div>
                <div className='contentContainer'>
                    <div>
                        <h1 className='input-group displayInline' style={{ marginLeft:'5px' }}>{book.name}</h1>
                        <h5 className='input-group displayInline' style={{ marginLeft:'5px' }}>{book.title}</h5>
                    </div>
                    <div className='input-group' style={{ marginLeft:'30px' }}>by :- {book.author}</div>
                    <p className='input-group' style={{ marginLeft:'5px' }}>{book.desc}</p>
                    
                </div>
            </div>
            <div className='modalfooter'></div>
        </ReactModal>
    )
}

export default ShowBookModal;