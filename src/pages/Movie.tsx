import Title from '@/components/title/Title';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const Movies = () => {
  const { id } = useParams();
  console.log(`id:`, id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    document.title = 'Huy Tran';
  }, []);

  return (
    <div>
      <div className="background h-[400px] relative object-cover object-center w-full bg-[url('https://homepage.momocdn.net/blogscontents/momo-upload-api-210607095446-637586564863921834.jpg')]  mb-32">
        <div className="absolute inset-0 opacity-60 bg-black"></div>
        <div
          className="h-[400px] w-[700px] absolute -bottom-1/3 right-1/2 translate-x-1/2 bg-[url('https://homepage.momocdn.net/blogscontents/momo-upload-api-210607095446-637586564863921834.jpg')]"
          style={{
            objectFit: 'cover',
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        ></div>
      </div>
      <div className="w-[700px] mx-auto">
        <Title className="text-center text-3xl">Fast - Furious</Title>
        <div className="flex justify-between">
          {' '}
          {Array(5)
            .fill(null)
            .map((_, index) => {
              return (
                <div
                  key={index}
                  className="py-1 px-4 border-[1px] border-purple font-semibold text-purple rounded-2xl"
                >
                  Cartoon
                </div>
              );
            })}
        </div>
        <div className="description text-center text-white my-4">
          As Emily struggles to fit in at home and at school, she discovers a
          small red puppy who is destined to become her best friend. When
          Clifford magically undergoes one heck of a growth spurt, becomes a
          gigantic dog and attracts the attention of a genetics company, Emily
          and her Uncle Casey have to fight the forces of greed as they go on
          the run across New York City. Along the way, Clifford affects the
          lives of everyone around him and teaches Emily and her uncle the true
          meaning of acceptance and unconditional love.
        </div>
        <div className="">
          <Title className="text-center text-xl">Casts</Title>
          <div className="Cast  flex justify-between">
            {Array(3)
              .fill(null)
              .map((_, index) => {
                return (
                  <div key={index} className="max-w-[200px]">
                    <img
                      src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/412035939_1462453557645116_295899007857931243_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=3wh2hUZrJ9YQ7kNvgEi9lo0&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=AHS80bHsH4RfWRWTSOaCjZ3&oh=00_AYAle9HVZK__UMOUnq5t9icCDZKAs6h1xnS8A_KT-MFqnQ&oe=677ACB67"
                      alt=""
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="my-6">
          <iframe
            width="700"
            height="400"
            src="http://localhost:3000/video?autoplay=0"
            allow="accelerometer;   clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            sandbox=""
          ></iframe>

          {/*<video width="320" height="240" controls>
            <source src="http://localhost:3000/video" type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>*/}
        </div>
      </div>
    </div>
  );
};

export default Movies;
