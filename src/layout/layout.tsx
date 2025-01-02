import Menu from '@/components/menu/Menu';
import { useEffect } from 'react';

import { Outlet } from 'react-router';

const Layout = () => {
  //const [showAlert, setShowAlert] = useState<boolean>(true);

  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div className="relative bg-gray-800 pb-20">
      <div className="absolute top-1 right-1/2  translate-x-1/2 z-30 text-[18px] p-2 shadow-2xl bg-black bg-opacity-30 rounded-lg ">
        <Menu></Menu>
      </div>

      {/*<div
        className={`absolute inset-0 bg-black z-50  ${
          showAlert ? 'opacity-80' : 'opacity-0 pointer-events-none'
        }`}
      ></div>

      <div
        className={` absolute transition-all duration-500 -top-24 max-w-[1000px]  w-full h-full right-1/2  translate-x-1/2 mx-auto pt-28  z-50 ${
          showAlert ? 'opacity-100' : ' opacity-0 pointer-events-none'
        }`}
      >
        <Alert
          message="Tuyên bố trách nhiệm"
          description={`
                Trang web này được phát triển với mục đích học tập và thực hành kỹ năng lập trình. Tất cả nội dung và chức năng của trang web chỉ được sử dụng để minh họa và không nhằm mục đích thương mại hoặc vi phạm bản quyền.
                Nếu có bất kỳ vấn đề nào liên quan đến bản quyền, vui lòng liên hệ với chúng tôi để gỡ bỏ nội dung được liên kết (nếu có).
                Người sử dụng trang web cần tuân thủ các quy định pháp luật về bản quyền và các quyền liên quan khi truy cập.`}
          type="error"
          showIcon
          closable
          onClose={() => {
            setShowAlert(false);
          }}
        />
      </div>*/}
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
