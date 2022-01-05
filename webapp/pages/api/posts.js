import { findPosts, insertPost, updatePost, deletePost } from '../../lib/service/postsvc';

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'GET': {
      const result = await findPosts();
      return res.json(result);
    }

    case 'POST': {
      const post = req.body;
      const result = await insertPost(post);
      return res.json(result);
    }

    case 'PUT': {
      const post = req.body;
      const result = await updatePost(post);
      return res.json(result);
    }

    case 'DELETE': {
      const post = req.body;
      const result = await deletePost(post);
      return res.json(result);
    }
  }
};
