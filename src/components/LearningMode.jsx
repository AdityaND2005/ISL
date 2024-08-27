import PropTypes from "prop-types";

const LearningMode = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch [background:linear-gradient(0deg,_#212121_60.1%,_#504d65_77.6%,_#6e6b89_88.1%,_#9b97c1)] overflow-hidden flex flex-col items-start justify-start pt-[167px] px-0 pb-0 box-border gap-[73px] shrink-0 max-w-full z-[3] mt-[-1px] text-center text-109xl font-zen-kaku-gothic-new mq450:gap-[18px] mq750:gap-9 ${className}`}
      data-scroll-to="learningModeContainer"
    >
      <div className="w-[1295px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <h1 className="m-0 w-[839px] relative text-inherit font-bold font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(0deg,_#fff,_#999)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center justify-center max-w-full mq450:text-13xl mq750:text-32xl">
          Learning Mode
        </h1>
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
        <img
          className="absolute h-[1.77%] w-[61.42%] top-[-11.72%] right-[21.89%] bottom-[109.95%] left-[16.69%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/final-1.svg"
        />
      </div>
    </div>
  );
};

LearningMode.propTypes = {
  className: PropTypes.string,
};

export default LearningMode;
