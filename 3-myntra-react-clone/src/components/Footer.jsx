import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
const Footer = () =>{

  return ( <footer>
        <div className="footer_container">
            <div className="footer_column">
                <h3>ONLINE SHOPPING</h3>

                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">Kids</a>
                <a href="#">Home & Living</a>
                <a href="#">Beauty</a>
                <a href="#">Gift Card</a>
                <a href="#">Myntra Insider</a>
            </div>

            
            <div className="footer_column">
                <h3>CUSTOMER POLICIES</h3>

                <a href="#">Contact Us</a>
                <a href="#">FAQ</a>
                <a href="#">T&C</a>
                <a href="#">Term of Use</a>
                <a href="#">Track Orders</a>
                <a href="#">Shipping</a>
                <a href="#">Grirvance Redressal</a>
            </div>
            <div className="footer_column">
                <h3>USEFUL LINKS</h3>

                <a href="#">Blog</a>
                <a href="#">Careers</a>
                <a href="#">Site Map</a>
                <a href="#">Corporate Information</a>
                <a href="#">whitehat</a>
                <a href="#">Cleantrip</a>
                <a href="#">Myntra Global</a>
            </div>
            <div className="footer_column">
                <h3>EXPERINCE MYNTRA APP ON MOBILE</h3>

                <a href="#"> <img className="myntra_footer" src="images/download.png" alt="Myntra Home" /></a>
                <br />
            <h3>KEEP IN TOUCH</h3>
                <a href="#"><FaFacebook /> <FaInstagram /> <FaXTwitter /> <FaYoutube /></a>
                
            </div>
            <hr />
        </div>
        <div className="footer-name">
            <div className="info">
                <h3>ONLINE SHOPPING MADE EASY AT MYNTRA</h3>
                <p>If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. Myntra is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at Myntra from the comfort of your home and get your favourites delivered right to your doorstep.
            </p>
            <h3>BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</h3>
            <p>Be it clothing, footwear or accessories, Myntra offers you the ideal combination of fashion and functionality for men, women and kids. You will realise that the sky is the limit when it comes to the types of outfits that you can purchase for different occasions.</p>
            <h3>MYNTRA APP</h3>
            <p>Myntra, India’s no. 1 online fashion destination justifies its fashion relevance by bringing something new and chic to the table on the daily. Fashion trends seem to change at lightning speed, yet the Myntra shopping app has managed to keep up without any hiccups. In addition, Myntra has vowed to serve customers to the best of its ability by introducing its first-ever loyalty program, The Myntra Insider. Gain access to priority delivery, early sales, lucrative deals and other special perks on all your shopping with the Myntra app. Download the Myntra app on your Android or IOS device today and experience shopping like never before!</p><h3>HISTORY OF MYNTRA</h3>
            <p>Becoming India’s no. 1 fashion destination is not an easy feat. Sincere efforts, digital enhancements and a team of dedicated personnel with an equally loyal customer base have made Myntra the online platform that it is today. The original B2B venture for personalized gifts was conceived in 2007 but transitioned into a full-fledged ecommerce giant within a span of just a few years. By 2012, Myntra had introduced 350 Indian and international brands to its platform, and this has only grown in number each passing year. Today Myntra sits on top of the online fashion game with an astounding social media following, a loyalty program dedicated to its customers, and tempting, hard-to-say-no-to deals.

The Myntra shopping app came into existence in the year 2015 to further encourage customers’ shopping sprees. Download the app on your Android or IOS device this very minute to experience fashion like never before</p>
            <h3>SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE</h3>
            <p>Another reason why Myntra is the best of all online stores is the complete convenience that it offers. You can view your favourite brands with price options for different products in one place. A user-friendly interface will guide you through your selection process. Comprehensive size charts, product information and high-resolution images help you make the best buying decisions. You also have the freedom to choose your payment options, be it card or cash-on-delivery. The 14-day returns policy gives you more power as a buyer. Additionally, the try-and-buy option for select products takes customer-friendliness to the next level.

Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can also shop for your friends, family and loved-ones and avail our gift services for special occasions.</p>
            </div>
        </div>
        <hr/>

        <div className="copyright">
            © 2025 www.myntra.com. All rights reserved.
        </div>
    </footer>
  )
}

export default Footer;