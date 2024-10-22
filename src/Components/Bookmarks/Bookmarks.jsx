import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types'

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3">
           <h2>Reading Time: {readingTime}</h2>
         <h2>Bookmarks: {bookmarks.length}</h2>
         <div className="space-y-3 bg-gray-200 p-4">
            {
                bookmarks.map((bookmark,idx) => <Bookmark bookmark={bookmark} key={idx}></Bookmark>)
            }
         </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    readingTime: PropTypes.number.isRequired
    }

export default Bookmarks;