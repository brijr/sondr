'use client';

import { useCallback } from 'react';
import type { Container, Engine } from 'tsparticles-engine';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

const App = () => {
	const particlesInit = useCallback(async (engine: Engine) => {
		console.log(engine);
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container: Container | undefined) => {
		await console.log(container);
	}, []);
	return (
		<Particles
			className="absolute w-full h-full overflow-hidden inset-0 z-[-1]"
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				fpsLimit: 120,
				interactivity: {
					events: {
						onClick: {
							enable: true,
							mode: 'push'
						},
						onHover: {
							enable: true,
							mode: 'repulse'
						},
						resize: true
					},
					modes: {
						push: {
							quantity: 4
						},
						repulse: {
							distance: 25,
							duration: 0.4
						}
					}
				},
				particles: {
					lineLinked: {
						enable: true,
						amount: 10,
						distance: 150,
						opacity: 0.4,
						width: 1,
						blink: false,
						consent: false
					},
					color: {
						value: '#fff'
					},
					collisions: {
						enable: true
					},
					move: {
						direction: 'none',
						enable: true,
						outModes: {
							default: 'bounce'
						},
						random: true,
						speed: 1,
						straight: false
					},
					number: {
						density: {
							enable: true,
							area: 1000
						},
						value: 50
					},
					opacity: {
						value: 0.5
					},
					shape: {
						type: 'circle'
					},
					size: {
						value: 1
					}
				},
				detectRetina: true
			}}
		/>
	);
};

export default App;
