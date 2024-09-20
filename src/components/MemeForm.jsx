import { useState } from "react";

const MemeForm = () => {
  const [formData, setFormData] = useState({
    memeHeading: "",
    memeBody: "",
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(formData);
  }

  return (
    <form className="memeForm" onSubmit={handleSubmit}>
      <div className="memeForm--inputFields">
        <label>
          Your Meme Heading:
          <input
            className="memeForm--textField"
            type="text"
            name="memeHeading"
            placeholder="Meme heading"
            value={formData.memeHeading}
            onChange={handleChange}
          />
        </label>
        <label>
          Your Meme Body Text:
          <input
            className="memeForm--textField"
            type="text"
            name="memeBody"
            placeholder="Meme body text"
            value={formData.memeBody}
            onChange={handleChange}
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
