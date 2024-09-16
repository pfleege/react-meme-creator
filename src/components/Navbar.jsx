const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar--navTitle">
        <img className="navbar--logo" src="../src/assets/nav-logo.png" alt="" />
        <h1>Meme Creator</h1>
      </div>
      <div className="navbar--demoBy">
        <p className="navbar--p">React demo by:</p>
        <img
          src="./src/assets/iCeeqSolutionsLogo.png"
          alt=""
          className="navbar--icsLogo"
        />
      </div>
    </nav>
  );
};

export default Navbar;
