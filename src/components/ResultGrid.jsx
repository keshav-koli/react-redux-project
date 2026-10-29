import React, { act, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetch_gif, fetch_photos, fetch_videos } from '../api/mediaApi';
import { setResult } from '../redux/features/searchSlice';

const ResultGrid = () => {
  const { activeTab, query } = useSelector(state => state.search);
  // const query = useSelector(state => state.search.query);
  const disptach = useDispatch();
  const [data, setData] = useState([])


  useEffect(() => {
    if (activeTab == 'photos' && query) getPhotos(query);
    if (activeTab == 'videos' && query) getVideos(query);
    if (activeTab == 'gif' && query) getGifs(query);
  }, [activeTab, query])


  let getPhotos = async (searchText) => {

    const result = await fetch_photos(searchText);

    const new_response = result.map((item) => ({
      id: item.id,
      type: 'photo',
      title: item.alt_description,
      thumbnail: item.urls.small,
      src: item.urls.full,
      url: item.links.html
    }))
    console.log(new_response);
    disptach(setResult(new_response))
    setData(new_response);

  }

  let getVideos = async (searchText) => {
    const result = await fetch_videos(searchText);
    let new_response = result.map(item => {
      return {
        id: item.id,
        type: 'video',
        title: item.title,
        thumbnail: item.thumbnail,
        src: item.urls.mp4,
        url: item.urls.mp4_preview,
      }
    })
    console.log(new_response);
    disptach(setResult(new_response))
    setData(new_response);

  }

  let getGifs = async (searchText) => {
    const result = await fetch_gif(searchText);
    console.log(result);
    let new_response = result.map(item => {
      return {
        id: item.id,
        type: item.type,
        title: item.title,
        thumbnail: item.thumbnail || '',
        src: item.embed_url,
        url: item.url,
      }
    })
    console.log(new_response);
    disptach(setResult(new_response))
    setData(new_response);

  }


  return (
    <div className='flex flex-wrap gap-5 border border-amber-700 m-2 p-3 '>
      {
        data.map(item => {
          return <div className='border h-64 w-56'>{item.id}</div>
        })
      }
    </div>
  )
}

export default ResultGrid