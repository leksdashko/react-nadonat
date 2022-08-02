import imgPath from './img/img1.jpeg';

function App() {
  return (
    <div className="App">
      <div className="container">
				<header className="header">
					<div className="row space-between">
						<div className="header__left">
							<a href="#a" className="logo">NaDonat</a> 
						</div>
						<div className="header__center">
							center
						</div>
						<div className="header__right">
							right
						</div>
					</div>
				</header>
				<div className="wrapper">
					<div className="row space-between">
						<div className="left-side">
							<ul className="categories">
								<li><a href="#a">Category</a></li>
								<li><a href="#a">Category</a></li>
								<li><a href="#a">Category</a></li>
								<li><a href="#a">Category</a></li>
								<li><a href="#a">Category</a></li>
								<li><a href="#a">Category</a></li>
							</ul>
						</div>
						<div className="content">
							<div className="post-wrapper">
								<div className="row">
									<div className="post post--v">
										<div className="post__image-wrapper">
											<img src={imgPath} alt="Image 1" className="post__image"/>
										</div>
										<div className="post__title-wrapper">
											<h4 className="post__title">
												<a className="post__title__link" href="#a">Post title</a>
											</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="right-side">
							<ul className="setting-buttons">
								<li><a href="#a">B</a></li>
							</ul>	
						</div>
					</div>
				</div>
			</div>
    </div>
  );
}

export default App;
