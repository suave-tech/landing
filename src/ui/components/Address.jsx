import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Address</span>
        312 W. 2nd St, #2537<br />Casper, WY 82601
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">email us</span>{" "}
        <a href="mailto:steve@mail.com">contact@suavetech.solutions</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">call me</span>{" "}
        <a href="Tel: +1 (470) 610-0091">+1 (470) 610-0091</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
