
import EditUserName from './editName/editName'
import DisplayNames from './displayName/displayName'
import React from 'react';
import { useSelector } from 'react-redux';


export default function Welcome(){
    const { isEditPannelVisible } = useSelector((state) => state.getinfo);

    return(
        <>
            {!isEditPannelVisible ? <DisplayNames/> : <EditUserName/>}          
            
        </>
        
    )
}