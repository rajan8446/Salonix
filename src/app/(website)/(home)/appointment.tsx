
import Button from "./button";
import HeadingTag from "./HeadingTag";

const BookAppointments: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <div className="flex flex-col justify-between  items-center gap-4 mx-auto max-w-[1250px]">
        <div className="text-center">
          <HeadingTag
            text="Book your appointment right now"
            color="text-dark-950"
            maxWidth="600px"
          />
        </div>
        <div className="text-center w-full max-w-2xl">
          <h2 className="text-dark-500 text-sm text-center font-lato">
            Lorem ipsum dolor sit amet consectetur. Eget integer fringilla urna
            vitae viverra duis tristique duis. Mi amet odio ornare sed. Elit ac
            bibendum dignissim et. Posuere platea nascetur facilisi id convallis
            maecenas aenean.
          </h2>
        </div>
        <Button text="BOOK NOW" textColor="text-brand-50" />
      </div>
    </section>
  );
};

export default BookAppointments;
