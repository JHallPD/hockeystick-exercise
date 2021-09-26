import React from "react";
import "./App.css";

function App() {

  return (
      <div className="App">
        <header className="App-header">
            <form action="http://localhost:3001/image/convert" method="post" encType="multipart/form-data" className="convertForm">
                <h3>
                    Image Converter
                </h3>
                <label className="formInputLabel">
                    Upload File:
                    <input type="file" name="file" className="formInput"/>
                </label>
                <label className="formInputLabel">
                    Conversion Type:
                    <select type="text" name="extension" className="formInput">
                        {/*using jimp to convert images and it currently has a chunk error with gif conversion*/}
                        {/*<option value="gif">GIF</option>*/}
                        <option value="bmp">BMP</option>
                        <option value="png">PNG</option>
                        <option value="jpg">JPG</option>
                    </select>
                </label>
                <input type="submit" value="Convert!" className="formButton" />
            </form>
        </header>

      </div>
  );
}

export default App;
