import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ThankYou() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar />

      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
        <p className="text-lg text-gray-600">
          We’ve received your message and will get back to you soon.
        </p>
      </div>

      <Footer />
    </div>
  );
}
