import React from 'react';

import s from './imagepreview.scss';

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };

    this.onInputImage = this.onInputImage.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  onInputImage(e) {
      let data = new FormData();
      data.append('files', this.mainImage.files[0]);
      this.props.uploadImage(data)
          .then((res) => {
              this.props.onInputImage(res.data.fileNames[0]);
          })
    }

  _handleImageChange(e) {
    e.preventDefault();

    this.onInputImage(e);

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
          <input className={s.fileInput} type="file" name="mainImage" ref={input => this.mainImage=input} onChange={(e)=>this._handleImageChange(e)} />
          <button className={s.submitButton} onClick={(e)=>this._handleSubmit(e)}>{this.props.text}</button>
          <span className={s.fileSizeWarning}>(файл должен быть размером
            не более <b>1024 КБ</b>)
          </span>
      </div>
    )
  }
}
  
export default ImageUpload;