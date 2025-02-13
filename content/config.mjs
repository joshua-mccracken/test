
const config = {
    title: "The Word of Adonai",
    description: "",
    author: "Joshua McCracken",
    logo: "",
    domain: "",
    navbarTitle: {
        text: "The Word of Adonai",
        logo: "", // optional
      },
    navLinks: [{ href: "/", name: "Home" }],
    search: {
        provider: "kbar",
        kbarConfig: {
            defaultActions: [
              {
                id: "blog",
                name: "Blog",
                keywords: "content",
                perform: () => (window.location.pathname = "blog"),
              },
            ],
          },
      },
    showToc: true,
  };
  
  export default config;