import PropTypes from "prop-types";

const LearningMode = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch [background:linear-gradient(0deg,_#212121_60.1%,_#504d65_77.6%,_#6e6b89_88.1%,_#9b97c1)] overflow-hidden flex flex-col items-end justify-start pt-[177px] pb-0 pl-0 pr-[34px] box-border gap-[52px] shrink-0 max-w-full z-[2] mt-[-1px] text-center text-109xl font-zen-kaku-gothic-new mq750:gap-[26px] ${className}`}
      data-scroll-to="learningMode"
    >
      <div className="w-[1333px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[839px] flex flex-col items-start justify-start max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit font-bold font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(0deg,_#fff,_#999)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-13xl mq750:text-32xl">
            Learning Mode
          </h1>
          <img
            className="self-stretch h-[11px] relative max-w-full overflow-hidden shrink-0"
            alt=""
            src="/final-1.svg"
          />
        </div>
      </div>
      <div className="self-stretch h-[623px] relative">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[765px] object-cover"
          alt=""
          src="/image-3@2x.png"
        />
        <img
          className="absolute top-[262px] left-[413px] w-[953px] h-[361px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/image-4@2x.png"
        />
      </div>
    </section>
  );
};

LearningMode.propTypes = {
  className: PropTypes.string,
};

export default LearningMode;