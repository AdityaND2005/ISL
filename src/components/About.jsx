import PropTypes from "prop-types";

const About = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch [background:linear-gradient(180deg,_#ffefef,_#a5a3c2_40.6%,_#9b97c1_66.1%)] overflow-hidden flex flex-row items-start justify-start pt-[97px] px-0 pb-[18px] box-border shrink-0 max-w-full z-[4] text-left text-109xl text-white font-zen-kaku-gothic-new mq450:pt-[41px] mq450:box-border mq750:pt-[63px] mq750:pb-5 mq750:box-border ${className}`}
      data-scroll-to="aboutContainer"
    >
      <div className="h-[650px] flex-1 flex flex-col items-start justify-start pt-[115px] px-0 pb-[397px] box-border relative gap-[84px] max-w-full mq450:gap-[21px] mq750:gap-[42px] mq750:pt-[49px] mq750:pb-[168px] mq750:box-border mq1050:pt-[75px] mq1050:pb-[258px] mq1050:box-border">
        <img
          className="w-[495px] h-full absolute !m-[0] top-[0px] bottom-[0px] left-[0px] max-h-full object-cover"
          alt=""
          src="/image-11@2x.png"
        />
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px] box-border max-w-full shrink-0">
          <div className="w-[475px] flex flex-col items-start justify-start gap-[30px] max-w-full">
            <h1 className="m-0 self-stretch h-[97px] relative text-inherit font-bold font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(0deg,_#fff,_#dfd0ff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center shrink-0 z-[2] mq450:text-13xl mq750:text-32xl">
              ABOUT
            </h1>
            <img
              className="w-[406px] relative max-h-full max-w-full z-[1]"
              alt=""
              src="/final.svg"
            />
          </div>
        </div>
        <div className="w-[275px] h-[13px] relative overflow-hidden shrink-0 hidden z-[2]" />
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full shrink-0 text-center text-29xl font-dm-sans">
          <img
            className="h-[628px] w-[569px] absolute !m-[0] top-[-323px] right-[0px] object-cover"
            loading="lazy"
            alt=""
            src="/image-2@2x.png"
          />
          <h1 className="m-0 flex-1 relative text-inherit font-medium font-[inherit] inline-block max-w-full z-[2] mq450:text-10xl mq750:text-19xl">
            Our project empowers individuals who are deaf or have speech
            impairments by translating Indian Sign Language (ISL) gestures into
            text in real-time. This technology bridges communication gaps,
            promoting inclusivity and making communication more accessible and
            intuitive for all.
          </h1>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {
  className: PropTypes.string,
};

export default About;
