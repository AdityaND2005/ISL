import { useCallback } from "react";
import Home from "../components/Home";
import About from "../components/About";
import LearningMode from "../components/LearningMode";

const Index1 = () => {
  const onAboutTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='about']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='homeContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLearningTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='learningMode']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='contactText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="w-full relative bg-snow overflow-hidden flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border leading-[normal] tracking-[normal] text-left text-sm-5 text-gray-500 font-inter">
      <header className="flex flex-row items-start justify-start pt-0 pb-2 pl-[26px] pr-[30px] box-border max-w-full text-left text-5xl text-dimgray-100 font-inter">
        <div className="flex flex-row items-end justify-start gap-[50px] max-w-full mq750:gap-[25px]">
          <div className="w-[601px] flex flex-col items-start justify-start max-w-full">
            <img
              className="w-[132px] h-[46px] relative object-cover"
              loading="lazy"
              alt=""
              src="/logo@2x.png"
            />
          </div>
          <nav className="m-0 w-[327px] flex flex-col items-start justify-end pt-0 px-0 pb-2.5 box-border max-w-full mq1250:hidden">
            <nav className="m-0 self-stretch h-3 relative text-left text-5xl text-dimgray-100 font-inter">
              <a className="[text-decoration:none] absolute top-[0px] left-[232px] font-semibold text-[inherit] flex items-center w-[95px] h-3 min-w-[95px]">
                Convert
              </a>
              <a
                className="[text-decoration:none] absolute top-[0px] left-[114px] font-semibold text-[inherit] flex items-center w-[71px] h-3 min-w-[71px] cursor-pointer"
                onClick={onAboutTextClick}
              >
                About
              </a>
              <a
                className="[text-decoration:none] absolute top-[0px] left-[0px] font-semibold text-[inherit] flex items-center w-[70px] h-3 min-w-[70px] cursor-pointer"
                onClick={onHomeTextClick}
              >
                Home
              </a>
            </nav>
          </nav>
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-2.5">
            <div className="flex flex-row items-start justify-start gap-[46px] mq450:gap-[23px] mq750:hidden">
              <a
                className="[text-decoration:none] h-3 relative font-semibold text-[inherit] flex items-center whitespace-nowrap cursor-pointer"
                onClick={onLearningTextClick}
              >
                Learning Mode
              </a>
              <a
                className="[text-decoration:none] h-3 relative font-semibold text-[inherit] flex items-center min-w-[94px] cursor-pointer"
                onClick={onContactTextClick}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </header>
      <Home />
      <main className="self-stretch flex flex-col items-start justify-start max-w-full">
        <About />
        <LearningMode />
        <section className="self-stretch h-[966px] [background:linear-gradient(180deg,_#212121,_#715e53_20.5%,_#c19b85_50.6%)] overflow-hidden shrink-0 flex flex-row items-end justify-start max-w-full mt-[-1px] text-center text-109xl font-zen-kaku-gothic-new">
          <div className="h-[1039px] flex-1 relative max-w-full">
            <footer className="absolute top-[236px] left-[0px] w-[1366px] h-[751px]">
              <img
                className="absolute top-[0px] left-[676px] w-[690px] h-[721px] object-cover"
                loading="lazy"
                alt=""
                src="/image-6@2x.png"
              />
              <img
                className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[631px] object-cover"
                alt=""
                src="/image-5@2x.png"
              />
              <img
                className="absolute top-[173px] left-[472px] w-[455px] h-[11px] z-[1]"
                alt=""
                src="/final-2.svg"
              />
            </footer>
            <h1
              className="m-0 absolute top-[236px] left-[472px] text-inherit font-bold font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(0deg,_#fff,_#999)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1] mq450:text-13xl mq750:text-32xl"
              data-scroll-to="contactText"
            >
              Contact
            </h1>
          </div>
        </section>
      </main>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px]">
        <div className="h-[29px] relative font-semibold flex items-center">
          © 2024 ISL Connect. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Index1;