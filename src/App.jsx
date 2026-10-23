import { fetch_photos, fetch_gif, fetch_videos } from './api/mediaApi'
const App = () => {

  let getPhotos = async () => {
    const result = await fetch_photos();
    console.log(result);

  }
  let getGifs = async () => {
    const result = await fetch_gif();
    console.log(result);

  }
  let getVideos = async () => {
    const result = await fetch_videos("a man walking in street");
    console.log(result);

  }
  return (
    <>
      <button onClick={getPhotos} className='bg-red-800 text-white px-2 py-3'>Get Photos</button>
      <button onClick={getGifs} className='bg-red-800 text-white px-2 py-3'>Get Gif</button>
      <button onClick={getVideos} className='bg-red-800 text-white px-2 py-3'>Get videos</button>
    </>
  )
}

export default App