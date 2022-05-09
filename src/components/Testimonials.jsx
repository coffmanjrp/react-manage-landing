import { CTA } from '.';
import Carousel from 'nuka-carousel';
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
        <h2 className="text-4xl font-bold text-center">What they've said</h2>
        <div className="hidden md:flex flex-col mt-24 md:flex-row md:space-x-6">
          {testimonials.length > 0 &&
            testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray w-1/4"
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
        <div className="flex md:hidden flex-col mt-12">
          <Carousel
            wrapAround={true}
            slidesToShow={1}
            autoplay={true}
            interval={5000}
            defaultControlsConfig={{
              nextButtonStyle: { display: 'none' },
              prevButtonStyle: { display: 'none' },
              pagingDotsContainerClassName: 'space-x-1 !top-8',
              pagingDotsStyle: {
                fill: 'hsl(12, 88%, 59%)',
              },
            }}
            style={{ paddingTop: '32px' }}
          >
            {testimonials.length > 0 &&
              testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray"
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
          </Carousel>
        </div>
        <div className="my-16">
          <CTA href="#!" variant="red">
            Get Started
          </CTA>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
