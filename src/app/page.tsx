import Image from "next/image";
export default function Home() {
  return (
    <>
    <div className=" h-screen bg-gradient-to-b from-green-900 to-green-300 relative">
      <div className="absolute bottom-0  z-50 flex justify-center w-full"> <center><img className="flex items-center justify-center ml-170   w-120 h-135 " src="https://framerusercontent.com/images/e8w16q5wJI84smxcPUFYRRZmI.png?scale-down-to=1024"></img></center>
             </div>
      <div className="flex justify justify-between text-amber-50 p-7 ">
        <div className="gap-5 m"><h3 className="font-serif mask-radial-from-neutral-950 text-[18px] text-white pl-25">ABI PHILIP</h3></div>
        <div className=" flex">
          <ul className="flex gap-10 text-[18px] text-m pr-20 font-extralight ">
            <a href="" ><li className="hover:text-amber-100 cursor-pointer">Home</li></a>
            <a href=""><li className="hover:text-amber-100 cursor-pointer">About</li></a>
            <a href=""><li className="hover:text-amber-100 cursor-pointer">Education</li></a>
            <a href=""><li className="hover:text-amber-100 cursor-pointer">Contacts</li></a>
          </ul>
        </div>
      </div>
      <div className="">
          <div className="text-4xl pt-30 pl-30 text-blue-50"><h1>Hey,I'm a Full Stack Developer</h1></div>
          <h1 className="pl-30 pt-10 text-9xl tracking-widest font-serif  font-stretch-expanded ">ABI PHILIP</h1>
          <div className="font-mono pl-30 pt-15  text-blue-50 w-50"><p>@2025</p></div>
          <div className="flex relative justify-between px-5">
            <div className="justify-start w-1/2 text-[20px] font-serif text-neutral-950 text-black bottom-0 pl-25 self-end-safe  mt-70 ml-130 ">
              <h1>E abi.802402@sxcce.edu.in</h1>
              <h2>T 6384741940</h2>
            </div>
             <div className="w-1/2  flex justify-end ml-20">
              <p className="flex text-left ml-20 mt-35  w-1/3  justify-start font-serif text-neutral-950 text-black bottom-0 pl-25 justify-self-center mr-20">  
              </p>
            </div>
            </div>
      </div>
    </div>
    </>
  );
}
