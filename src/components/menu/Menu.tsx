import { Link } from 'react-router';

const itemMenu = [
  {
    name: 'Home',
    path: '/',
  },
  //{
  //  name: 'Movies',
  //  path: '/movie',
  //},
  {
    name: 'New & Popular',
    path: '/new-popular',
  },
];

const Menu = () => {
  return (
    <div className=" flex  text-center justify-center items-center gap-10 max-h-[100px] ">
      {itemMenu.map((item, index) => {
        return (
          <Link key={index} to={item.path}>
            <div className="px-3 py-[1px] min-w-[190px] bg-white bg-opacity-10 rounded-lg text-white select-none">
              {item.name}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
