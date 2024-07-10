import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import authService from '../../service/callAPI'; 
import { updateNames, cancelEditing } from '../../redux/reducers/editProfil';

export default function EditUserName() {
    const { firstName, lastName } = useSelector((state) => state.getinfo);
    const [newFirstName, setFirstName] = useState(firstName);
    const [newLastName, setLastName] = useState(lastName);
    const dispatch = useDispatch();
   
    const { token } = useSelector((state) => state.auth);
    
    const handleChangeNames = async (e) => {
        e.preventDefault();
        try {
            
            const response = await authService.changeNames(newFirstName, newLastName, token);
                
            dispatch(updateNames({ firstName: newFirstName, lastName: newLastName }));
            
        } catch (error) {
            console.error('Failed to update names:', error.message);
        }
    };

    const handleCancel = () => {
        dispatch(cancelEditing());
    };

    return(
        <form className="editusername" onSubmit={handleChangeNames}>
            <h1 className="editusername_title">Welcome back</h1>
            
            <div className="editusername_labels">
                <label>
                    <input type="text" name="firstName" value={newFirstName} onChange={(e) => setFirstName(e.target.value)}/>
                </label>
                <label>
                    <input type="text" name="lastName" value={newLastName} onChange={(e) => setLastName(e.target.value)}/>
                </label>
            </div>
            <div className="editusername_buttons">
                <button type="submit" className="editusername_button">Save</button>
                <button type="button" onClick={handleCancel} className="editusername_button">Cancel</button>
            </div>             
        </form>
    );
}
