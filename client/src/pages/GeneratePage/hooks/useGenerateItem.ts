import api from "../../../http/api.ts";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {PATH} from "../../../constants/path.ts";

const useGenerateItem = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [author, setAuthor] = useState('');
  const [img, setImg] = useState('');

  const generateImgHandler = async () => {
    if (prompt) {
      try {
        setLoading(true);
        const { data }: any = await api.post(PATH.GENERATE_IMG, { prompt });

        setImg(`data:image/jpeg;base64,${data.image}`);
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false);
      }
    }
  }

  const shareButtonHandler = async () => {
    if (img && prompt) {
      try {
        setLoading(true);
        const { data }: any = await api.post(PATH.SHARE_IMG, {
          name: author,
          prompt,
          image: img
        });

        if (data.success) {
          navigate(PATH.ROOT);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return {
    loading,
    prompt,
    setPrompt,
    author,
    setAuthor,
    img,
    generateImgHandler,
    shareButtonHandler
  }
}

export default useGenerateItem;
