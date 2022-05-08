import "./App.css";
import ImgBox from "./components/ImgBox";
import { useEffect, useState } from "react";
function App() {
  const [imagesData, setImagesData] = useState([]);
  const [imagesCount, setImagesCount] = useState(3);
  let url = "https://picsum.photos/v2/list";
  const getData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setImagesData(data));
  };

  const renderMoreImages = () => {
    setImagesCount(imagesCount + 3);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <button onClick={renderMoreImages}>Next</button>
      <div className="App">
        {imagesData.slice(0, imagesCount).map((item) => (
          <ImgBox item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
