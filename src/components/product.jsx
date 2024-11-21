import { useState } from 'react';
import '../style/product.css'
import Button from './button';


const Product = () => {


    const [quantite, setQuantite] = useState(0);
    const [productImage, setProductImage] = useState(0);

    return (
        <div className="product">

            <div className='product-group'>
                <div className='product-img-group'>
                    <div className='product-img' style={{ marginLeft: productImage }}>
                        <img src="src/assets/product_details_1.png" alt="product" />
                        <img src="src/assets/product_details_2.png" alt="product" />
                        <img src="src/assets/product_details_3.png" alt="product" />
                    </div>
                </div>
                <div className='product-img-list'>
                    <img src="src/assets/product_details_1.png" alt="product" onClick={() => setProductImage(0)} />
                    <img src="src/assets/product_details_2.png" alt="product" onClick={() => setProductImage(-600)} />
                    <img src="src/assets/product_details_3.png" alt="product" onClick={() => setProductImage(-1200)} />
                </div>
            </div>

            <div className='product-content'>
                <span>GLOWIFY BEAUTY</span>
                <h2>Rosewater Hydrating Mist</h2>
                <div className="product-rate-group">
                    <div className="product-rate">
                        <div className="stars">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-half"></i>
                        </div>
                        <span>(4.5/5)</span>
                    </div>
                    <div className="product-rate">
                        <p>143</p>
                        <span>Reviews</span>
                    </div>
                    <div className="product-rate">
                        <p>2.3K</p>
                        <span>Sold</span>
                    </div>
                </div>
                <p className='price'>$19.99</p>

                <div className='description'>
                    <div>
                        <h5>Brief  Description</h5>
                        <p>Rejuvenate and refresh your skin with our Rosewater Hydrating Mist. Infused with the essence of roses, this luxurious mist provides a burst of hydration, soothing and revitalizing your skin.</p>
                    </div>
                    <div>
                        <h5>Size</h5>
                        <p>90 ml</p>
                    </div>
                    <div>
                        <h5>Stock</h5>
                        <p>152</p>
                    </div>
                    <div>
                        <h5>Quantité</h5>
                        <div className='quantite-box'>
                            <div className='quantite'>
                                <button onClick={() => setQuantite(quantite > 0 ? quantite - 1 : quantite)} className='quantite-button'><span>-</span></button>
                                <span>{quantite}</span>
                                <button onClick={() => setQuantite(quantite + 1)} className='quantite-button'><span>+</span></button>
                            </div>
                        </div>
                    </div>
                </div>

                <Button margin='40px 0'> 🧺 Ajouter au panier </Button>
            </div>

        </div>
    )
}

export default Product;
