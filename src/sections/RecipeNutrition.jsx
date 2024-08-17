export default function RecipeNutrition({ data }) {
	return (
		<section className="section nutrition">
			<h2 className="heading-2 mb-lg">Nutrition</h2>
			<p className="text mb-md">
				The table below shows nutritional values per serving without the
				additional fillings.
			</p>

			<table className="nutrition__tabel">
				<tbody>
					{data.map((row, i) => (
						<tr key={i}>
							<td>{row.nut}</td>
							<td>
								{row.num}
								{row.unit}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
}
