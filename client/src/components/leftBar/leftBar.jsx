import "./leftBar.css";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <a href="/" className="menuIcon" title="Mosaic">
          <img src="/general/mainLogo.png" alt="logo" className="logo" />
        </a>
        <a href="/" className="menuIcon" title="Home">
          <img src="/general/home.svg" alt="logo" />
        </a>
        <a href="/" className="menuIcon" title="Create">
          <img src="/general/create.svg" alt="" />
        </a>
        <a href="/" className="menuIcon" title="Updates">
          <img src="/general/updates.svg" alt="" />
        </a>
        <a href="/" className="menuIcon" title="Messages">
          <img src="/general/messages.svg" alt="" />
        </a>
      </div>
      <a href="/" className="menuIcon" title="Settings">
        <img src="/general/settings.svg" alt="" />
      </a>
    </div>
  );
};

export default LeftBar;
