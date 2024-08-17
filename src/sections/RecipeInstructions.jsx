import Item from '../components/item';

export default function RecipeInstructions({ data }) {
	return (
		<section className="section instructions">
			<h2 className="heading-2 mb-lg">Instructions</h2>
			<ol className="list">
				{data.map(instruc => (
					<Item key={instruc.step} step={instruc.step}>
						<strong>{instruc.verb}</strong>: {instruc.desc}{' '}
					</Item>
				))}
			</ol>
		</section>
	);
}
