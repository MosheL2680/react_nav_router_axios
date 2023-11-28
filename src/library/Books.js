import Table from 'react-bootstrap/Table';
import BooksDisp from './BooksDisp';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

function ResponsiveBreakpointsExample() {
  const LIBRARY_SERVER = 'https://library-6.onrender.com'
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(LIBRARY_SERVER + '/books').then((res) => {
      setBooks(res.data.books)
      setLoading(false)
    })
  }, [books.length])

  if (loading) return (
    <div>
      <h3>Waiting for server</h3>
      <Spinner />
    </div>
  )

  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Book title</th>
            <th>Author</th>
            <th>Publication year</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, ind) => <BooksDisp key={ind} book={book} />)}
        </tbody>
      </Table>

    </div>
  );
}

export default ResponsiveBreakpointsExample;