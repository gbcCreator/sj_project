import React from 'react'
import Banner from './Banner'
import SubBanner, { OverlayBox } from './SubBanner'
import CardSection from './CardSection'
import ThirdSection from './ThirdSection'

import card1 from '../grocery_img-collection/saroj website img collection/card_img/1.avif'
import card2 from '../grocery_img-collection/saroj website img collection/card_img/2.avif'
import card3 from '../grocery_img-collection/saroj website img collection/card_img/3.avif'
import card4 from '../grocery_img-collection/saroj website img collection/card_img/4.avif'

import card1_1 from '../grocery_img-collection/saroj website img collection/festival_gift_hamper_image/1.jpg'
import card1_2 from '../grocery_img-collection/saroj website img collection/festival_gift_hamper_image/2.jpg'
import card1_3 from '../grocery_img-collection/saroj website img collection/festival_gift_hamper_image/3.jpg'
import card1_5 from '../grocery_img-collection/saroj website img collection/festival_gift_hamper_image/5.jpg'
import card1_6 from '../grocery_img-collection/saroj website img collection/festival_gift_hamper_image/6.jpg'

import card2_1 from '../grocery_img-collection/saroj website img collection/fetured_food_img/1.jpg'
import card2_2 from '../grocery_img-collection/saroj website img collection/fetured_food_img/2.jpg'
import card2_3 from '../grocery_img-collection/saroj website img collection/fetured_food_img/3.jpg'
import card2_4 from '../grocery_img-collection/saroj website img collection/fetured_food_img/4.jpg'

import card31 from '../grocery_img-collection/saroj website img collection/festival_gift_hamper_image/7.jpg'
import card32 from '../grocery_img-collection/saroj website img collection/festival_gift_hamper_image/7.jpg'
import card33 from '../grocery_img-collection/saroj website img collection/festival_gift_hamper_image/7.jpg'
import card34 from '../grocery_img-collection/saroj website img collection/festival_gift_hamper_image/7.jpg'



import india_map from '../grocery_img-collection/saroj website img collection/third-section/india_map.png'
import SevenSection from './SevenSection'

const Home = () => {
    return (
        <>
            <Banner />
            <SubBanner />
            <div className="festive_card-section">
                <h2>FESTIVE GIFT HAMPERS</h2>
                <div className="card-box">
                    <CardSection img={card2_1} img_alt="loading" card_heading="Drinking Chocolate Sepecial for Chocolate Loves" card_price="Rs. 320.00" />
                    <CardSection img={card2_1} img_alt="loading" card_heading="Drinking Chocolate Sepecial for Chocolate Loves" card_price="Rs. 320.00" />
                    <CardSection img={card2_1} img_alt="loading" card_heading="Drinking Chocolate Sepecial for Chocolate Loves" card_price="Rs. 320.00" />
                    <CardSection img={card2_1} img_alt="loading" card_heading="Drinking Chocolate Sepecial for Chocolate Loves" card_price="Rs. 320.00" />
                </div>
            </div>
            <div className="festive_card-section">
                <h2>FeATURED PRODUCTS</h2>
                <div className="card-box">
                    <CardSection img={card1_2} img_alt="loading" card_heading="Delighted Festive Value Hamper" card_price="Rs. 390.00" />
                    <CardSection img={card1_3} img_alt="loading" card_heading="Delighted Festive Value Hamper" card_price="Rs. 390.00" />
                    <CardSection img={card1_5} img_alt="loading" card_heading="Delighted Festive Value Hamper" card_price="Rs. 390.00" />
                    <CardSection img={card1_6} img_alt="loading" card_heading="Delighted Festive Value Hamper" card_price="Rs. 390.00" />
                </div>
            </div>
            <div className="third-section-container">
                <div className="third-section">
                    <ThirdSection logo_img="" logo_contain="100% Vegetarian" />
                    <ThirdSection logo_img="" logo_contain="Made In India" />
                    <ThirdSection logo_img="" logo_contain="Plain Oil Free" />
                    <ThirdSection logo_img="" logo_contain="Trans Fat Free" />
                </div>
            </div>
            <div className="forth-section">
                <h2>shop by collection</h2>
                <div className="card-box">
                    <CardSection img={card2_1} img_alt="loading" card_heading="Delighted Festive Value Hamper" card_price="Rs. 390.00" />
                    <CardSection img={card2_2} img_alt="loading" card_heading="Delighted Festive Value Hamper" card_price="Rs. 390.00" />
                    <CardSection img={card2_3} img_alt="loading" card_heading="Delighted Festive Value Hamper" card_price="Rs. 390.00" />
                    <CardSection img={card2_4} img_alt="loading" card_heading="Delighted Festive Value Hamper" card_price="Rs. 390.00" />
                </div>
            </div>
            <div className="six-section">
                <h2>coco kitchen highlights</h2>
                <div className="card-box">
                    <CardSection img={card1_5} img_alt="loading" card_heading="Delighted Festive Value Hamper" card_price="Rs. 390.00" />
                    <CardSection img={card1_6} img_alt="loading" card_heading="Delighted Festive Value Hamper" card_price="Rs. 390.00" />
                    <CardSection img={card1_3} img_alt="loading" card_heading="Delighted Festive Value Hamper" card_price="Rs. 390.00" />
                    <CardSection img={card1_2} img_alt="loading" card_heading="Delighted Festive Value Hamper" card_price="Rs. 390.00" />
                </div>
            </div>
            <div className="seven">
                <SevenSection logo_img="" logo_heading="Brij Kandodia" heading_contain="cant't belive it's made in india Simply top class products" />
                <SevenSection logo_img="" logo_heading="Brij Kandodia" heading_contain="cant't belive it's made in india Simply top class products" />
                <SevenSection logo_img="" logo_heading="Brij Kandodia" heading_contain="cant't belive it's made in india Simply top class products" />
            </div>
            <div className="eight">
                <div className="left-eight">
                    <h2>Newsletter</h2>
                    <p>Subscribe to get sepecial offers free giveways and once a lifetime deals.</p>
                </div>
                <div className="right-eight">
                    <form action="">
                        <div className="text-area">
                            <input type="email" name='email' placeholder='abc@xyz.com'/>
                            <button type='submit'>join</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="nine">
                <div className="overlay">
                <OverlayBox overaly_heading="Follow us at @jindalcocoa"/>
                <OverlayBox overaly_heading="Follow us at @jindalcocoa"/>
                </div>
            </div>
        </>
    )
}

export default Home
