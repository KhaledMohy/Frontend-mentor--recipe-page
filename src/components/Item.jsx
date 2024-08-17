export default function Item({ children, step = null }) {
	return (
		<li className="item">
			<span className={step ? 'item--step' : 'item--bullet'}>
				{step ? step + '.' : ''}
			</span>
			<p className="text">{children}</p>
		</li>
	);
}
