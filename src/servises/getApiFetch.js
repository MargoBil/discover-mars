import axios from 'axios';

const baseUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers';
const apiKey = 'syxFeNXEYbj9yt2ovw126SVQmXviPNQUTGCCdmvS';

const getPhotosBySelectedRover = async (rover, sol) => {
  try {
    const {
      data: {photos},
    } = await axios.get(
      `${baseUrl}/${rover}/photos?sol=${sol}&api_key=${apiKey}`,
    );
    return photos;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getPhotosBySelectedRoverAndCamera = async (rover, sol, camera, page) => {
  try {
    const {
      data: {photos},
    } = await axios.get(
      `${baseUrl}/${rover}/photos?sol=${sol}&page=${page}&camera=${camera}&api_key=${apiKey}`,
    );
    return photos;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getAllPhotosBySelectedRoverAndCamera = async (rover, sol, camera) => {
  try {
    const {
      data: {photos},
    } = await axios.get(
      `${baseUrl}/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${apiKey}`,
    );
    return photos;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default {getPhotosBySelectedRover, getPhotosBySelectedRoverAndCamera, getAllPhotosBySelectedRoverAndCamera};
