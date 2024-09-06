// Posts.tsx
import React from 'react'
import PostCard from './PostCard'

function Posts() {
  const posts = [
    {
      imgSrc: 'https://f004.backblazeb2.com/file/vpad-dev/e26a586243f8c23e320b63cb4a5dbc84',
      title: 'treatise manifest o2',
      user: 'test user 2',
      date: '1:26 2/16/2024 PM',
    },
    {
      imgSrc: 'https://f004.backblazeb2.com/file/vpad-dev/a340c5511255058b5b91dfd0f082d8f0',
      title: 'spooderbae',
      user: 'test user 2',
      date: '1:25 2/16/2024 PM',
    },
    {
      imgSrc: 'https://f004.backblazeb2.com/file/vpad-dev/7143f20aa7e0ec7c91d7e6d074893c24',
      title: 'treatise manifest o2',
      user: 'test user 2',
      date: '1:26 2/16/2024 PM',
    },
    {
      imgSrc: 'https://f004.backblazeb2.com/file/vpad-dev/eaa821a1a228f068b3031d6ab5825a25',
      title: 'treatise manifest o2',
      user: 'test user 2',
      date: '1:26 2/16/2024 PM',
    },
    {
      imgSrc: 'https://f004.backblazeb2.com/file/vpad-dev/fc638574ae762d85f3254802f10aa927',
      title: 'treatise manifest o2',
      user: 'test user 2',
      date: '1:26 2/16/2024 PM',
    },
    {
      imgSrc: 'https://f004.backblazeb2.com/file/vpad-dev/e26a586243f8c23e320b63cb4a5dbc84',
      title: 'treatise manifest o2',
      user: 'test user 2',
      date: '1:26 2/16/2024 PM',
    },
    {
      imgSrc: 'https://f004.backblazeb2.com/file/vpad-dev/c05fa1f40c8c12f41e1387942d6c0678',
      title: 'treatise manifest o2',
      user: 'test user 2',
      date: '1:26 2/16/2024 PM',
    },
    {
      imgSrc: 'https://f004.backblazeb2.com/file/vpad-dev/232e0bc4157ce37979a07a5f059a14fd',
      title: 'treatise manifest o2',
      user: 'test user 2',
      date: '1:26 2/16/2024 PM',
    },
    {
      imgSrc: 'https://f004.backblazeb2.com/file/vpad-dev/3b7183ab2a2be0d1f269a1fba0f83078',
      title: 'treatise manifest o2',
      user: 'test user 2',
      date: '1:26 2/16/2024 PM',
    },
    {
      imgSrc: 'https://f004.backblazeb2.com/file/vpad-dev/7d2c152c83afb3018d3c8a0f79c80ce7',
      title: 'treatise manifest o2',
      user: 'test user 2',
      date: '1:26 2/16/2024 PM',
    },
    {
      imgSrc: 'https://f004.backblazeb2.com/file/vpad-dev/789ab1bb7447acad92d92e10bc447381',
      title: 'treatise manifest o2',
      user: 'test user 2',
      date: '1:26 2/16/2024 PM',
    },
    {
      imgSrc: 'https://f004.backblazeb2.com/file/vpad-dev/1f9ef2e04814049a24879bda4a1e44f4',
      title: 'treatise manifest o2',
      user: 'test user 2',
      date: '1:26 2/16/2024 PM',
    },
    // Add 9 more posts here with varying images and details
  ];

  return (
    <div className='mx-auto min-h-screen bg-[#0b0c0d] pt-[100px] w-full px-10'>
        <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 2xl:columns-6 gap-4 space-y-4'>
            {posts.map((post, index) => (
                <PostCard
                    key={index}
                    containerClassName='mb-4 break-inside-avoid'
                    imgSrc={post.imgSrc}
                    date={post.date}
                    title={post.title}
                    user={post.user}
                />
            ))}
        </div>
    </div>
  )
}

export default Posts



