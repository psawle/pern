import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL
});

const uploadImage = async  (file,fileName) => {
  const imageResponse = await imagekit.upload({file, fileName})
  return imageResponse
}


export default uploadImage;