import { Link, NavLink } from 'react-router';


const Navbar = () => {



    const navItems =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </>
    return (
        <div className="navbar sticky top-0 z-50 px-5 bg-primary shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 -ml-5" fill="none" viewBox="0 0 24 24" stroke="white"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm font-bold  text-white space-x-3 dropdown-content bg-[#535C91] rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <h1 className='text-blue-900 font-bold text-xl sm:text-3xl'>Imteaz Hossen </h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu space-x-3 text-white font-bold menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button
                    onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/Imteaz_Hossen_Resume.pdf'; // your PDF file path in public folder
                        link.download = 'Imteaz_Hossen_Resume.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }}
                    className="btn bg-gradient-to-r from-cyan-700 to-blue-900 text-white font-bold px-4 py-2 sm:px-8 sm:py-3 rounded-full shadow-md transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg focus:outline-none border-0"
                >
                    Download Resume
                </button>
            </div>

        </div>
    );
};

export default Navbar;