const MemeForm = () => {
  return (
    <form className="memeForm" action="">
      <div className="memeForm--inputFields">
        <label>
          Your Meme Heading:
          <input
            className="memeForm--textField"
            type="text"
            placeholder="Meme heading"
          />
        </label>
        <label>
          Your Meme Body Text:
          <input
            className="memeForm--textField"
            type="text"
            placeholder="Meme body text"
          />
        </label>
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
