import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL
});

const uploadImage = async  (file,fileName) => {
  try {
    if (!file) {
      throw new Error("File is required for upload");
    }

    if (!fileName) {
      throw new Error("File name is required");
    }

    const options = {
      file,
      fileName,
      folder,
      useUniqueFileName: true,
    };

    const response = await imagekit.upload(options);

    return {
      url: response.url,
      fileId: response.fileId,
      name: response.name,
      size: response.size,
    };

  } catch (error) {
    console.error("Image upload failed:", error.message);
    throw new Error("Image upload failed. Please try again.");
  }
}


export default uploadImage;