const MemeForm = () => {
  return (
    <form className="memeForm" action="">
      <div className="memeForm--inputFields">
        <input
          className="memeForm--textField"
          type="text"
          placeholder="Meme heading"
        />
        <input
          className="memeForm--textField"
          type="text"
          placeholder="Meme body text"
        />
      </div>
      <input
        className="memeForm--button"
        type="submit"
        value={"Load new meme image"}
      />
    </form>
  );
};

export default MemeForm;
