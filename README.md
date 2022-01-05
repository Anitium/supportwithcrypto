# Summary
WebApp: The front-end of supportwithcrypto / api for the database management.

# Install
```bash
npm i
```

# Requests

```bash
# get posts
curl localhost:3000/api/posts | jq .

# post a post
curl -X POST localhost:3000/api/posts -H 'Content-Type: application/json'

# post another post
curl -X POST localhost:3000/api/posts -H 'Content-Type: application/json' -d '{"title":"my post","comment":"my comment"}'

# update a post
curl -X PUT localhost:3000/api/posts -H 'Content-Type: application/json' -d '{"_id":"61cce38c4875f14f733ff8d3", "title":"my post updated","comment":"my comment updated"}'

# delete a post
curl -X DELETE localhost:3000/api/posts -H 'Content-Type: application/json' -d '{"_id":"61cce38c4875f14f733ff8d3"}'
```
