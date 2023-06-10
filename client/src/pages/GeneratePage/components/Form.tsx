import {IFormComponent} from "../../../types/interfaces.ts";

const Form = ({ author, prompt, setAuthor, setPrompt }: IFormComponent) => (
  <>
    <h1 className="text-4xl mb-4 font-bold">Generate</h1>
    <p className="w-5/6">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Consequuntur dolor, error magnam magni nam neque numquam
      obcaecati sapiente? Accusamus consectetur consequuntur cupiditate,
      excepturi magni sapiente tenetur voluptates. Aut consectetur, facere.
    </p>
    <div className="mt-10">
      <div>Author:</div>
      <input
        className="text-gray-800 outline-0 px-4 py-2 rounded-md w-full bg-white/[0.6] my-2"
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
    </div>
    <div className="my-2">
      <div>Prompt:</div>
      <input
        className="text-gray-800 outline-0 px-4 py-2 rounded-md w-full bg-white/[0.6] my-2"
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
    </div>
  </>
)

export default Form;
