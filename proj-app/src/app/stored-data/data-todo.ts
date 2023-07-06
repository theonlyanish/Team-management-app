import { Storycard } from './Storycard';
import { Comments } from './Storycard';

export const TODO_TASKS: Storycard[] = [
  {
    id: '1',
    title: 'Implementing the deleting function',
    description: 'The added description will be displayed here',
    status:'TO DO',
    comments:[{id:'1',com:'Here we go'},{id:'2',com:'Here we go'}],
  },
  {
    id: '2',
    title: 'Implementing Task Add',
    description: 'The added description will be displayed here',
    status:'TO DO',
    comments:[{id:'1',com:'Test Comment 1'},{id:'2',com:'Test Comment 2'}],
  },
  {
    id: '3',
    title: 'Implementing Task Add',
    description: 'The added description will be displayed here',
    status:'TO DO',
    comments:[],
  },
  {
    id: '4',
    title: 'Implementing Task Add',
    description: 'The added description will be displayed here',
    status:'TO DO',
    comments:[],
  },
  {
    id: '5',
    title: 'Implementing Task Pons',
    description: 'The added Pakaya',
    status:'TO DO',
    comments:[],
  },
  {
    id: '6',
    title: 'Implementing the deleting function',
    description: 'The added description will be displayed here',
    status:'DOING',
    comments:[{id:'1',com:'Here we go'},{id:'2',com:'Here we go'}],
  },
  {
    id: '7',
    title: 'Implementing Task Add',
    description: 'The added description will be displayed here',
    status:'DOING',
    comments:[{id:'1',com:'Here we go'},{id:'2',com:'Here we go'}],
  },

  {
    id: '8',
    title: 'Implementing the deleting function',
    description: 'The added description will be displayed here',
    status:'DONE',
    comments:[{id:'1',com:'Here we go'},{id:'2',com:'Here we go'}],
  },
  {
    id: '9',
    title: 'Implementing Task Add',
    description: 'The added description will be displayed here',
    status:'DONE',
    comments:[{id:'1',com:'Here we go'},{id:'2',com:'Here we go'}],
  },
  {
    id: '10',
    title: 'This is not Working',
    description: 'The added description will be displayed here',
    status:'DONE',
    comments:[{id:'1',com:'Here we go'},{id:'2',com:'Here we go'}],
  },
];