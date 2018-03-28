//reducerTests.js
import todoApp from './';
import todos from './todos'
import * as actions from './todos.actions';

test( 'Add todo ', () => {
		expect( 
			todos( 
				{
					filterText: '',
					items: []
				},
				actions.addTodo(
					2,
					'New Todo',
					'Some Text',
					true,
					{ 'name':'john'},
					'file://image.jpg'
					)
				)
		).toEqual( 
			{
				filterText: '',
				items: [ 
					{
						id: 2,
						title: 'New Todo',
						text: 'Some Text',
						completed: true,
						contact: { 'name':'john'},
						image: 'file://image.jpg',
					}
				]
			}
		)	 
	}
);

test( 'update ToDo', () => {
		expect(
			todos(
	 			{
					lastId: 1,
					filterText: '',
					items: [ 
						{
							id: 1,
							title: 'New Todo',
							text: '',
							completed: false,
							contact: null,
							image: null,
						}
					]
				},
			actions.updateTodo(1,'New Title','New Text', false, { 'name':'john'}, null)
			)
		).toEqual(
 			{
				lastId: 1,
				filterText: '',
				items: [ 
					{
						id: 1,
						title: 'New Title',
						text: 'New Text',
						completed: false,
						contact: { 'name':'john'},
						image: null,
					}
				]
			}
		)
	}
);

test( 'toggle ToDo', () => {
		expect(
			todos( 
				{
					lastId: 1,
					filterText: '',
					items: [ 
						{
							id: 1,
							title: 'New Title',
							text: 'New Text',
							completed: false,
							contact: null,
							image: null,
						},
					]
				},
				actions.toggleTodo(1, true)
			)
		).toEqual(
			{
				lastId: 1,
				filterText: '',
				items: [ 
					{
						id: 1,
						title: 'New Title',
						text: 'New Text',
						completed: true,
						contact: null,
						image: null,
					}
				]
			}
		)
	}
);

test( 'remove ToDo', () => 
	expect(
		todos( 
			{
				lastId: 1,
				filterText: '',
				items: [ 
					{
						id: 1,
						title: 'New Title',
						text: 'New Text',
						completed: false,
						contact: null,
						image: null,
					}
				]
			},
			actions.removeTodo(1)
		)
	).toEqual(
		{
			lastId: 1,
			filterText: '',
			items: [],
		}
	 )
);

test( 'Set Filter Text', () => {
		expect(
			todos(
				{
					lastId: 1,
					filterText: '',
					items: [ 
						{
							id: 1,
							title: 'New Title',
							text: 'New Text',
							completed: false,
							contact: {name: 'joe'},
							image: {filename:'image.png'},
						}
					]
				},
				actions.setFilterText( 'filter text' )
			)
		).toEqual (
			{
				lastId: 1,
				filterText: 'filter text',
				items: [ 
					{
						id: 1,
						title: 'New Title',
						text: 'New Text',
						completed: false,
						contact: {name: 'joe'},
						image: {filename:'image.png'},
					}
				]
			}
		)
	}
);
