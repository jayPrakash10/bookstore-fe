import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {themeContext} from '../js/theme'

function Header(props){
    let th= useContext(themeContext)

    function myfunction(){
        var op = document.getElementById('options');
        if(op.style.display==='block')
            op.style.display='none';
        else
            op.style.display='block';
    }
    function hide(){
        var op=document.getElementById('options');
        op.style.display='none';
    }

    return(<>
            <nav className={th.navbarTheme} style={{position : 'sticky'}}id='navbar'>
                <div className="container-fluid myNav" id='mynav' style={{justifyContent:'flex-end'}}>
                    <div className='switch'><div  className={th.toggleSwitch} onClick={props.changeTheme}></div></div>
                    <Link className="nav-link" to='/' style={{color:th.navColor}}>Getbooks</Link>
                    <Link className="nav-link" to='/add' style={{color:th.navColor}}>Addbooks</Link>
                    <div className='myicon' onClick={myfunction}>
                        <i className="bi bi-three-dots" style={{color:th.navColor}}></i>
                    </div>
                </div>
            </nav>
            <div className='options' id='options'>
                <Link className="nav-link" to='/' style={{color:'rgba(255,255,255,0.55)'}} onClick={hide}>Getbooks</Link>
                <Link className="nav-link" to='/add' style={{color:'rgba(255,255,255,0.55)'}} onClick={hide}>Addbooks</Link>
            </div>

        </>
    );
}

export default Header;