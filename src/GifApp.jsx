import React, { useState } from 'react';
import { GifGrid, AddCategory } from './components/';

export const GifApp = () => {

  const [categories, setCategories] = useState(['React']);

  const onNewCategory = (newCategory) => {

    if(categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>GifApp</h1>
      
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(value) => onNewCategory(value)}
      />
      
      {
        categories.map((category) => (
          <GifGrid key={category} category={category}/>
        ))
      }
    </>
  )
} 
