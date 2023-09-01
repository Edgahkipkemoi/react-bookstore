import React from 'react';

const BooksDisplay = () => (
  <>
    <section>
      <ul className="books-to-read">
        <li>
          <span>BookState</span>
          <button type="button" className="delete-btn">Delete</button>
        </li>
      </ul>
    </section>
  </>
);

export default BooksDisplay;
