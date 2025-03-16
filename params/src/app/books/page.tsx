import React from "react";
import Link from "next/link";
interface Book {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const Books = async () => {
  const url = await fetch("https://simple-books-api.glitch.me/books");
  const response = await url.json();
  return (
    <div className="main mx-10">
      <div className="h-12 text-3xl text-center">Books list</div>

      <div className="flex justify-center items-center flex-col gap-6" >
        {response.map((book: Book) => {
          return (
            <div key={book.id} className="border border-black p-10 w-[400px]">
              <Link href={`books/${book.id}`}>
                <h1>Book name is {book.name}</h1>
            
              <h2>book type: {book.type}</h2>
              <h3>
                Avaialbe:
                {book.available ? (
                  <span className="text-green-500">Yes</span>
                ) : (
                  <span className="text-red-500">No</span>
                )}
              </h3>  </Link>    
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Books;
