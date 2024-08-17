import { useRef, useState, useEffect, useCallback } from 'react';
import banner from '../assets/images/image-omelette.jpeg';

export default function Banner() {
	const [isLoaded, setIsLoaded] = useState(false);
	const imgRef = useRef(null);

	// Memoized callback to avoid re-creating the function on each render
	const imgLoaded = useCallback(() => setIsLoaded(true), []);

	// Effect to check if the image is already loaded
	useEffect(() => {
		if (imgRef.current && imgRef.current.complete) {
			imgLoaded();
		}
	}, [imgLoaded]);

	return (
		<section className="section mb-2xl">
			<figure className="banner">
				<img
					className={isLoaded ? 'img-loaded' : ''}
					src={banner}
					alt="a plate with a omelette sandwich and some greens on it"
					onLoad={imgLoaded}
					ref={imgRef}
				/>
				<div className="banner__skeleton" />
			</figure>
		</section>
	);
}
