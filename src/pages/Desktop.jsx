const Desktop = () => {
  return (
    <div className="w-full relative bg-seashell overflow-hidden flex flex-col items-start justify-start pt-[27px] pb-[29px] pl-[85px] pr-4 box-border gap-[138px] leading-[normal] tracking-[normal] mq750:gap-[69px] mq750:pl-[42px] mq750:box-border mq450:gap-[34px] mq450:pl-5 mq450:box-border">
      <main className="self-stretch flex flex-col items-start justify-start gap-[120px] max-w-full mq750:gap-[60px] mq450:gap-[30px]">
        <header className="w-[1310px] flex flex-row items-start justify-between py-0 pl-0 pr-5 box-border gap-5 max-w-full mq1050:w-[494px]">
          <img
            className="h-[45px] w-[134px] relative object-cover"
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
          <nav className="m-0 w-[816px] flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border max-w-full mq1050:hidden">
            <nav className="m-0 self-stretch flex flex-row items-end justify-between py-0 pl-0 pr-0.5 gap-5 text-left text-5xl text-dimgray-100 font-inter">
              <div className="flex flex-col items-start justify-end pt-0 pb-px pl-0 pr-[13px]">
                <a className="[text-decoration:none] h-3 relative font-semibold text-[inherit] flex items-center shrink-0 min-w-[70px]">
                  Home
                </a>
              </div>
              <a className="[text-decoration:none] h-3 relative font-semibold text-[inherit] flex items-center min-w-[71px]">
                About
              </a>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px text-dimgray-300">
                <a className="[text-decoration:none] h-2.5 relative font-semibold text-[inherit] flex items-center shrink-0 min-w-[94px]">
                  Convert
                </a>
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px text-dimgray-400">
                <a className="[text-decoration:none] h-[11px] relative font-semibold text-[inherit] flex items-center shrink-0 whitespace-nowrap">
                  Learning Mode
                </a>
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px text-dimgray-200">
                <a className="[text-decoration:none] h-2.5 relative font-semibold text-[inherit] flex items-center shrink-0 min-w-[93px]">
                  Contact
                </a>
              </div>
            </nav>
          </nav>
        </header>
        <section className="self-stretch flex flex-row items-end justify-start [row-gap:20px] max-w-full text-left text-45xl text-gray-400 font-inter lg:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[31px] box-border min-w-[487px] max-w-full mq750:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[77px] max-w-full mq750:gap-[38px] mq450:gap-[19px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[35.5px] max-w-full mq750:gap-[18px]">
                <h1 className="m-0 w-[493px] h-10 relative text-inherit font-semibold font-[inherit] flex items-center shrink-0 max-w-full mq1050:text-32xl mq450:text-19xl">
                  Unlocking
                </h1>
                <h1 className="m-0 self-stretch h-[37px] relative text-inherit font-semibold font-[inherit] flex items-center shrink-0 text-gray-200 mq1050:text-32xl mq450:text-19xl">
                  <span>
                    <span>{`communication `}</span>
                    <span className="text-royalblue-200">beyond</span>
                  </span>
                </h1>
                <h1 className="m-0 h-[38px] relative text-inherit font-semibold font-[inherit] text-gray-300 flex items-center shrink-0 mq1050:text-32xl mq450:text-19xl">
                  words
                </h1>
              </div>
              <div className="w-[376px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-5 max-w-full text-[20px] text-gray-100">
                <div className="self-stretch relative font-semibold mq450:text-[16px]">
                  Welcome to ISL Connect,where sign language seamlessly
                  transforms into text and speech with cutting-edge precision
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
              </div>
            </div>
          </div>
          <div className="h-[649px] w-[613px] relative min-w-[613px] max-w-full ml-[-24px] lg:flex-1 mq750:min-w-full mq1050:ml-0">
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
        </section>
      </main>
      <footer className="w-[1269px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-[13.5px] text-darkgray font-inter">
        <div className="relative font-semibold">
          © 2024 ISL Connect. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Desktop;