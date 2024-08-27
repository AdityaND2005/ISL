import PropTypes from "prop-types";

const Home = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[649px] relative bg-lavenderblush overflow-hidden shrink-0 text-left text-45xl text-gray-100 font-inter ${className}`}
      data-scroll-to="home"
    >
      <button className="cursor-pointer border-royalblue-100 border-[1px] border-solid pt-[11px] pb-3 pl-7 pr-5 bg-royalblue-300 absolute top-[492px] left-[44px] rounded-md box-border w-[190px] flex flex-row items-start justify-start gap-[9px]">
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
      </button>
      <div className="absolute top-[376px] left-[55px] text-xl font-semibold flex items-center w-[356px] h-24 mq450:text-base">
        Welcome to ISL Connect,where sign language seamlessly transforms into
        text and speech with cutting-edge precision
      </div>
      <h1 className="m-0 absolute top-[116px] left-[44px] text-inherit font-semibold font-[inherit] text-gray-400 flex items-center w-[493px] h-10 mq450:text-19xl mq750:text-32xl">
        Unlocking
      </h1>
      <h1 className="m-0 absolute top-[191px] left-[44px] text-inherit flex items-center w-[750px] h-[37px] text-gray-200 font-[inherit] mq450:text-19xl mq750:text-32xl">
        <span className="w-full">
          <span className="font-semibold">{`communication `}</span>
          <span className="font-cookie text-royalblue-200">beyond</span>
        </span>
      </h1>
      <h1 className="m-0 absolute top-[263px] left-[44px] text-inherit font-semibold font-[inherit] text-gray-300 flex items-center w-[193px] h-[38px] mq450:text-19xl mq750:text-32xl">
        words
      </h1>
      <div className="absolute h-full top-[0px] bottom-[0px] left-[742px] w-[613px] flex flex-row items-start justify-start z-[1]">
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
    </section>
  );
};

Home.propTypes = {
  className: PropTypes.string,
};

export default Home;
