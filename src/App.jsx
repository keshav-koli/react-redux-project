import { fetch_photos, fetch_gif, fetch_videos } from './api/mediaApi'
import SearchBar from './components/SearchBar';
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
    const result = await fetch_videos();
    console.log(result);

  }
  return (
    <>
      <div>
        <SearchBar />
      </div> 
    </>
  )
}

export default App