import axios from 'axios';
import { useState } from 'react';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdDriveFolderUpload } from 'react-icons/md';
import './imgUpload.scss';

const ImgUpload = () => {
  const [file, setFile] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const onImgChange = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      debugger;
      const fileName = file.name;
      const data = new FormData();
      data.append('file', file);
      data.append(
        'upload_preset',
        process.env?.REACT_APP_UPLOAD_PRESET || 'upload'
      );
      data.append('multiple', true);
      data.append('tags', fileName);
      data.append('context', `photo=${fileName}`);
      const cloudinary_url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/upload`;
      // const fileName = file.name;
      const uploadRes = await axios.post(cloudinary_url, data);
      const { url } = uploadRes.data;
      console.log(url);

      if (url) {
        setImgUrl(url);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      debugger;
    }
  };

  return (
    <div className="imgUpload">
      <div className="wrapper">
        <div className="left">
          <div className="camera">
            {file ? (
              <>
                <img
                  src={
                    file
                      ? URL.createObjectURL(file)
                      : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                  }
                  alt=""
                />
              </>
            ) : (
              <>
                <BsFillCameraFill size={105} color="#555" />
              </>
            )}
          </div>
        </div>
        <div className="right">
          <div className="img">
            <label htmlFor="file1">
              Image
              <MdDriveFolderUpload size={55} />
            </label>
            <input type="file" id="file1" onChange={onImgChange} />
            <button className={loading ? 'loading' : ''} onClick={handleUpload}>
              UPLOAD
            </button>
          </div>
        </div>
      </div>

      <div>{imgUrl && <>{imgUrl}</>}</div>
    </div>
  );
};
export default ImgUpload;
