import { motion } from "framer-motion";
import HeroSlider from "../components/HeroSlider";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <motion.section
        className="p-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-blue-600 mb-4">
          Robotics Education for Schools & Colleges
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          We bring hands-on robotics learning experiences to educational institutions,
          nurturing the next generation of innovators and tech enthusiasts.
        </p>
      </motion.section>
    </div>
  );
};

export default Home;
