import React from "react";
import categories from "../assets/categories.json";

export default function MenuCategories() {
	const [activeId, setActiveId] = React.useState(1);

	function activateCategory(id) {
		setActiveId(id);
	}

	return (
		<ul className="categories">
			{categories.map(item => 
				<li 
					className={`categories__item${activeId === item.id ? ' active':''}`} 
					onClick={() => activateCategory(item.id)} 
					key={item.id}>
					<span>{item.title}</span>
				</li>
			)}
		</ul>
	);
}