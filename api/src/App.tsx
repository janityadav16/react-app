import React from "react";
// import OpenAI from "openai";
import Lottie from "lottie-react";
import animation from "./animation.json";
import { Input } from "./component/ui/input"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./component/ui/sheet"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./component/ui/tabs"


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./component/ui/dialog"


function App() {
  const [idea, setIdea] = React.useState<string>("")
  // const [apiKey, setAPIKey] = React.useState<string>("")
  const [images, setImages] = React.useState<string[]>([])
  const [loading, setLoading] = React.useState<boolean>(false)
  // const openai = new OpenAI({
  //   apiKey: apiKey,
  //   dangerouslyAllowBrowser: true,
  // });



  const handleFetch = async () => {
    try {
      setLoading(true)

      const response = await fetch(`https://api.github.com/repos/thesaas-company/datasherlock/pulls`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `xxxxx`
        },
      })
      console.log(await response.json())
      setLoading(false)
    } catch {
      setLoading(false)
    }
  }


  return (
    <div className=" bg-slate-700 h-screen items-center justify-center ">

      <div className="text-center w-full">
        <div className="text-center items-center">
          <Input type="text" placeholder="Github Token" />

          <Sheet>
            <SheetTrigger>Open</SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Make changes to your account here.</TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
          </Tabs>


          <Dialog>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* <input className="m-8 w-full p-4 bg-slate-500 rounded-md max-w-[30vw]  border border-solid border-black border-3 text-center " name="Token" type="text" placeholder="Enter your open AI API Key" onChange={(e) => setAPIKey(e.target.value)} /> */}
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