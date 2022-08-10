export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
      {
        name: 'latestPosts',
        title: 'Latest Posts',
        type: 'array',
        of: [{type: 'latestPost'}],
      },      
      {
        name: 'recommendPostsTitle',
        title: 'Recommend Posts Title',
        type: 'string',
      },      
      {
        name: 'recommendPostsSubTitle',
        title: 'Recommend Posts Sub Title',
        type: 'string',
      },      
    ],   
  }