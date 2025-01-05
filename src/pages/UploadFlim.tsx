import FormUploadFilm from '@/components/form/Form';
import { useEffect, useRef, useState } from 'react';

const UploadFlim = () => {
  const videoInput = useRef<HTMLInputElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const imageInput = useRef<HTMLInputElement>(null);
  const imgShowRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const handleFileChange = () => {
      if (
        imageInput.current &&
        imageInput.current.files &&
        imgShowRef.current
      ) {
        const file = imageInput.current.files[0]; // Lấy file đầu tiên
        if (file) {
          const media = URL.createObjectURL(file); // Tạo URL cho file
          imgShowRef.current.src = media; // Gán URL vào iframe
          imgShowRef.current.style.display = 'block'; // Hiển thị iframe
          setDisableSendVideo(false);

          const tempVideo = document.createElement('video');
          tempVideo.src = media;
          tempVideo.onloadedmetadata = () => {
            setDuration(formatTime(tempVideo.duration));
            tempVideo.remove();
          };
        } else {
          imgShowRef.current.src = ''; // Gán URL vào iframe
          imgShowRef.current.style.display = 'none'; // Hiển thị iframe
          setDisableSendVideo(true);
        }
      }
    };

    const currentInput = imageInput.current;
    if (currentInput) {
      currentInput.addEventListener('change', handleFileChange); // Lắng nghe sự kiện change
    }

    return () => {
      if (currentInput) {
        currentInput.removeEventListener('change', handleFileChange); // Cleanup sự kiện
      }
    };
  }, []);

  const [disableSendVideo, setDisableSendVideo] = useState<boolean>(true);

  const [duration, setDuration] = useState<string>('');

  useEffect(() => {
    const handleFileChange = () => {
      if (videoInput.current && videoInput.current.files && iframeRef.current) {
        const file = videoInput.current.files[0]; // Lấy file đầu tiên
        if (file) {
          const media = URL.createObjectURL(file); // Tạo URL cho file
          iframeRef.current.src = media; // Gán URL vào iframe
          iframeRef.current.style.display = 'block'; // Hiển thị iframe
          setDisableSendVideo(false);

          const tempVideo = document.createElement('video');
          tempVideo.src = media;
          tempVideo.onloadedmetadata = () => {
            setDuration(formatTime(tempVideo.duration));
            tempVideo.remove();
          };
        } else {
          //iframeRef.current = null;
          iframeRef.current.src = ''; // Gán URL vào iframe
          iframeRef.current.style.display = 'none'; // Hiển thị iframe
          setDisableSendVideo(true);
        }
      }
    };

    const currentInput = videoInput.current;
    if (currentInput) {
      currentInput.addEventListener('change', handleFileChange); // Lắng nghe sự kiện change
    }

    return () => {
      if (currentInput) {
        currentInput.removeEventListener('change', handleFileChange); // Cleanup sự kiện
      }
    };
  }, []);

  console.log('');
  console.log('');
  console.log('duration  :', duration);
  console.log('');
  console.log('');
  console.log('');

  const uploadVideo = async () => {
    if (
      !videoInput.current ||
      !videoInput.current.files ||
      videoInput.current.files.length === 0
    ) {
      return;
    }

    const formData = new FormData();

    if (!videoInput.current?.files?.[0] || !imageInput.current?.files?.[0]) {
      return;
    }

    formData.append('files', videoInput.current.files[0]); // Thêm video
    formData.append('files', imageInput.current.files[0]); // Thêm ảnh

    //formData.append('file', videoInput?.current?.files[0]);

    //const data = {
    //  nameFilm: 'Fast and Furious',
    //  duration: duration,
    //  description: 'Fast and Furious',
    //  formData,
    //};

    // Append other fields
    formData.append('nameFilm', 'Fast and Furious');
    formData.append('duration', duration);
    formData.append('description', 'Fast and Furious');

    try {
      const response = await fetch('http://localhost:3000/flim', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      console.log('File uploaded:', result);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="">
      <div className="text-center text-3xl font-bold px-6 py-6">UploadFlim</div>

      <FormUploadFilm />

      <input ref={imageInput} type="file" accept="image/*" name="input_image" />

      <div className="max-w-[500px] mx-auto my-2">
        {/*{imgShowRef.current && (
        )}*/}
        <img
          ref={imgShowRef}
          src=""
          alt=""
          className="w-[500px] h-[400px] object-cover"
        />
      </div>

      <div className="flex flex-col pb-4 ">
        <label>Choose a video file to process:</label>
        <input
          ref={videoInput}
          type="file"
          id="input"
          name="input_video"
          accept="image/*"
        />

        <div className="max-w-[500px] mx-auto my-2">
          <iframe
            ref={iframeRef}
            id="video"
            width="400"
            height="240"
            className={`w-[500px] h-[400px] `}
            style={{ display: 'none', border: 'none' }} // Ẩn iframe mặc định
          ></iframe>
        </div>
        {duration !== null && (
          <div className="text-center mt-2">{duration}</div>
        )}
        <button
          className={`w-full py-2   rounded-xl mt-4 ${
            disableSendVideo
              ? 'bg-slate-300   hover:cursor-not-allowed'
              : 'bg-slate-500'
          }`}
          onClick={uploadVideo}
          disabled={disableSendVideo}
        >
          Send Video
        </button>
      </div>
    </div>
  );
};

export default UploadFlim;

const formatTime = (duration: number) => {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = Math.floor(duration % 60);

  const pad = (value: number) => String(value).padStart(2, '0');

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};
