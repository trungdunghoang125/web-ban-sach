import React from "react"

export default function Footer() {
    return (

        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col-1">
                        <h3>Download Our App</h3>
                        <p>Download App for Android and ios mobile phone.</p>
                        <div className="app-logo">
                            <img src="/images/Playstore.png" />
                            <img src="/images/Applestore.png" />
                        </div>
                    </div>
                    <div className="footer-col-2">
                        <img src="/images/EbookStore-Logo-footer.png" />
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Reiciendis, Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div className="footer-col-3">
                        <h3>Useful Links</h3>
                        <ul>
                            <li>Coupons</li>
                            <li>Blog Post</li>
                            <li>Return Policy</li>
                            <li>Join Affiliate</li>
                        </ul>
                    </div>
                    <div className="footer-col-4">
                        <h3>Follow us</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Youtube</li>
                            <li>Instagram</li>
                            <li>Twitterr</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="copyright">Copyright 2020 - EbookStore</p>
            </div>
        </div>

    );
}