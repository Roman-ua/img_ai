import Header from "../../sharedComponents/Header/Header.tsx";
import MainLayout from "../../sharedComponents/MainLayout/MainLayout.tsx";
import useGenerateItem from "./hooks/useGenerateItem.ts";
import Form from "./components/Form.tsx";
import Preview from "./components/Preview.tsx";
import Submit from "./components/Submit.tsx";

const GeneratePage = () => {
  const {
    loading,
    prompt,
    setPrompt,
    author,
    setAuthor,
    img,
    generateImgHandler,
    shareButtonHandler
  } = useGenerateItem();

  return (
    <MainLayout >
      <Header />
      <div className="py-4">
        <Form author={author} setAuthor={setAuthor} prompt={prompt} setPrompt={setPrompt} />
        <Preview img={img} loading={loading} />
        <Submit loading={loading} generateImgHandler={generateImgHandler} shareButtonHandler={shareButtonHandler} />
      </div>
    </MainLayout>
  )
}

export default GeneratePage
