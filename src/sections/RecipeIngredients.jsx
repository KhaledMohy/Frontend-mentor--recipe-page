import Item from '../components/Item';

export default function RecipeIngredients({ data }) {
	return (
		<section className="section ingredients">
			<h2 className="heading-2 mb-lg">Ingredients</h2>
			<ul className="list">
				{data.map((ingred, i) => (
					<Item key={i}>{ingred}</Item>
				))}
			</ul>
		</section>
	);
}
