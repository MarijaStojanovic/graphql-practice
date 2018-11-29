const Query = {
  users(parent, args, { db }, info) {
    if (!args.query) {
      return db.users
    }
    return db.users.filter((user) => {
      return user.name.toLowerCase().includes(args.query.toLowerCase())
    })
  },
  posts(parent, args, { db }, info) {
    if (!args.query) {
      return db.posts
    }
    return db.posts.filter((post) => {
      const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase())
      const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase())
      return isTitleMatch || isBodyMatch
    })
  },
  comments(parent, args, { db }, info) {
    return db.comments
  },
  me() {
    return {
      id: '123141b3',
      name: 'Marija Stojanovic',
      age: 27,
      email: 'marija@mailinator.com'
    }
  },
  post() {
    return {
      id: '123141b3',
      title: 'This is some title',
      published: true,
      body: 'Lorem ipsum....'
    }
  }
}

export { Query as default }