import React, { useState } from 'react'

const DragAndDrop = () => {
    const [selectedImage, setSeletedImage] = useState(null)
    const handleFileChange = (file) => {
        if (file && file.type.startsWith('image/')){
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () =>{
                setSeletedImage(reader.result)
            }
        }
        else {
            console.log('Failed');
        }
    }
    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0]
        handleFileChange(file)
    }
    const handleDragOver = (e) => {
        e.preventDefault();
    }
  return (
    <div>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="border-[3px]  border-dashed  border-[#ccc] rounded-[5px] p-5 text-center"
      >
        <p>فایل را به داخل کادر بکشید</p>
        <button className="relative border-[1.5px] border-black text-sm w-[86px] h-[30px] rounded-lg  mt-[15px]">
          <div className="flex justify-center">
            <img src="/assets/icons/Upload.svg" alt="Upload" />
            <h4 className="mr-2">آپلود</h4>
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e.target.files[0])}
            className="opacity-0 inset-0 absolute"
          />
        </button>
      </div>
      {/* `{selectedImage && (
        <div>
          <h2>uplaoded</h2>
          <img src={selectedImage} alt="Uploaded" className="max-w-full mt-5" />
        </div>
      )} */}
    </div>
  );
}

export default DragAndDrop
