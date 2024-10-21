
import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
  return (
    <div className='bg-slate-100 p-2 rounded-2xl'>
        <h2 className='text-2xl font-bold '>{title}</h2>
    </div>

  )
}

Bookmark.propTypes = {
bookmark: PropTypes.object.isRequired,
}

export default Bookmark