import {BiImages} from "react-icons/bi";
import {IPreviewComponent} from "../../../types/interfaces.ts";

const Preview = ({ img, loading }: IPreviewComponent) => (
  <div className="flex items-center justify-center bg-gray-500/[0.2] py-10 rounded-md mb-8">
    {img ? (
      <div className="w-[350px]">
        <img src={img} />
      </div>
    ): (
      <div className="p-20 border-4 border-black dark:border-white rounded-md">
        {loading ? <div>Loading...</div> : <BiImages size="10em"/>}
      </div>
    )}
  </div>
)

export default Preview;
