import React from 'react';

import s from './imagepreview.scss';

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className={s.previewText}></div>);
    }

    return (
      <div className={s.previewComponent}>
        <div className={s.imgPreview}>
            {$imagePreview}
        </div>
          <input className={s.fileInput} type="file" onChange={(e)=>this._handleImageChange(e)} />
          <button className={s.submitButton} onClick={(e)=>this._handleSubmit(e)}>{this.props.text}</button>
          <span className={s.fileSizeWarning}>(файл должен быть размером
            не более <b>1024 КБ</b>)
          </span>
      </div>
    )
  }
}
  
export default ImageUpload;