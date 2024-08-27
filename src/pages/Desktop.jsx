import Navbar from "../components/Navbar";

const Desktop = () => {
  return (
    <div className="w-full relative bg-seashell overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[13px] box-border gap-[83px] leading-[normal] tracking-[normal] mq450:gap-[21px] mq700:gap-[41px]">
      <Navbar />
      <section className="w-[1375px] flex flex-col items-start justify-start py-0 pl-5 pr-0 box-border gap-[53px] max-w-full text-left text-45xl text-gray-400 font-inter mq700:gap-[26px]">
        <div className="self-stretch flex flex-col items-start justify-start pt-[116px] px-0 pb-[109px] box-border relative gap-7 max-w-full mq700:pt-[75px] mq700:pb-[71px] mq700:box-border">
          <div className="w-[513px] flex flex-row items-start justify-start pt-0 pb-2 pl-0 pr-5 box-border max-w-full">
            <h1 className="m-0 h-10 flex-1 relative text-inherit font-semibold font-[inherit] flex items-center max-w-full mq450:text-19xl mq950:text-32xl">
              Unlocking
            </h1>
          </div>
          <div className="w-[770px] flex flex-row items-start justify-start pt-0 pb-[7px] pl-0 pr-5 box-border max-w-full text-gray-200">
            <h1 className="m-0 h-[37px] flex-1 relative text-inherit font-semibold font-[inherit] flex items-center max-w-full mq450:text-19xl mq950:text-32xl">
              <span>
                <span>{`communication `}</span>
                <span className="text-royalblue-200">beyond</span>
              </span>
            </h1>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 pb-[46px] pl-0 pr-5 text-gray-300">
            <h1 className="m-0 h-[38px] relative text-inherit font-semibold font-[inherit] flex items-center mq450:text-19xl mq950:text-32xl">
              words
            </h1>
          </div>
          <div className="w-[376px] relative text-[20px] font-semibold text-gray-100 flex items-center max-w-full box-border pr-5 mq450:text-[16px]">
            Welcome to ISL Connect,where sign language seamlessly transforms
            into text and speech with cutting-edge precision
          </div>
          <button className="cursor-pointer border-royalblue-100 border-[1px] border-solid pt-[11px] pb-1.5 pl-7 pr-5 bg-royalblue-300 w-[190px] rounded-md box-border flex flex-row items-start justify-start gap-[9px]">
            <div className="h-10 w-[190px] relative rounded-md bg-royalblue-300 border-royalblue-100 border-[1px] border-solid box-border hidden" />
            <div className="flex-1 relative text-[15px] font-semibold font-inter text-lavender text-left z-[1]">
              Connect Now
            </div>
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <img
                className="w-[15px] h-[10.4px] relative object-cover z-[1]"
                alt=""
                src="/image@2x.png"
              />
            </div>
          </button>
          <div className="w-[613px] h-full !m-[0] absolute top-[0px] right-[0px] bottom-[0px] flex flex-row items-start justify-start z-[1]">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
              <img
                className="absolute top-[351px] left-[0px] w-[332px] h-[298px] object-cover"
                alt=""
                src="/3@2x.png"
              />
              <img
                className="absolute top-[0px] left-[57px] w-[275px] h-[353px] object-cover z-[1]"
                alt=""
                src="/1@2x.png"
              />
              <img
                className="absolute top-[212px] left-[234px] w-[379px] h-[317px] object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/2@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="w-[1309px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-[13.5px] text-darkgray">
          <div className="relative font-semibold">
            © 2024 ISL Connect. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Desktop;