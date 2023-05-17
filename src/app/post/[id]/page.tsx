import * as React from 'react';

// export interface ICustomIdProps {pram}

export default function CustomId({ params }: { params: { id: string } }) {
	return (
		<div>
			Hello! World.
			<h1>{params.id} times</h1>
		</div>
	);
}
