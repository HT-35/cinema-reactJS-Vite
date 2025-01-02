import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStar } from '@fortawesome/free-solid-svg-icons';

const Card = ({ name, urlFlim }: { name: string; urlFlim: string }) => {
  return (
    <div className="p-2 max-w-52  rounded-xl">
      <img
        src={urlFlim}
        alt=""
        className="rounded-xl h-full w-full min-h-40 max-h-40 bg-contain"
      />

      <div className="body text-white flex flex-col gap-2 py-1">
        <div className="name text-sm min-h-12 text-left">
          {name.toLocaleUpperCase()}
        </div>
        <div className=" flex justify-between">
          <div className="year">2017</div>
          <div className="year">
            10 {''}
            <FontAwesomeIcon
              icon={faStar}
              //icon="fa-solid fa-star"
              style={{ color: '#FFD43B' }}
            />
          </div>
        </div>

        <Button className="w-full py-4" color="danger" variant="solid">
          Watch Now
          <div className="h-6 w-6 bg-white rounded-full flex justify-center items-center">
            <FontAwesomeIcon icon={faPlay} style={{ color: '#ff0000' }} />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Card;
