import { useEffect, useRef, useState } from "react";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";

const MemeForm = () => {
  const [memeArray, setMemeArray] = useState(null);
  const saveMeme = useRef();

  const getRandomMeme = () => {
    const randomIndex = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomIndex].url;
    // console.log(url);
    return url;
  };

  const [formData, setFormData] = useState({
    memeHeading: "",
    memeBody: "",
    url: "https://i.imgflip.com/5o32tt.png",
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

  async function handleImageDownload() {
    htmlToImage
      .toPng(document.getElementById("meme--saveMeme"))
      .then(function (dataUrl) {
        download(dataUrl, "my-node.png");
      });
  }

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemeArray(data.data.memes));
  }, []);

  return (
    <>
      <form className="memeForm" onSubmit={handleSubmit}>
        <div className="memeForm--inputFields">
          <label>
            Your Heading:
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
            Your Body Text:
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
        <div ref={saveMeme} id="meme--saveMeme">
          <img src={formData.url} className="meme--image" />
          <h2 className="meme--text top">{formData.memeHeading}</h2>
          <h2 className="meme--text bottom">{formData.memeBody}</h2>
        </div>
        <button type="button" onClick={handleImageDownload}>
          Save Image
        </button>
      </div>
    </>
  );
};

export default MemeForm;
