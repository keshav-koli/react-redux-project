import { fetch_photos, fetch_gif, fetch_videos } from './api/mediaApi'
import ResultCard from './components/ResultCard';
import ResultGrid from './components/ResultGrid';
import SearchBar from './components/SearchBar';
import TabsComponent from './components/Tabs';

const App = () => {


  return (
    <>
      <div className='bg-gray-900 text-white h-screen w-full'>
        <SearchBar />
        <TabsComponent />
        <ResultGrid />
      </div>
    </>
  )
}

export default App