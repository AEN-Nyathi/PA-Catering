'use client';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import ProfileMenu from './ProfileMenu';
import AuthButton from './AuthButton';
import MobileMenu from './MobileMenu';
import { useMenubarToggle } from './useMenubarToggle';

const Navbar: React.FC = () => {
	const { profileOpen, mobileOpen, setMenubar } = useMenubarToggle();

	return (
		<header className='sticky bg-black/50 blur-[0.1px] backdrop-blur-md  top-0 left-0 m-0 p-0  w-full px-2 z-50'>
			<div className='flex justify-between w-full'>
				<MobileNavbar
					setMenubar={setMenubar}
					mobileOpen={mobileOpen}
				/>
				<DesktopNavbar />
				<AuthButton setMenubar={setMenubar} />
			</div>
			{ profileOpen ? <ProfileMenu setMenubar={setMenubar} /> : null}
			{mobileOpen ? <MobileMenu setMenubar={setMenubar} /> : null}
		</header>
	);
};
export default Navbar;
