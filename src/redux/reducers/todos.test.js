//reducerTests.js
import todoApp from './';
import todos from './todos'
import * as actions from '../actions';

test( 'Add todo ', () => {
		expect( 
			todos( {
				todos: []},
				actions.addTodo('New Todo'))
			).toEqual( [ 
							{
								id: 1,
								title: 'New Todo',
								completed: false,
								items: []
							}
						]
		) 
	}
);

test( 'toggle ToDo', () => {
		expect(
			todos( [
						{ 
							id: 1,
							completed:false
						}
					],	actions.toggleTodo(1)
			)
		).toEqual(
 			[
				{ 
					id: 1,
					completed:true
				}
			]
		)
	}
);

test( 'remove ToDo', () => 
	expect(
		todos( [
					{ 
						id: 1,
						completed:false
					}
				], actions.removeTodo(1)
			)
		).toEqual( [] )
);

test( 'Add Todo Item', () =>
	expect(
		todos([
					{
						id: 1,
						items: [],
					}
				], actions.addTodoItem(1, 'Todo Item', 'Todo Item Text')
		)
	).toEqual ( 
		[
			{
				id:1,
				items: [
					{
						todoId: 1,
						id:1,
						title: 'Todo Item',
						text: 'Todo Item Text',
						completed: false,
						contact: null,
						image: null,
					}
				]
			}
		]
	)
);

test( 'Toggle Todo Item', () => {
		expect(
			todos([
					{
						id: 1,
						items: [
							{
								todoId: 1,
								id:1,
								title: 'Todo Item',
								text: 'Todo Item Text',
								completed: false,
								attachments: [],
							}
						]
					}
				], actions.toggleTodoItem(1,1)
			)
		).toEqual (
			[
				{
					id:1,
					items: [
						{
							todoId: 1,
							id:1,
							title: 'Todo Item',
							text: 'Todo Item Text',
							completed: true,
							attachments: [],
						}
					]
				}
			]
		)
	}
);

test( 'Remove Todo Item', () => {
		expect(
			todos(
				[
					{
						id: 1,
						items: [
							{
								todoId: 1,
								id:1,
							}
						]
					}
				], actions.removeTodoItem(1,1)
			)
		).toEqual (
			[
				{
					id:1,
					items: [
					]
				}
			]
		)
	}
);

test( 'Add Contact', () => {
		expect(
			todos(
				[
					{
						id: 1,
						items: [
						{
							todoId: 1,
							id:1,
						}
						],
					}
				], actions.addContact( 1, 1, {name:'joe'} )
			)
		).toEqual (
			[
				{
					id:1,
					items: [
						{
							todoId: 1,
							id:1,
							contact: {name: 'joe'}
						}
					]
				}
			]
		)
	}
);

test( 'Remove Contact', () => {
		expect(
			todos(
				[
					{
						id: 1,
						items: [
						{
							todoId: 1,
							id:1,
						}
						],
					}
				], actions.removeContact( 1, 1 )
			)
		).toEqual (
			[
				{
					id:1,
					items: [
						{
							todoId: 1,
							id:1,
							contact: null,
						}
					]
				}
			]
		)
	}
);

test( 'Add Image', () => {
		expect(
			todos(
				[
					{
						id: 1,
						items: [
						{
							todoId: 1,
							id:1,
						}
						],
					}
				], actions.addImage( 1, 1, {filename:'image.png'} )
			)
		).toEqual (
			[
				{
					id:1,
					items: [
						{
							todoId: 1,
							id:1,
							image: {filename:'image.png'},
						}
					]
				}
			]
		)
	}
);

test( 'Remove Image', () => {
		expect(
			todos(
				[
					{
						id: 1,
						items: [
						{
							todoId: 1,
							id:1,
						}
						],
					}
				], actions.removeImage( 1, 1 )

			)
		).toEqual (
			[
				{
					id:1,
					items: [
						{
							todoId: 1,
							id:1,
							image: null,
						}
					]
				}
			]
		)
	}
);
