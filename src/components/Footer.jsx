import SocialIcons from "./SocialIcons";
function Footer({id}) {
  return (
    <div id={id??"box"} className=" p-4 flex gap-5 flex-wrap justify-center bg-gray-900 text-white">
      <div className="min-w-72 w-1/3 min-h-72 rounded-lg bg-gray-800 p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
          <SocialIcons />
      </div>
      <div className="min-w-72 w-1/3 min-h-72 rounded-lg bg-gray-800 p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Social Media</h2>
        <ul>
          <li>
            <a href="https://www.facebook.com/profile.php?id=61566837085528" className="text-blue-500 hover:text-blue-700">
              Facebook
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default Footer;