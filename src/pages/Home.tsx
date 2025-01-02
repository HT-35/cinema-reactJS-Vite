import ListCart from '@/components/card/ListCart';
import HeaderPage from '@/components/header/header';
import Title from '@/components/title/Title';

const Home = () => {
  return (
    <div className="w-full relative  select-none">
      <HeaderPage></HeaderPage>
      <div className="body px-16 my-8">
        <Title className="">Now Playing</Title>
        <div className="">
          <ListCart></ListCart>
        </div>
      </div>
    </div>
  );
};

export default Home;
