import logo from '../../assets/seminer.webp';
import newMissionLogo from '../../assets/newMissionLogo.png';
import newVisionLogo from '../../assets/newVisionLogo.png';
import newMotiveLogo from '../../assets/newMotiveLogo.png';
import ImageSlider from '../ImageSlider/ImageSlider';

const About = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="max-w-[1400px] mx-auto rounded-lg p-5">
        {/* Hero Section */}
        <section className="hero rounded-lg shadow-md">
          <div className="hero-content flex flex-col lg:flex-row items-center">
            <img
              src={logo}
              alt="Township Logo"
              className="max-w-[100%] sm:max-w-md rounded-lg mb-5 lg:mb-0 lg:mr-5"
            />
            <div className="text-left w-full lg:w-2/3">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Message from Managing Director</h1>
              <p className="py-4 text-sm md:text-base">
                At Township Online Seba, we harness the transformative power of technology to bridge the gap between individuals and essential services. Established in 2021, our mission is to provide a seamless online experience that enhances accessibility and convenience for our users.
              </p>
              <p className="text-sm md:text-base hidden md:flex">
                We are dedicated to delivering high-quality services that empower our community and support personal and professional growth. With a commitment to innovation and user satisfaction, we strive to be the leading online service provider in the region. Join us in simplifying your everyday tasks and enhancing your quality of life through our comprehensive range of services!
              </p>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="mt-11">
          <h2 className="text-3xl font-bold font-serif">About Us</h2>
          <p className="text-xs font-serif mt-1">
            Welcome to Township Online Seba, your trusted partner in digital education and skills development. Since our establishment, we have been dedicated to bridging the gap between traditional education and the dynamic demands of the online world. We offer a comprehensive range of IT and soft skills training designed to empower individuals and communities alike.
          </p>
          <p className="text-xs font-serif mt-2">
            Our mission is to provide accessible and high-quality education that prepares learners for success in the ever-evolving digital landscape. Through innovative teaching methods and a commitment to excellence, we strive to nurture talent and inspire growth.
          </p>
          <p className="text-xs font-serif mt-2">
            Join us at Township Online Seba, where your journey toward digital empowerment begins!
          </p>
        </section>

        {/* Mission, Vision, and Motive Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center mt-12">
          <Card
            logo={newMissionLogo}
            title="Mission"
            description="We aim to bridge the gap between education and industry by delivering high-quality, industry-relevant training programs that equip learners with the practical skills."
            bgColor="from-[#EEF5FF] to-[#DBEAFE]"
            textColor="text-blue-600"
          />
          <Card
            logo={newVisionLogo}
            title="Vision"
            description="We strive to create a supportive learning environment that fosters creativity, critical thinking, and collaboration, enabling our learners to excel in their professional journeys."
            bgColor="from-[#EFFDF3] to-[#DDFCE7]"
            textColor="text-green-600"
          />
          <Card
            logo={newMotiveLogo}
            title="Motive"
            description="We are committed to continuous improvement, adapting our programs to meet the evolving demands of the industry and the needs of our learners."
            bgColor="from-[#FEF2F2] to-[#FEE3E3]"
            textColor="text-red-600"
          />
        </section>
      </div>
    </div>
  );
};

// Reusable Card Component
const Card = ({ logo, title, description, bgColor, textColor }) => (
  <div className={`bg-gradient-to-r ${bgColor} text-center p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl`}>
    <img src={logo} alt={`${title} Logo`} className="h-20 w-20 mx-auto mb-4" />
    <h2 className={`text-lg font-semibold ${textColor}`}>{title}</h2>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default About;
