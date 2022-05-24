import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import ProductDetails from './ProductDetails';
import SingleProduct from './SingleProduct';

const Parent = () => {
    const [user] = useAuthState(auth);

    const productId = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId.id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [productId.id]);

    const userInfo = {
        username: user?.displayName,
        email: user?.email,
        product: product.name,
    };

    console.log(userInfo);
    return (
        <div>
            <ProductDetails product={product} setProduct={setProduct} userInfo={userInfo}></ProductDetails>
        </div>
    );
};

export default Parent;