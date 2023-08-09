import video from "../assets/images/video.svg";
import videoDark from "../assets/images/videoDark.svg";

export const DataHelpVideo = () => {
  const themeLocalStorage: any = localStorage.getItem("Theme");
  const themeState = JSON.parse(themeLocalStorage);

  return [
    {
      title: "Video Tutorial Dashboard",
      image: themeState ? video : videoDark,
      url: "https://www.youtube.com/watch?v=fF7c1esNhGI&feature=youtu.be",
    },
    {
      title: "Video Tutorial Funnel",
      image: themeState ? video : videoDark,
      url: "https://www.youtube.com/watch?v=fF7c1esNhGI&feature=youtu.be",
    },
    {
      title: "Video Tutorial Leads",
      image: themeState ? video : videoDark,
      url: "https://www.youtube.com/watch?v=fF7c1esNhGI&feature=youtu.be",
    },
    {
      title: "Video Tutorial Bookings",
      image: themeState ? video : videoDark,
      url: "https://www.youtube.com/watch?v=fF7c1esNhGI&feature=youtu.be",
    },
    {
      title: "Video Tutorial Ventas",
      image: themeState ? video : videoDark,
      url: "https://www.youtube.com/watch?v=fF7c1esNhGI&feature=youtu.be",
    },
    {
      title: "Video Tutorial Tracking",
      image: themeState ? video : videoDark,
      url: "https://www.youtube.com/watch?v=fF7c1esNhGI&feature=youtu.be",
    },
    {
      title: "Video Tutorial Reglas de URL",
      image: themeState ? video : videoDark,
      url: "https://www.youtube.com/watch?v=fF7c1esNhGI&feature=youtu.be",
    },
    {
      title: "Video Tutorial Productos",
      image: themeState ? video : videoDark,
      url: "https://www.youtube.com/watch?v=fF7c1esNhGI&feature=youtu.be",
    },
    {
      title: "Video Tutorial Etiquetas",
      image: themeState ? video : videoDark,
      url: "https://www.youtube.com/watch?v=fF7c1esNhGI&feature=youtu.be",
    },
    {
      title: "Video Tutorial Atribución",
      image: themeState ? video : videoDark,
      url: "https://www.youtube.com/watch?v=fF7c1esNhGI&feature=youtu.be",
    },
    {
      title: "Video Tutorial Perfil",
      image: themeState ? video : videoDark,
      url: "https://www.youtube.com/watch?v=fF7c1esNhGI&feature=youtu.be",
    },
    {
      title: "Video Tutorial Integraciones",
      image: themeState ? video : videoDark,
      url: "https://www.youtube.com/watch?v=fF7c1esNhGI&feature=youtu.be",
    },
    {
      title: "Video Tutorial Facturación",
      image: themeState ? video : videoDark,
      url: "https://www.youtube.com/watch?v=fF7c1esNhGI&feature=youtu.be",
    },
  ];
};
