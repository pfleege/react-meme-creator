import { useEffect, useState } from "react";
import memeData from "../data/memeData.js";

const MemeForm = () => {
  const [memeArray, setMemeArray] = useState(memeData.data.memes);
  const getRandomMeme = () => {
    const randomIndex = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomIndex].url;
    // console.log(url);
    return url;
  };

  const [formData, setFormData] = useState({
    memeHeading: "",
    memeBody: "",
    url: "https://i.imgflip.com/gk5el.jpg",
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
    const newUrl = getRandomMeme();
    setFormData((prevState) => {
      return {
        ...prevState,
        url: newUrl,
      };
    });

    // console.log(formData);
  }

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => console.log(data.data.memes[0].url));
  }, []);

  return (
    <>
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
      <div className="meme">
        <img src={formData.url} className="meme--image" />
        <h2 className="meme--text top">{formData.memeHeading}</h2>
        <h2 className="meme--text bottom">{formData.memeBody}</h2>
      </div>
    </>
  );
};

export default MemeForm;
