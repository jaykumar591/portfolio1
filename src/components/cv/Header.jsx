
import image from '../images/image';

const Header = () => {
  return (
    <div className="flex items-center w-full gap-4 p-6 bg-white rounded-lg shadow-md border-b-4 border-gray-300">
      <img
        src={image.j}
        alt="Profile"
        className="rounded-full h-24 w-24 border-4 border-gray-200 shadow-sm"
      />
      <div>
        <h1 className="text-4xl font-extrabold text-gray-800">Jay Kumar</h1>
        <p className="text-lg text-gray-600 mt-1">
          Web Developer  |  Android Developer
        </p>
        <div className="text-sm text-gray-500 mt-2">
          <p>📞 +91 8809125183 | 📧 jaykumar3dear@gmail.com</p>
          <p>📍 Bihar, India</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
