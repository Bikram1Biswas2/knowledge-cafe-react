import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3">
         <h2>Bookmarks: {bookmarks.length}</h2>
         <div className="space-y-3 bg-gray-200 p-4">
            {
                bookmarks.map((bookmark) => <Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>)
            }
         </div>
        </div>
    );
};

export default Bookmarks;