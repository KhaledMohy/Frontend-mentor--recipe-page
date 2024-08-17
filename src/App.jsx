import './style/font.css';
import './style/page.css';

import Banner from './sections/Banner';
import RecipeHeader from './sections/RecipeHeader';
import RecipeIngredients from './sections/RecipeIngredients';
import RecipeInstructions from './sections/RecipeInstructions';
import RecipeNutrition from './sections/RecipeNutrition';
import LineBreak from './components/lineBreak';

const recipe = {
	title: 'Simple Omelette Recipe',
	desc: 'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.',
	preparation: {
		total: 'Approximately 10 minutes',
		preperation: '5 minutes',
		cooking: '5 minutes',
	},

	ingredients: [
		'2-3 large eggs',
		'Salt, to taste',
		'Pepper, to taste',
		'1 tablespoon of butter or oil',
		'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
	],

	instruction: [
		{
			verb: 'Beat the eggs',
			desc: 'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
			step: 1,
		},

		{
			verb: 'Heat the pan',
			desc: 'Place a non-stick frying pan over medium heat and add butter or oil.',
			step: 2,
		},
		{
			verb: 'Cook the omelette',
			desc: 'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface',
			step: 3,
		},
		{
			verb: 'Add fillings (optional)',
			desc: 'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
			step: 4,
		},
		{
			verb: 'Fold and serve',
			desc: 'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
			step: 5,
		},
		{
			verb: 'Enjoy',
			desc: 'Serve hot, with additional salt and pepper if needed.',
			step: 6,
		},
	],

	nutrition: [
		{
			nut: 'Calories',
			num: 277,
			unit: 'kcal',
		},
		{
			nut: 'Carbs',
			num: 0,
			unit: 'g',
		},
		{
			nut: 'Protin',
			num: 20,
			unit: 'g',
		},
		{
			nut: 'Fat',
			num: 22,
			unit: 'g',
		},
	],
};

function App() {
	return (
		<div className="container">
			<Banner />
			<main className="main">
				<RecipeHeader data={recipe} />
				<RecipeIngredients data={recipe.ingredients} />
				<LineBreak />
				<RecipeInstructions data={recipe.instruction} />
				<LineBreak />
				<RecipeNutrition data={recipe.nutrition} />
			</main>
		</div>
	);
}

export default App;
