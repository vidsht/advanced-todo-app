const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dlbltynoe/image/upload";


export const uploadFileToCloudinary = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "my_unsigned_preset"); 
    formData.append("cloud_name", "dlbltynoe");

    const response = await fetch(CLOUDINARY_URL, {
      method: "POST",
      body: formData
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Upload error details:', errorData);
      throw new Error(errorData.error?.message || 'Upload failed');
    }

    const data = await response.json();
    console.log('Upload success:', data);
    return data.secure_url;
  } catch (error) {
    console.error("Upload error:", error);
    return null;
  }
};
