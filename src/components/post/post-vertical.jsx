export default function PostVertical({title, price, location, posted, imageUrl, id}) {
	const url = `/post/${id}`;
	return (
		<div className="post post--v">
			<a href={url} className="post__image">
				<img src={imageUrl} alt="Image 1"/>
			</a>
			<div className="post__title-wrapper">
				<h4 className="post__title">
					<a className="post__title__link" href={url}>{title}</a>
				</h4>
			</div>
			<div className="post__date-location">
				{location}, <span>{posted}</span>
			</div>
			<div className="post__price">
				{price} грн.
			</div>
		</div>
	);
}