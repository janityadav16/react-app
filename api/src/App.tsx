import React from "react";
import OpenAI from "openai";
import Lottie from "lottie-react";
import animation from "./animation.json";

function App() {
  const [idea, setIdea] = React.useState<string>("")
  const [apiKey, setAPIKey] = React.useState<string>("")
  const [images, setImages] = React.useState<string[]>([])
  const [loading, setLoading] = React.useState<boolean>(false)
  const openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true,
  });

  const handleFetch = async () => {
    try {
      setLoading(true)
      const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: idea,
        n: 1,
        size: "1024x1024",
      });
      console.log(response.data)
      setImages(response.data.map((data: any) => data.url))
      setLoading(false)
    } catch {
      setLoading(false)
    }
  }


  return (
    <div className=" bg-slate-700 h-screen items-center justify-center ">

      <div className="text-center w-full">
        <div className="text-center items-center">
          <input className="m-8 w-full p-4 bg-slate-500 rounded-md max-w-[30vw]  border border-solid border-black border-3 text-center " name="Token" type="text" placeholder="Enter your open AI API Key" onChange={(e) => setAPIKey(e.target.value)} />
          <input className="m-8 w-full p-4 bg-slate-500 rounded-md max-w-[60vw]  border border-solid border-black border-3 text-center " name="Repo" type="text" placeholder="Enter your idea for image" onChange={(e) => setIdea(e.target.value)} />
        </div>
        <div className="text-center items-center m-20">
          <button className="  bg-blue-500 hover:bg-blue-700 text-white font-italic  py-2 px-4 rounded transition  transform  hover:-translate-y-1  motion-reduce:transition-none motion-reduce:hover:transform-none " onClick={() => {
            handleFetch()
          }} >Enter</button>
        </div>
      </div>

      <div className="text-center items-center justify-between w-full  bg-slate-700">
        {
          loading && (
            <div className=" max-w-screen  border-4 border-black   justify-center items-center rounded-lg">
              <div className="border-black border-3 rounded-lg items-center justify-center">
                <Lottie animationData={animation} loop={true} />;
              </div>
            </div>
          )
        }

        {
          images.map((img: string) => {
            return (
              <div className=" max-w-screen  border-4 border-black   justify-center items-center rounded-lg">
                <div className="border-black border-3 rounded-lg items-center justify-center">
                  <img src={img} className="w-full" />
                </div>
              </div>
            )
          })
        }

      </div>
    </div >
  );
}

export default App
