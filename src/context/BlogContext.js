import { createContext, useState, useContext } from 'react';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);

    const addBlog = (blog) => {
        setBlogs((prevBlogs) => [...prevBlogs, blog]);
    };

    return (
        <BlogContext.Provider value={{ blogs, addBlog }}>
            {children}
        </BlogContext.Provider>
    );
};

export const useBlog = () => useContext(BlogContext);
