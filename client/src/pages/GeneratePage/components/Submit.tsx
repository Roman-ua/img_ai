import {ISubmitComponent} from "../../../types/interfaces.ts";

const Submit = ({ generateImgHandler, loading, shareButtonHandler }: ISubmitComponent) => (
  <>
    <button
      className="mt-5 bg-blue-500 hover:bg-blue-700 dark:bg-blue-700
           dark:hover:bg-blue-900 hover:cursor-pointer
           px-6 py-4 rounded-md text-white text-center uppercase w-full
           disabled:opacity-50"
      onClick={generateImgHandler}
      disabled={loading}
    >Generate</button>
    <button className="mt-5 bg-pink-500 hover:bg-pink-700 hover:cursor-pointer
           px-6 py-4 rounded-md text-white text-center uppercase
           w-full disabled:opacity-50"
            onClick={shareButtonHandler}
            disabled={loading}
    >Post</button>
  </>
)

export default Submit;
