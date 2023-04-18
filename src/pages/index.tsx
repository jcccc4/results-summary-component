import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  interface DataItem {
    [key: string]: any;
    icon: string;
    category:string;
    score:string;
    // add other properties here as needed
  }
  const [data, setData] = useState<DataItem| null>(null);
  

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/data');
      const json = await res.json();
      console.log(json)
      setData(json);
    }
  
    fetchData();
  
    // Return a cleanup function that takes no arguments
    return () => {};
  }, []);
  
  if (!data) {
    return <div>Loading...</div>;
  }

  function bgColor(num: number): string {
    switch (num) {
      case 0: {
        return `bg-red-500 bg-opacity-5 flex justify-between items-center h-14 px-4 rounded-xl`;
      }
      case 1: {
        return `bg-yellow-500 bg-opacity-5 flex justify-between items-center h-14 px-4 rounded-xl`;
      }
      case 2: {
        return `bg-green-500 bg-opacity-5 flex justify-between items-center h-14 px-4 rounded-xl`;
      }
      case 3: {
        return `bg-blue-500 bg-opacity-5 flex justify-between items-center h-14 px-4 rounded-xl`;
      }
      default: {
        return `bg-black-500 bg-opacity-5 flex justify-between items-center h-14 px-4 rounded-xl`;
      }
    }
  }
  function color(num: number): string {
    switch (num) {
      case 0: {
        return `font-HankenGrotesk-Medium text-base text-font-red lg:text-lg`;
      }
      case 1: {
        return `font-HankenGrotesk-Medium text-base text-font-yellow lg:text-lg`;
      }
      case 2: {
        return `font-HankenGrotesk-Medium text-base text-font-green lg:text-lg`;
      }
      case 3: {
        return `font-HankenGrotesk-Medium text-base text-font-blue lg:text-lg`;
      }
      default: {
        return `font-HankenGrotesk-Medium text-base text-black lg:text-lg`;
      }
    }
  }
  return (
    <main className="lg:flex justify-center items-center h-screen w-screen bg-very-light-blue">
      <div className="lg:h-128 lg:flex lg:w-184 bg-white lg:rounded-custom-box-lg">
        <div className="bg-gradient-to-b from-violet-a from-0% via-violet-b via-0.01% to-violet-c to-100% h-356  rounded-custom-box flex flex-col items-center lg:h-128 lg:w-3/6  lg:rounded-custom-box-lg">
          <div className="font-HankenGrotesk-Medium text-lg text-light-blue mt-3.5 lg:text-2xl lg:mt-9.5 lg:mb-8.75">
            Your Result
          </div>
          <div className="bg-gradient-to-b from-circle-a to-circle-b rounded-full h-140 w-140 my-29 text-center flex justify-center items-center flex-col lg:h-50 lg:w-50 lg:mb-6.5">
            <div className="font-HankenGrotesk-ExtraBold text-56 text-white h-72 lg:text-7xl">
              76
            </div>
            <div className="font-HankenGrotesk-Bold text-base text-light-blue text-opacity-51 lg:text-lg">
              of 100
            </div>
          </div>
          <div className="text-center w-65 lg:h-33.5 ">
            <div className="text-2xl text-white font-HankenGrotesk-Medium mb-3 lg:text-8 lg:mb-3.5">
              Great
            </div>
            <div className="text-base text-blue-a font-HankenGrotesk-Medium text-blue-a lg:text-lg">
              Your performance exceed 65% of the people conducting the test
              here!
            </div>
          </div>
        </div>

        <div className="flex flex-col font-dark-navy gap-3.5 w-full px-8 lg:w-3/6 lg:px-12 lg:text-lg lg:gap-4">
          <div className="mt-3.5 font-HankenGrotesk-Bold text-lg lg:text-2xl lg:mt-9.5 lg:mb-3">
            Summary
          </div>
          {Object.keys(data).map((item, i) => (
            <div className={bgColor(i)} key={`item${i}`}>
              <div className="flex w-95 gap-x-3.5 ">
                <Image
                  src={`${data[item].icon}`}
                  alt="Logo"
                  width={20}
                  height={20}
                  priority
                />
                <div className={color(i)}>{`${data[item].category}`}</div>
              </div>
              <div className="font-HankenGrotesk-Bold text-dark-navy">
                <span> {`${data[item].score}`} </span>
                <span className="opacity-50">/ 100</span>
              </div>
            </div>
          ))}

          <button className="bg-dark-navy h-14 rounded-full text-white mt-2.5 lg:mt-6.75">
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}
