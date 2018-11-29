const users = [{
  id: '1',
  name: 'Mike',
  email: 'mike@mailinator.com'
},
{
  id: '2',
  name: 'Joseph',
  email: 'joseph@mailinator.com',
  age: 25
},
{
  id: '3',
  name: 'Sarah',
  email: 'sarah@mailinator.com'
}]

const comments = [{
  id: '100',
  text: 'Sum often arouses curiosity due to its resemblance to classical Latin, it is not intended to have meaning.',
  author: '1',
  post: '2'
},
{
  id: '101',
  text: 'Focus on the textual content rather than upon overall presentation.',
  author: '2',
  post: '1'
},
{
  id: '102',
  text: 'Latin, it is not intended to have content rather than upon overall presentation.',
  author: '3',
  post: '3'
},
{
  id: '103',
  text: 'Lorem ipsum also approximates a typical distribution of',
  author: '1',
  post: '3'
}]

const posts = [{
  id: '1',
  title: 'First post',
  body: 'In publishing and graphic design, lorem ipsum is common placeholder',
  published: true,
  author: '1'
},
{
  id: '2',
  title: 'Second post',
  body: 'Where text is visible in a document, people tend to focus on',
  published: true,
  author: '1'
},
{
  id: '3',
  title: 'Third post',
  body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  published: false,
  author: '2'
}]

const db = {
  users,
  posts,
  comments
}

export { db as default }