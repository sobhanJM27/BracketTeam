import React, { useState, useEffect } from 'react';

const BlogCart = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        async function fetchBlogs() {
            let url = 'https://bracketteamnet.liara.run/#/';

            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setBlogs(data);
        }

        fetchBlogs();
    }, [])

    return (
        <div className="blogcart">

        </div>
    )
}

export default BlogCart;
