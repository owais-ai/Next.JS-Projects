import React from 'react'

interface Book {
    id: number;
    name: string;
    author: string;
    type: string;
    price: number;  // Price is a number based on your API response
    available: boolean;
}
const Book = async ({ params } : { params: { id:number }}) => {
    console.log(params);
    
    const response = await fetch(`https://simple-books-api.glitch.me/books/${params.id}`)
    const book:Book = await response.json();

    return (
        <div className=' flex flex-col my-10 mx-20 items-center gap-6'>
            <p className='text-3xl text-red-500'>This is our Book on sale</p>
            <h1>Name of book: {book.name}</h1>
            <h2>Type of book: {book.type}</h2>
            <h3>Price of book: {book.price}</h3>
            <h4  >Availability: <span className= {book.available?"text-green-500":"text-red-500"}>{book.available ? 'Yes' : 'No'}</span></h4>
        </div>
    );
};

export default Book