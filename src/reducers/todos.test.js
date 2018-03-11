//reducerTests.js
import todos from './todos';

const emptyState = { todos: [] };

let insertTodo = () => todos( emptyState, {
						type: 'ADD_TODO',
						title: 'New Todo',
						id: 1,
					} 
				);

test( 'Add todo ', () => {
		expect(insertTodo()).toEqual(
			{ todos: [ 
							{
								id: 1,
								title: 'New Todo',
								completed: false,
								items: []
							}
						]}
		) 
	}
);

test( 'toggle ToDo', () => {
	expect(
		todos( {
				todos: [
					{ 
						id: 1,
						completed:false
					}
				]
			}, {
				type: 'TOGGLE_TODO',
				id: 1,
				}
			)
		).toEqual(
	 		{
				todos: [
					{ 
						id: 1,
						completed:true
					}
				]
			}
		)
	}
);

test( 'remove ToDo', () => {
	expect(
		todos( {
				todos: [
					{ 
						id: 1,
						completed:false
					}
				]
			}, {
				type: 'REMOVE_TODO',
				id: 1,
				}
			)
		).toEqual(
	 		{
				todos: []
			}
		)
	}
);

test( 'Add Todo Item', () => {
		expect(
			todos(
				{
					todos: [
						{
							id: 1,
							items: [],
						}
					]
				},
				{
					type: 'ADD_TODO_ITEM',
					id: 1,
					itemId: 1,
					itemTitle: 'Todo Item',
					itemText: 'Todo Item Text',
				}
			)
		).toEqual (
			{
				todos: [
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
			}
		)
	}
);

test( 'Toggle Todo Item', () => {
		expect(
			todos(
				{
					todos: [
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
					]
				},
				{
					type: 'TOGGLE_TODO_ITEM',
					id: 1,
					itemId: 1,
				}
			)
		).toEqual (
			{
				todos: [
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
			}
		)
	}
);

test( 'Remove Todo Item', () => {
		expect(
			todos(
				{
					todos: [
						{
							id: 1,
							items: [
								{
									todoId: 1,
									id:1,
								}
							]
						}
					]
				},
				{
					type: 'REMOVE_TODO_ITEM',
					id: 1,
					itemId: 1,
				}
			)
		).toEqual (
			{
				todos: [
					{
						id:1,
						items: [
						]
					}
				]
			}
		)
	}
);

test( 'Add Contact', () => {
		expect(
			todos(
				{
					todos: [
						{
							id: 1,
							items: [
							{
								todoId: 1,
								id:1,
							}
							],
						}
					]
				},
				{
					type: 'ADD_CONTACT',
					id: 1,
					itemId: 1,
					contact: {name:'joe'},
				}
			)
		).toEqual (
			{
				todos: [
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
			}
		)
	}
);

test( 'Remove Contact', () => {
		expect(
			todos(
				{
					todos: [
						{
							id: 1,
							items: [
							{
								todoId: 1,
								id:1,
							}
							],
						}
					]
				},
				{
					type: 'REMOVE_CONTACT',
					id: 1,
					itemId: 1,
					contact: {name:'joe'},
				}
			)
		).toEqual (
			{
				todos: [
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
			}
		)
	}
);

test( 'Add Image', () => {
		expect(
			todos(
				{
					todos: [
						{
							id: 1,
							items: [
							{
								todoId: 1,
								id:1,
							}
							],
						}
					]
				},
				{
					type: 'ADD_IMAGE',
					id: 1,
					itemId: 1,
					image: {filename:'image.png'},
				}
			)
		).toEqual (
			{
				todos: [
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
			}
		)
	}
);

test( 'Remove Image', () => {
		expect(
			todos(
				{
					todos: [
						{
							id: 1,
							items: [
							{
								todoId: 1,
								id:1,
							}
							],
						}
					]
				},
				{
					type: 'REMOVE_IMAGE',
					id: 1,
					itemId: 1,
					image: {filename:'image.png'},
				}
			)
		).toEqual (
			{
				todos: [
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
			}
		)
	}
);
