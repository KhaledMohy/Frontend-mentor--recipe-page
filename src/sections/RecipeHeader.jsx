import Item from '../components/Item';

export default function RecipeHeader({ data }) {
	return (
		<section className="section mb-2xl">
			<h1 className="heading-1">{data.title}</h1>
			<p className="text mb-xl">{data.desc}</p>
			<div className="preparation">
				<h3 className="heading-3 mb-md">Preparation time</h3>
				<ul className="list">
					<Item>
						<strong>Total:</strong>
						<span> {data.preparation.total}</span>
					</Item>

					<Item>
						<strong>Preparation:</strong>
						<span> {data.preparation.preperation}</span>
					</Item>

					<Item>
						<strong>Cooking:</strong>
						<span> {data.preparation.cooking}</span>
					</Item>
				</ul>
			</div>
		</section>
	);
}
