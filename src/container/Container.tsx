import React from 'react';
import '../index.css';
import { ProductCard } from '../ProductCard';
import { products } from './constants';

export default function Container() {
    
    return (
        <div className="flex flex-wrap justify-center pb-10">
            
            {products.map(product => (
           <ProductCard key={product.id} product={product}/>))}

        </div>
    );
}

         
        
            /*  <>id={12}
                title={'smart watch'}
                image={'https://borgiphones.com/wp-content/uploads/2023/10/haylou-smartwatch-2-pro_10.jpeg'}
                description={"Explorez l'avenir avec la Montre Connectée Haylou Watch 2 Pro, Bluetooth Call, au meilleur prix en Tunisie. Des fonctionnalités avancées à votre poignet."} </>*/ 