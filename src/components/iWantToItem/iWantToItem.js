import React from "react";
import { Link } from 'react-router-dom';
import './iWantToItem.css';


const IWantToItem = (props) => {


    var iWantToID = 0;
    function findiWantToID() {
        iWantToID = props.id;
        // alert(iWantToID);
        return iWantToID;
        
    }

    return (
        <ui className='iWantToItem'>

            <Link to ='browsePolicies' className='linkStyle' onClick ={findiWantToID}>
                <label htmlFor={props.id} href={props.href}>
                    {props.name}
                </label>

            </Link>

        </ui>
    )
}



export default IWantToItem;