import imgPath from '../../assets/img/img1.jpeg';

export default function PostVertical() {
	return (
		<div className="post post--v">
			<a href="#a" className="post__image">
				<img src={imgPath} alt="Image 1"/>
			</a>
			<div className="post__title-wrapper">
				<h4 className="post__title">
					<a className="post__title__link" href="#a">Панама multicam shadow strategic</a>
				</h4>
			</div>
			<div className="post__date-location">
				Софіївська Борщагівка <span>Сьогодні 07:46</span>
			</div>
			<div className="post__price">
				2250 грн.
			</div>
		</div>
	);
}