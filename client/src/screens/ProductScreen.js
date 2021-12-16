import React from "react";

export default function ProductScreen() {
    return (
        <div>
            <div class="row">
                <div class="col-2">
                    <img src="images/Book 16.jpg" alt="Book4" width="68%" />
                </div>
                <div class="col-2">
                    <p>Home / Ebook</p>
                    <h1>Anna Karenina by LEO TOLSTOY</h1>
                    <h4>Rs500.00</h4>
                    <input type="number" value="1" />
                    <a href="" class="btn">Add To Cart</a>
                    <h3>Book Deatails <i class="fa fa-indent"></i></h3>
                    <br />
                    <p>
                        Acclaimed by many as the world's greatest novel, Anna Karenina
                        provides a vast panorama of contemporary life in Russia and of
                        humanity in general. In it Tolstoy uses his intense imaginative
                        insight to create some of the most memorable characters in all of
                        literature. Anna is a sophisticated woman who abandons her empty
                        existence as the wife of Karenin and turns to Count Vronsky to
                        fulfil her passionate nature - with tragic consequences. Levin is a
                        reflection of Tolstoy himself, often expressing the author's own
                        views and convictions.
                    </p>
                </div>
            </div>
        </div>
    )
}