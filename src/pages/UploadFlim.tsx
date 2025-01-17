import FormUploadFilm from '@/components/form/Form';
import { useEffect, useRef, useState } from 'react';
import { Bounce } from 'react-toastify';
import { toast } from 'react-toastify';

const UploadFlim = () => {
  const videoInput = useRef<HTMLInputElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const imageInput = useRef<HTMLInputElement>(null);
  const imgShowRef = useRef<HTMLImageElement>(null);

  const [showInputImg, setShowInputImg] = useState<boolean>(true);
  const [showInputVideo, setShowInputVideo] = useState<boolean>(true);

  const [titleFlim, setTitleFlim] = useState<string>(
    'Quá Nhanh Quá Nguy Hiểm 8'
  );
  const [description, setDescription] = useState<string>(
    'Quá Nhanh Quá Nguy Hiểm 8 Fast & Furious 8 The Fate of the Furious 2017 Full HD Vietsub Thuyết Minh Phim Quá Nhanh Quá Nguy Hiểm 8: Cipher - kẻ phản diện chính sẽ bắt cóc cả gia đình Mia Toretto và Bian O Conner, đồng thời buộc Dom phải phản bội anh ta anh em. '
  );

  const [year, setYear] = useState<number>(2024);

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
          setShowInputImg(false);
          //setDisableSendVideo(false);
        } else {
          imgShowRef.current.src = ''; // Gán URL vào iframe
          imgShowRef.current.style.display = 'none'; // Hiển thị iframe
          setDisableSendVideo(true);
          setShowInputImg(true);
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
          iframeRef.current.src = `${media}#t=0&muted=1`;

          iframeRef.current.src = `${media}`;

          iframeRef.current.style.display = 'block'; // Hiển thị iframe

          setDisableSendVideo(false);

          const tempVideo = document.createElement('video');
          tempVideo.src = media;
          tempVideo.onloadedmetadata = () => {
            setDuration(formatTime(tempVideo.duration));
            tempVideo.remove();
            setShowInputVideo(false);
          };
        } else {
          //iframeRef.current = null;
          iframeRef.current.src = ''; // Gán URL vào iframe
          iframeRef.current.style.display = 'none'; // Hiển thị iframe
          setDisableSendVideo(true);
          setShowInputVideo(true);
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

    // Append other fields
    formData.append('nameFilm', titleFlim);
    formData.append('description', description);
    formData.append('duration', duration);
    formData.append('year', year.toString());

    const response = await fetch('http://localhost:3000/flim', {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    console.log(result);

    if (result.statusCode === 201) {
      toast.success('Upload phim thành công!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
      if (videoInput.current) videoInput.current.value = '';
      if (iframeRef.current) {
        iframeRef.current.src = '';
        iframeRef.current.style.display = 'none';
      }
      if (imageInput.current) imageInput.current.value = '';
      if (imgShowRef.current) {
        imgShowRef.current.src = '';
        imgShowRef.current.style.display = 'none';
      }
      setShowInputImg(true);
      setShowInputVideo(true);
      setTitleFlim('');
      setDescription('');
      setYear(0);
      setDisableSendVideo(true);
      setDuration('');
    } else if (result.statusCode === 400) {
      toast.error(`${result.message}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    } else {
      toast.error(`${result}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    }
  };

  return (
    <div className="">
      <div className="text-center text-3xl font-bold px-6 py-6">UploadFlim</div>

      <div className="flex flex-col pb-4  gap-4 max-w-[800px] mx-auto w-full">
        <FormUploadFilm
          setTitleFlim={setTitleFlim}
          description={description}
          titleFlim={titleFlim}
          setDescription={setDescription}
          setYear={setYear}
          year={year}
        />

        <div className="flex  flex-col gap-2">
          <label className="text-[18px] font-bold" htmlFor="input_image">
            Chọn hình muốn upload :
            {showInputImg && (
              <div className="border-2 max-w-[300px] mx-auto border-dotted border-slate-500 w-[300px] h-[300px] flex justify-center items-center">
                Click Chọn Hình
              </div>
            )}
          </label>

          <input
            ref={imageInput}
            type="file"
            accept="image/*"
            name="input_image"
            id="input_image"
          />

          <div className="max-w-[300px] mx-auto">
            <img
              ref={imgShowRef}
              src=""
              alt=""
              className="   rounded-xl  object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[18px] font-bold" htmlFor="input_video">
            Chọn video muốn upload :
            {showInputVideo && (
              <div className="border-2 max-w-[300px] mx-auto border-dotted border-slate-500 w-[300px] h-[300px] flex justify-center items-center">
                Click Chọn Video
              </div>
            )}
          </label>
          <input
            ref={videoInput}
            type="file"
            id="input_video"
            name="input_video"
            accept="video/*"
          />

          <div className="max-md:max-w-[200px] mx-auto">
            <iframe
              ref={iframeRef}
              id="video"
              width="400"
              height="240"
              className={`w-[500px] h-[400px] max-md:max-w-[200px]    rounded-xl `}
              style={{ display: 'none', border: 'none' }} // Ẩn iframe mặc định
              allow="autoplay; accelerometer;   clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;  "
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
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
          disabled={
            description.length > 0 &&
            titleFlim.length > 0 &&
            disableSendVideo !== true
              ? false
              : true
          }
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
