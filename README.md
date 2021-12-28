# Collective API

This app contains all of the endpoints needed for:

- React Curriculum Checkpoints

## NOTE

This server stores everything in-memory, so every time you restart the server, you get a clean slate.

## Install

```bash
git clone https://github.com/gSchool/collective-api.git
cd collective-api
npm install
npm start
```

Then you can see the API running on [http://localhost:8082](http://localhost:8082)

## API Endpoints

### Components Unit - Shopping Cart
- GET: `http://localhost:8082/api/products`
- GET: `http://localhost:8082/api/items`

### API Unit - Bookstore
- GET (all books) / POST (add book): `http://localhost:8082/api/books`
- DELETE: `http://localhost:8082/api/books/:id`
- PATCH (add book to cart): `http://localhost:8082/api/books/cart/add/:id`
- PATCH (remove book from cart): `http://localhost:8082/api/books/cart/remove/:id`

### Project: React Inbox
- GET (all messages): `http://localhost:8082/api/messages`
- PATCH (updates multiple messages, see API for req.body requirements): `http://localhost:8082/api/messages`  
``` Example req.body to mark messages 1,2,3 as read
{
  "messageIds": [1,2,3],
  "command": "read",
  "read": true
}
```

### Redux Unit - Reddit Clone
- GET (all posts) /POST (add post): `http://localhost:8082/api/posts`
- DELETE: `http://localhost:8082/api/posts/:id`
- GET (up-vote): `http://localhost:8082/api/posts/votes/increase/:id`
- GET (down-vote): `http://localhost:8082/api/posts/votes/decrease/:id`

- GET (all comments) / POST (add comment): `http://localhost:8082/api/comments`
- DELETE: `http://localhost:8082/api/comments/:id`

### Router Unit - User Login
- GET (all users): `http://localhost:8082/api/users`
- POST (add user): `http://localhost:8082/api/users`
- POST (user login): `http://localhost:8082/api/login` (REQUIRES USER EMAIL AND PASSWORD)

