import PropTypes from "prop-types";

const About = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch [background:linear-gradient(180deg,_#ffefef,_#a5a3c2_40.6%,_#9b97c1_66.1%)] overflow-hidden flex flex-col items-start justify-end pt-[97px] px-0 pb-[15px] box-border shrink-0 max-w-full z-[3] text-left text-109xl text-white font-zen-kaku-gothic-new mq450:pt-[41px] mq450:box-border mq750:pt-[63px] mq750:pb-5 mq750:box-border ${className}`}
      data-scroll-to="about"
    >
      <div className="self-stretch h-[650px] flex flex-col items-start justify-start py-[149px] pl-[462px] pr-[463px] box-border relative max-w-full mq450:py-[97px] mq450:px-5 mq450:box-border mq750:pl-[231px] mq750:pr-[231px] mq750:box-border">
        <img
          className="w-[495px] h-full absolute !m-[0] top-[0px] bottom-[0px] left-[0px] max-h-full object-cover"
          alt=""
          src="/image-11@2x.png"
        />
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <img
            className="h-[628px] w-[569px] absolute !m-[0] right-[-463px] bottom-[-356px] object-cover"
            loading="lazy"
            alt=""
            src="/image-2@2x.png"
          />
          <div className="flex-1 flex flex-row items-start justify-start pt-[94px] px-0 pb-[32.1px] box-border relative max-w-full z-[1]">
            <img
              className="h-[10.9px] w-[406px] relative max-w-full"
              alt=""
              src="/final.svg"
            />
            <h1 className="!m-[0] h-[122px] w-[475px] absolute top-[-28px] right-[-3px] text-inherit font-bold font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(0deg,_#fff,_#dfd0ff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center mq450:text-13xl mq750:text-32xl">
              ABOUT
            </h1>
          </div>
        </div>
      </div>
      <h1 className="m-0 self-stretch relative text-29xl font-medium font-dm-sans text-center z-[1] mt-[-313px] mq450:text-10xl mq750:text-19xl">
        Our project empowers individuals who are deaf or have speech impairments
        by translating Indian Sign Language (ISL) gestures into text in
        real-time. This technology bridges communication gaps, promoting
        inclusivity and making communication more accessible and intuitive for
        all.
      </h1>
    </section>
  );
};

About.propTypes = {
  className: PropTypes.string,
};

export default About;