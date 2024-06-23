import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { Container, PostCard } from '../components'
import banner from '../assets/banner.png'
import { useNavigate } from 'react-router-dom'

function Home() {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        service.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="mt-20 py-8 mt-4 text-center h-[100vh] ">
                <Container className='pt-[140px] pb-10 px-0 relative w-full block m-0 p-0 box-border font-sans text-base font-normal text-slate-500 text-left  '>
                    <div className="relative z-auto w-full px-15 mr-auto ml-auto">
                        <div className="flex w-full mr-15 ml-15 font-sans text-base font-normal text-gray-700 text-left">
                            <div className="z-10 pb-60px relative w-full min-h-0.25 py-15 m-0 p-0 box-border font-sans text-base font-normal text-gray-700 text-left mt-24 mb-20">
                                <h1 className='py-2 text-4xl font-sans text-orange-500 leading-10 pb-23 pt-16px font-medium box-border text-bold'>
                                    Publish your passions, your way
                                </h1>
                                <p className='py-2 text-lg text-gray-400 pb-45 font-sans m-0 p-0 box-border font-normal text-left br'>
                                Share your story with the world. Create a beautiful, personalized blog that fits your brand. Grow your audience with built-in marketing tools, or transform your passion into revenue by gating access with a paywall.
                                </p>
                                <button 
                                onClick={() => navigate("/signup")}
                                className='inline-block px-6 py-2 bg-orange-500 duration-200 hover:bg-orange-600 rounded-full text-left'>
                                    Create Blog
                                </button>
                            </div>
                            <div className=' relative w-full min-h-px px-15 m-0 p-0 box-border font-sans text-base font-normal text-slate-500 text-left'>
                                <div className=' m-0 p-0 box-border font-sans text-base font-normal text-slate-500 text-left mt-24 mb-20'>
                                <img className='max-w-full h-auto overflow-hidden b-0 align-middle m-0 p-0 box-border font-sans text-base font-normal text-slate-500 ' src = {banner} alt='banner-img'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='z-0 absolute content-none top-44 right-3/4 overflow-hidden w-[800px] h-[800px] border-2 border-solid border-gray-400 block border-[#d1d1d1] rotate-[30deg] font-sans text-base font-normal text-[#212529] text-left'></div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home