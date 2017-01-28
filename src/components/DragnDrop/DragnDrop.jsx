import React from 'react';

import s from './dragndrop.scss';

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {files: '',imagePreviewUrl: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
  }

  _handleImageChange(e) {
    e.preventDefault();
    let filesURL = [];
    let targetFiles = [].slice.call(e.target.files)

    for (let i of targetFiles) {
      let reader = new FileReader();
      if (e.target.files.length > 0) {
      
      console.log(targetFiles);
      // targetFiles.map(file => console.log('hello'));
      let file = i;
      console.log(i);

      reader.onloadend = () => {
        filesURL.push(reader.result);
        this.setState({files: targetFiles,imagePreviewUrl: filesURL})
      }
      reader.readAsDataURL(file);
    } else {
      finishedReadingFiles()
    }
  }
    
    console.log(filesURL);
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let URLs = {imagePreviewUrl};
    
    return (
      <div className={s.previewComponent}>
        {URLs.imagePreviewUrl.length > 0 ?  URLs.imagePreviewUrl.map(file => {return (
          <div className={s.imgPreview}>
            <img src={file} />
          </div>
        )}) : (<span className={s.fileHint}>Перетащите файлы сюда</span>)}
        
          <input className={s.fileInput} type="file" multiple="true" onChange={(e)=>this._handleImageChange(e)} />
      </div>
    )
  }
}

export default ImageUpload;
