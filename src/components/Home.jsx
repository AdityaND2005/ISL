import PropTypes from "prop-types";

const Home = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-lavenderblush overflow-hidden flex flex-row items-start justify-start max-w-full text-left text-xl text-gray-100 font-inter ${className}`}
      data-scroll-to="homeContainer"
    >
      <div className="h-[649px] flex-1 relative overflow-hidden max-w-full">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[492px] left-[44px] w-[190px] flex flex-row items-start justify-start">
          <div className="flex-1 rounded-md bg-royalblue-300 border-royalblue-100 border-[1px] border-solid flex flex-row items-start justify-start pt-[11px] pb-3 pl-7 pr-5 gap-[9px]">
            <div className="h-[13px] flex-1 relative text-mini font-semibold font-inter text-lavender text-left flex items-center">
              Connect Now
            </div>
            <div className="flex flex-col items-start justify-start pt-[1.3px] px-0 pb-0">
              <img
                className="w-[15px] h-[10.4px] relative object-cover"
                alt=""
                src="/image1@2x.png"
              />
            </div>
          </div>
        </button>
        <div className="absolute right-[1000px] bottom-[177px] font-semibold flex items-center w-[356px] h-24 mq450:text-base">
          Welcome to ISL Connect,where sign language seamlessly transforms into
          text and speech with cutting-edge precision
        </div>
        <div className="absolute top-[116px] left-[44px] w-[750px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-[35px] max-w-full text-45xl text-gray-400">
          <h1 className="m-0 w-[493px] h-10 relative text-inherit font-semibold font-[inherit] flex items-center shrink-0 max-w-full mq450:text-19xl mq750:text-32xl">
            Unlocking
          </h1>
          <h1 className="m-0 self-stretch h-[37px] relative text-inherit flex items-center shrink-0 text-gray-200 font-[inherit] mq450:text-19xl mq750:text-32xl">
            <span>
              <span className="font-semibold">{`communication `}</span>
              <span className="font-cookie text-royalblue-200">beyond</span>
            </span>
          </h1>
          <h1 className="m-0 h-[38px] relative text-inherit font-semibold font-[inherit] text-gray-300 flex items-center shrink-0 mq450:text-19xl mq750:text-32xl">
            words
          </h1>
        </div>
        <div className="absolute h-full top-[0px] bottom-[0px] left-[742px] w-[613px] z-[1]">
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
  );
};

Home.propTypes = {
  className: PropTypes.string,
};

export default Home;