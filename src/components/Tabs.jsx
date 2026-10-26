import { useDispatch, useSelector } from "react-redux"
import { setActiveTab } from "../redux/features/searchSlice";
import { useEffect } from "react";

const TabsComponent = () => {
  const allTabs = ['photos', 'videos', 'gif'];
  const selectedTab = useSelector(state => state.search.activeTab);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(selectedTab);

  }, [selectedTab])


  return (
    <div className=" flex gap-5 ms-9">
      {allTabs.map((item, idx) => {
        return (
          <button className={item === selectedTab ? `bg-green-500 hover:scale-105 py-1.5 px-3 uppercase border-2` : `hover:scale-105 bg-amber-600 py-1.5 px-3 uppercase border-2`} onClick={() => dispatch(setActiveTab(item))}
            key={idx}>{item}</button>
        )
      })}
    </div>
  )
}

export default TabsComponent