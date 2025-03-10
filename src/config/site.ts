export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Hospitality",
  description: "Make appointments more easy.",
  navItems: [
    {
      label: "Doctors",
      href: "/doctors",
    },
    {
      label: "Patients",
      href: "/patients",
    },
    {
      label: "Appointments",
      href: "/appointments",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Register",
      href: "/register",
    },
  ],
  navButtons: [
    {
      label: "Register",
      href: "/register",
    },
    {
      label: "Login",
      href: "/Login",
    }
  ],
  links: {
    github: "https://github.com/kuesmar"
  },
};
