import Image from "next/image";
export default function Home() {
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
          <div className="text-center w-65 lg:h-33.5 " >
            <div className="text-2xl text-white font-HankenGrotesk-Medium mb-3 lg:text-8 lg:mb-3.5">
              Great
            </div>
            <div className="text-base text-custom-blue font-HankenGrotesk-Medium text-custom-blue lg:text-lg">
              Your performance exceed 65% of the people conducting the test
              here!
            </div>
          </div>
        </div>

        <div className="flex flex-col font-dark-navy gap-3.5 w-full px-8 lg:w-3/6 lg:px-12 lg:text-lg lg:gap-4">
          <div className="mt-3.5 font-HankenGrotesk-Bold text-lg lg:text-2xl lg:mt-9.5 lg:mb-3">Summary</div>
          <div className="bg-red-500 bg-opacity-5 flex justify-between items-center h-14 px-4 rounded-xl">
            <div className="flex w-95 gap-x-3.5 ">
              <Image
                src="/images/icon-reaction.svg"
                alt="Logo"
                width={20}
                height={20}
                priority
              />
              <div className=" font-HankenGrotesk-Medium text-base text-custom-red lg:text-lg">
                Reaction
              </div>
            </div>
            <div className="font-HankenGrotesk-Bold text-dark-navy">
              <span>80 </span>
              <span className="opacity-50">/ 100</span>
            </div>
          </div>
          <div className="bg-yellow-500 bg-opacity-5 flex justify-between items-center h-14 px-4 rounded-xl">
            <div className="flex w-95 gap-x-3 ">
              <Image
                src="/images/icon-memory.svg"
                alt="Logo"
                width={20}
                height={20}
                priority
              />
              <div className="font-HankenGrotesk-Medium text-base text-custom-yellow lg:text-lg">
                Memory
              </div>
            </div>
            <div className="font-HankenGrotesk-Bold text-dark-navy">
              <span>80 </span>
              <span className="opacity-50">/ 100</span>
            </div>
          </div>
          <div className="bg-green-500 bg-opacity-5 flex justify-between items-center h-14 px-4 rounded-xl">
            <div className="flex w-95 gap-x-3">
              <Image
                src="/images/icon-verbal.svg"
                alt="Logo"
                width={20}
                height={20}
                priority
              />
              <div className="font-HankenGrotesk-Medium text-base text-custom-green lg:text-lg">
                Verbal
              </div>
            </div>
            <div className="font-HankenGrotesk-Bold text-dark-navy">
              <span>80 </span>
              <span className="opacity-50">/ 100</span>
            </div>
          </div>
          <div className="bg-blue-500 bg-opacity-5 flex justify-between items-center h-14 px-4 rounded-xl">
            <div className="flex w-95 gap-x-3">
              <Image
                src="/images/icon-visual.svg"
                alt="Logo"
                width={20}
                height={20}
                priority
              />
              <div className="font-HankenGrotesk-Medium text-base text-custom-blue-a lg:text-lg">
                Visual
              </div>
            </div>
            <div className="font-HankenGrotesk-Bold text-dark-navy">
              <span>80 </span>
              <span className="opacity-50">/ 100</span>
            </div>
          </div>
          <button className="bg-dark-navy h-14 rounded-full text-white mt-2.5 lg:mt-6.75">
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}
