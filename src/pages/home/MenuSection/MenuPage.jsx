import "./menupage.css";
export default function MenuPage({
  currentBackground,
  activeIndex,
  onMenuClick,
  data,
}) {
  const handleClick = (index, background) => {
    onMenuClick(index, background);
  };

  return (
    <>
      <div
        className="menuPageBackground"
        style={{ backgroundImage: `url(${currentBackground})` }}
      >
        <div className="pageoverlay">
          <section>
            <div
              className="page-container"
              style={{ opacity: 1 }}
            >
              {data.map((item, index) => (
                <h2
                  className={activeIndex === index ? "active" : "menu-link"}
                  key={index}
                  onClick={() => handleClick(index, item.menuImg)}
                >
                  {item.title} Menu
                </h2>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
