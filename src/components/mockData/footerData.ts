
export const siteLinks = {
  contactUs: "#contactus",
  ourservices: "#ourservices",
  ourtechstack:"#ourtechstack",
  login: "/user/login",
  signUp: "/user/register"
}

export default {
  data: [
    {
      title: "",
      links: [
        {
          label: "Our services",
          link: siteLinks.ourservices,
        },
        {
          label: "Login",
          link: siteLinks.login,
        },
      ],
    },
    {
      title: "",
      links: [
        {
          label: "Our Tech Stack",
          link: siteLinks.ourtechstack,
        },
        {
          label: "Sign up",
          link: siteLinks.signUp,
        },
      ],
    },
    {
      title: "",
      links: [
        {
          label: "Contact Us",
          link: siteLinks.contactUs,
        },
      ],
    },
  ],
};
