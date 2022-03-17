import React from 'react';

import { DefaultLayout } from "../../layout";
import {posts} from '../../components/blog/posts'
import PostSummary from '../../components/blog/PostSummary';
import PostLi from '../../components/blog/PostLi';

const Blog = ({}) => {
  return (
  <content className="container mx-auto flex flex-col">
    <section className="flex flex-col justify-center items-center my-4">
      <div className="flex max-w-7xl mx-auto space-x-8 py-6 sm:px-6 lg:px-8">
        <div className='flex w-full md:w-2/3 flex-col space-y-8'>
          { 
            posts.map((post) => (
                <PostSummary key={post.id} image={post.image} title={post.title} summary={post.summary}/>
            ))
          }
        </div>
        <div className='md:flex hidden md:w-1/3 flex-col bg-white/80 rounded-lg'>
          { 
            posts.map((post) => (
                <PostLi key={post.id} title={post.title} summary={post.summary}/>
            ))
          }
        </div>
      </div>    
    </section>
  </content>
  );
}
  
Blog.Layout = DefaultLayout;

export default Blog;  
