import "./Navbar.css";
const Navbar = () => {
  const navList = [
    "Home",
    "About Us",
    "Committee",
    "Membership",
    "Projects",
    "Internship",
    "Training",
    "Events",
    "Contribute",
    "Contact",
    "Register",
    "Login",
  ];

  return (
    <nav className=" shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center gap-6">
        <img src="/images/logo.png" alt="Logo" className="h-14" />
        <ul className="flex space-x-6">
          {navList.map((item, index) => (
            <li key={index} className="relative group cursor-pointer">
              <span className="hover-underline">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
