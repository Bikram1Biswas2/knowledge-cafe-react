

const Blog = ({blog}) => {
    const {id,cover,title,author}= blog
    return (
        <div>
             <img className="w-2/4" src={cover} alt="" />
        </div>
    );
};

export default Blog;