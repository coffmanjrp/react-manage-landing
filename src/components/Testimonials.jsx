import { avatar01, avatar02, avatar03, avatar04 } from '../img';

const testimonials = [
  {
    name: 'Anisha Li',
    text: '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
    avatar: avatar01,
  },
  {
    name: 'Ali Bravo',
    text: ' “We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”',
    avatar: avatar02,
  },
  {
    name: 'Richard Watts',
    text: '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
    avatar: avatar03,
  },
  {
    name: 'Shanai Williams',
    text: '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”',
    avatar: avatar04,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">
          What's Different About Manage?
        </h2>
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {testimonials.length > 0 &&
            testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`${
                  index > 0 ? 'hidden md:flex' : 'flex'
                } flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/4`}
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 -mt-14"
                />
                <h5 className="text-lg font-bold">{testimonial.name}</h5>
                <p className="text-sm text-darkGrayishBlue">
                  {testimonial.text}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
