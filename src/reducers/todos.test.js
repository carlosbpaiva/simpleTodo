//reducerTests.js
import todos from './todos';

test( ' insert new todo ', () => {
		expect(
			todos( [], {
					type: 'ADD_TODO',
					title: 'New Todo',
					id: 1,
				} 
			)
		).toEqual(
			[
			{ 
				id: 1,
				title: 'New Todo',
				completed: false,
				items: []
			}
			]
		) 
	}
)