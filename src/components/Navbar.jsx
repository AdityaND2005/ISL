import PropTypes from "prop-types";

const Navbar = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch bg-aliceblue flex flex-row items-end justify-between pt-5 pb-[13px] pl-3 pr-7 box-border top-[0] z-[99] sticky max-w-full gap-5 ${className}`}
    >
      <div className="w-[134px] flex flex-col items-start justify-end pt-0 px-0 pb-2 box-border">
        <img
          className="self-stretch h-[45px] relative max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/image-1@2x.png"
        />
      </div>
      <nav className="m-0 flex flex-row items-end justify-start py-0 pl-0 pr-0.5 box-border gap-[74px] max-w-full text-left text-5xl text-dimgray-100 font-inter mq450:gap-[18px] mq950:hidden mq950:gap-[37px]">
        <div className="flex flex-col items-start justify-end pt-0 pb-0.5 pl-0 pr-[13px]">
          <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[70px]">
            Home
          </a>
        </div>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
          <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[71px]">
            About
          </a>
        </div>
        <a className="[text-decoration:none] relative font-semibold text-dimgray-300 inline-block min-w-[94px]">
          Convert
        </a>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px text-dimgray-400">
          <a className="[text-decoration:none] relative font-semibold text-[inherit] whitespace-nowrap">
            Learning Mode
          </a>
        </div>
        <a className="[text-decoration:none] relative font-semibold text-dimgray-200 inline-block min-w-[93px]">
          Contact
        </a>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
