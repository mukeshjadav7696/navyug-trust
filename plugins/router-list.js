import jquery from "jquery";

const headerMenu = {
  left: [
    { url: "/about-trust", title: "Trust" },
    { url: "/about-trustees", title: "Trustees" },
  ],
  right: [
    {
      title: "Institutes",
      url: "#",
      submenu: [
        { url: "/institute/arts-college", title: "Navyug Arts College" },
        { url: "/institute/science-college", title: "Navyug Science College" },
        { url: "/institute/commerce-college", title: "Navyug Commerce College" },
        { url: "/institute/industrial-training-institute", title: "Maniben Pithawalla Industrial Training Institute" },
        { url: "/institute/ckpcet", title: "C. K. Pithawalla College of Engineering & Technology" },
        { url: "/institute/ckpipsr", title: "C. K. Pithawalla Inst. of Pharmaceutical Science & Research" },
        { url: "/institute/english-school", title: "C. K. Pithawalla English School" },
      ],
    },
    /*
    { url: "/activities", title: "Activities" },
    { url: "/gallery", title: "Gallery" },
    */
    { url: "/contact-us", title: "Contact us" },
  ],
  sidebar: [
    { url: "/about-trust", title: "Trust" },
    { url: "/about-trustees", title: "Trustees" },
    { url: "/activities", title: "Activities" },
    { url: "/gallery", title: "Gallery" },
    { url: "/contact-us", title: "Contact us" },
  ],
  close: () => {
    console.log("close")
    jquery(".navbar-burger").trigger('click');
  }
};

export default headerMenu;
