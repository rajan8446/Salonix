import Image from "next/image";

const Snapshot: React.FC = () => {
  const images = [
    {
      src: "/website/images/salon-pic1.png",
      title: "snapshot1",
    },
    {
      src: "/website/images/salon-pic2.png",
      title: "snapshot2",
    },
    {
      src: "/website/images/salon-pic3.png",
      title: "snapshot2",
    },
    {
      src: "/website/images/salon-pic4.png",
      title: "snapshot1",
    },
    {
      src: "/website/images/salon-pic5.png",
      title: "snapshot1",
    },
    {
      src: "/website/images/salon-pic6.png",
      title: "snapshot1",
    },
    {
      src: "/website/images/salon-pic7.png",
      title: "snapshot1",
    },
    {
      src: "/website/images/salon-pic8.png",
      title: "snapshot1",
    },
    {
      src: "/website/images/salon-pic9.png",
      title: "snapshot1",
    },
  ];

  return (
    <section className="py-12 px-4 ">
      <div className="flex flex-col mx-auto gap-8 max-w-[1250px]">
        <div className="text-center mb-8">
          <h2 className="text-4xl text-brand-700">Picture Perfect Snapshot</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:mt-24 ">
          {images.map((image, index) => {
            if (index === 1 || index === 4 || index === 7) {
              return (
                <div key={index} className="-mt-20">
                  <Image
                    src={image.src}
                    alt={image.title}
                    width={490}
                    height={450}
                    className="object-cover h-auto w-full"
                  />
                </div>
              );
            }
            return (
              <div key={index} className="">
                <Image
                  src={image.src}
                  alt={image.title}
                  width={490}
                  height={450}
                  className="object-cover h-auto w-full"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Snapshot;
