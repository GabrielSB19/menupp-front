import axios from "axios";
import authHeader from "./authheader";

const URL_API = "http://127.0.0.1:5001/menupp-t/us-central1/";

const uploadImages = (file) => {
  const data = new FormData();
  data.append("file", file);
  const url = URL_API + "uploadFile";

  let request = new XMLHttpRequest();
  request.open("POST", url);
  return request.send(data);
  /*
  return axios.post(URL_API + "uploadFile", data, {
    headers: {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
    },
  });
   */
};

const getImages = () => {
  return axios.get(URL_API + "getImgs", { headers: authHeader() });
};

const deleteImage = (fileName) => {
  return axios.post(
    URL_API + "deleteFile",
    { fileName },
    { headers: authHeader() }
  );
};

const imagesService = {
  uploadImages,
  getImages,
  deleteImage,
};

export default imagesService;
