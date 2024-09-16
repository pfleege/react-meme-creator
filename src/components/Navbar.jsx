const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar--navTitle">
        <img
          className="navbar--logo"
          src="../src/assets/like_a_sir.svg"
          alt=""
        />
        <h1>Meme Creator</h1>
      </div>
      <div className="navbar--demoBy">
        <p className="navbar--p">React demo by:</p>
        <a className="icsLink" href="https://iceeqsolutions.fi" target="_blank">
          <img
            src="../src/assets/iCeeqSolutionsLogo.png"
            alt="Company logo"
            className="navbar--icsLogo"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
