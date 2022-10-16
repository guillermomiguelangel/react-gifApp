import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState("");

    const onInputChange = ({target})=>{
        setInputValue(target.value);
    }
    
    const onInputSubmit = (e)=>{
        e.preventDefault();
        
        if(inputValue.trim().length <= 0) {
            return;
        }
    
        // setCategories( (categories)=> [inputValue,...categories]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={(e)=>onInputSubmit(e)}>
            <input 
                type="text"
                placeholder='Buscar'
                value={inputValue}
                onChange={(e)=>onInputChange(e)} />
        </form>
    )
}
