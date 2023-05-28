import  { AiOutlineCloudServer } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdLightMode, MdModeNight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {setMode} from "../../store/slices/modeSlice.ts";

const Header = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state: any) => state.modeReducer);

  const setModeHandler = (modeName: string) => {
    dispatch(setMode(modeName));
  };

  return (
    <div className="flex items-center justify-between py-4 border-b-2 border-gray-100 dark:border-gray-600">
      <Link to="/">
        <div className="flex items-center">
          <AiOutlineCloudServer size="2em" />
          <div className="ml-3">IMG_AI</div>
        </div>
      </Link>
      <div className="flex items-center">
        <Link to="/generate">
          <div className="bg-blue-500 dark:bg-blue-700 px-6 py-2 rounded-md text-white mr-4">
            Generate
          </div>
        </Link>
        <div>
          {mode !== 'white' ? (
            <div
              className="p-2 hover:bg-gray-500/[.06] hover:cursor-pointer rounded-md"
              onClick={() => setModeHandler('white')}
            >
              <MdLightMode/>
            </div>
            ) :
            (
            <div
              className="p-2 hover:bg-gray-500/[.06] hover:cursor-pointer rounded-md"
              onClick={() => setModeHandler('dark')}
            >
              <MdModeNight/>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header;
