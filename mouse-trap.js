let lastCircle = null;

export function createCircle() {
	document.addEventListener('click', (e) => {
		const circle = document.createElement('div');
		circle.classList.add('circle');
		circle.style.background = 'white';
		circle.style.left = `${e.clientX - 25}px`;
		circle.style.top = `${e.clientY - 25}px`;
		document.body.appendChild(circle);
		lastCircle = circle;
	})
}

export function moveCircle() {
	document.addEventListener('mousemove', (e) => {
		if (!lastCircle) return;

		const box = document.querySelector('.box');
		const boxRect = box.getBoundingClientRect();
		const radius = 25;

		let x = e.clientX;
		let y = e.clientY;

		const isTrapped = lastCircle.dataset.trapped === 'true';

		const insideX = x > boxRect.left + radius && x < boxRect.right - radius;
		const insideY = y > boxRect.top + radius && y < boxRect.bottom - radius;

		if (!isTrapped) {
			if (insideX && insideY) {
				lastCircle.dataset.trapped = 'true';
				lastCircle.style.background = 'var(--purple)';
			}
			lastCircle.style.left = `${x - radius}px`;
			lastCircle.style.top = `${y - radius}px`;
		} else {
			const minX = boxRect.left + radius + 1;
			const maxX = boxRect.right - radius - 1;
			const minY = boxRect.top + radius + 1;
			const maxY = boxRect.bottom - radius - 1;

			const clampedX = Math.max(minX, Math.min(maxX, x));
			const clampedY = Math.max(minY, Math.min(maxY, y));

			lastCircle.style.left = `${clampedX - radius}px`;
			lastCircle.style.top = `${clampedY - radius}px`;
		}
	});
}

export function setBox() {
	const box = document.createElement('div');
	box.classList.add('box');
	box.style.position = 'absolute';
	box.style.left = '50%';
	box.style.top = '50%';
	box.style.transform = 'translate(-50%, -50%)';
	document.body.appendChild(box);
}
