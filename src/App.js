import { PostVertical } from './components/post';
import { MenuCategories } from './widgets';
import posts from './assets/posts.json';

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
							<MenuCategories/>
						</div>
						<div className="content">
							<div className="post-wrapper">
								<div className="row">
									{posts.map((item) => 
										<PostVertical 
											key={item.id}
											{...item}
										/>
									)}
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
