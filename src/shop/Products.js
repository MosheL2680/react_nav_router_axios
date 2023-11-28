import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProdDisp from './ProdDisp';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner'; // Import the Spinner component
import SuperNav from './SuperNav';
import { toast, ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import Login from '../Login';

const Products = () => {
  const SUPER_SERVER = 'https://super-django-1.onrender.com';
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [logged, setLogged] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await toast.promise(
          axios.get(SUPER_SERVER + '/products'),
          {
            pending: 'Fetching products...',
            success: 'Products loaded successfully! 👌',
            error: 'Error fetching products 🤯',
          }
        );

        // Access the actual data from the resolved promise
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        // Handle errors if needed
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); 


  if (loading) {
    return(
      <div>
      <h3>Waiting for server</h3>
      <Spinner />
    </div>
    )
  }
  if (!logged){
    return(
      <Login setLogged={setLogged}/>
    
    )
  }

  return (
    <div>
      <SuperNav />
        <Row xs={1} md={2} className="g-4">
        {products.map((prod, ind) => (
          <ProdDisp key={ind} products={products} prod={prod} ind={ind} SUPER_SERVER={SUPER_SERVER}/>
        ))}
      </Row>
    </div>
  );
};

export default Products;
