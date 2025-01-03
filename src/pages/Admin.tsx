import {
  faFilm,
  faHouse,
  faPhotoFilm,
  faRightFromBracket,
  faUpload,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, Outlet, useLocation } from 'react-router';

const menu = [
  {
    name: 'Dashboard',
    url: '/admin',
    icon: <FontAwesomeIcon icon={faHouse} />,
  },

  {
    name: 'List Flim',
    url: '/admin/flim',
    icon: <FontAwesomeIcon icon={faFilm} />,
  },
  {
    name: 'Upload Flim',
    url: '/admin/upload',
    icon: <FontAwesomeIcon icon={faUpload} />,
  },
  {
    name: 'Log Out',
    url: '/admin/logout',
    icon: <FontAwesomeIcon icon={faRightFromBracket} />,
  },
];

const Admin = () => {
  const location = useLocation();

  return (
    <div className="flex p-8 select-none">
      <div className="flex flex-col gap-4 bg-white  rounded-lg text-black px-2">
        <div className=" px-6 py-2 flex gap-2 items-center text-xl font-bold ">
          <FontAwesomeIcon icon={faPhotoFilm} /> BRESS
        </div>

        {menu.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={item.url}
              className={`px-6 py-2 flex gap-2 items-center  pr-14 ${
                location.pathname === item.url
                  ? 'bg-black text-white rounded-xl'
                  : ''
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </div>

      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Admin;
