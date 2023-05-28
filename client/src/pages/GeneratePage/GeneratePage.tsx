import Header from "../../components/Header/Header.tsx";
import MainLayout from "../../components/MainLayout/MainLayout.tsx";
import {useState} from "react";
import {BiImages} from "react-icons/bi";

const GeneratePage = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const [img, setImg] = useState('');

  const generateImgHandler = async () => {
    if (value) {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:8080/api/v1/dalle', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ prompt: value })
        });

        const data = await response.json();
        setImg(`data:image/jpeg;base64,${data.image}`);
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false);
      }
    }
  }
  return (
    <MainLayout >
      <Header />
      <div className="py-4">
        <h1 className="text-4xl mb-4 font-bold">Generate</h1>
        <p className="w-5/6">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequuntur dolor, error magnam magni nam neque numquam
          obcaecati sapiente? Accusamus consectetur consequuntur cupiditate,
          excepturi magni sapiente tenetur voluptates. Aut consectetur, facere.
        </p>
        <input
          className="text-gray-800 outline-0 px-4 py-2 rounded-md w-full bg-white/[0.6] my-10"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex items-center justify-center bg-gray-500/[0.2] py-10 rounded-md mb-10">
          {img ? (
            <div className="w-[440px]">
              <img src={img} />
            </div>
            ): (
            <div className="p-20 border-4 border-black dark:border-white rounded-md">
              {loading ? <div>Loading...</div> : <BiImages size="10em"/>}
            </div>
            )}
        </div>
        <div
          className="my-5 bg-blue-500 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-900 hover:cursor-pointer
           px-6 py-4 rounded-md text-white text-center uppercase"
          onClick={generateImgHandler}
        >Generate</div>
        <div className="my-5 bg-pink-500 hover:bg-pink-700 hover:cursor-pointer
           px-6 py-4 rounded-md text-white text-center uppercase"
        >Post</div>
      </div>
    </MainLayout>
  )
}

export default GeneratePage
