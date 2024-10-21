import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {id,cover,title,author}= blog
    return (
        <div>
            
            <img className="w-2/4" src={cover} alt="" />
           
        </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired,
    
}

export default Blog;