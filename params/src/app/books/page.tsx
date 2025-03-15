import React from 'react'
import Link from 'next/link'
interface Book {
    "id": number,
    "name": string,
    "type": string,
    "available": boolean
}

const Books = async () => {
    const url = await fetch("https://simple-books-api.glitch.me/books")
    const response = await url.json()
    return (
        <div className='main mx-10'>
            <div className='h-12 text-3xl text-center'>
                Books list
            </div>

            <div>
                {response.map((book: Book) => {
                    return (
                        <div key={book.id}>
                            <Link href={`books/${book.id}`}><h1>Book name is {book.name}</h1></Link>
                            <h2>book type: {book.type}</h2>
                            <h3>Avaialbe:{book.available ? <span className='text-green-500'>Yes</span> : <span className='text-red-500'>No</span>}</h3>
                        </div>)
                })}
            </div>
        </div>
    )
}

export default Books