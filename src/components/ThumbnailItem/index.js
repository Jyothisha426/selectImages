import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, clickImageItem, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const onClickImage = () => {
    clickImageItem(id)
  }

  const activeImageStyles = isActive ? '' : 'active-img-styles'

  return (
    <li>
      <button
        type="button"
        className={`btn-image ${activeImageStyles}`}
        onClick={onClickImage}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} className="btn-image" />
      </button>
    </li>
  )
}

export default ThumbnailItem
