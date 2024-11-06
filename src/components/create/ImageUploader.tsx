'use client';
import React, { useState, useContext, SetStateAction } from 'react';
import { FaFileImage } from 'react-icons/fa';
import { cn } from '@/lib/utils';

interface ImageUploaderProps { 
  uploads:string[],
  singleUpload?: boolean;
  setUploads:React.Dispatch<SetStateAction<string[]>>
  width?:string
}

function ImageUploader({width,setUploads,uploads, singleUpload = true }: ImageUploaderProps) {
  console.log(uploads)
  const [files, setFiles] = useState<any[]>([]);

  const [loading,setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;

    if (!selectedFiles) return;

    setFiles(Array.from(selectedFiles));

    const filesArray = Array.from(selectedFiles);

    setUploads([]);

    filesArray.forEach((file: any, index: number) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        const dataUrl = reader.result as string;
        setUploads((prev) => {
          const newUploads = [...prev, dataUrl];
          return newUploads;
        });
      };

      reader.readAsDataURL(file);
    });

    setLoading(false);
  };

  return (
    <div className="w-full">
      <div className={cn("w-full h-[460px] bg-[#1b1d1e] rounded-[30px] ",width)}>

        <label htmlFor="works">
         
          
          <div className="flex h-full w-full justify-center items-center overflow-hidden rounded-[30px] relative">
            {<FaFileImage size={100} />}
            {uploads.length > 0 && <p className='z-[100] bg-[#1b1d1e] absolute px-2 rounded-3xl'>Click To change image</p>} {/* Updated this condition */}
            <div className="flex h-full items-center justify-start">
              {uploads?.map((upload: string, index: number) => (
                <img
                  className="w-[100%] h-[100%] object-cover absolute z-[10] top-0 left-0"
                  key={index}
                  src={upload}
                  alt="upload"
                />
              ))}
            </div>
          </div>
          
          <input
            onChange={handleChange}
            className="hidden"
            id="works"
            type="file"
            accept="image/*"
            multiple={!singleUpload} // Limit to one file if singleUpload is true
          />
        </label>
      </div>
    </div>
  );
}

export default ImageUploader;
