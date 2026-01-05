import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import GithubIcon from '../../ui/GithubIcon';
import NavigationAnchor from '../../ui/NavigationAnchor';

const Header = () => {
	const [menuBtn, setMenuBtn] = useState<boolean>(false);

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth > 768) {
				setMenuBtn(false);
			}
		});
	}, []);
	return (
		<header
			className={`text-white  flex flex-col justify-between px-6 py-4 border-b-2 border-[#0D0D0D] backdrop-blur-md md:flex-row gap-8`}
		>
			<div className='flex justify-between items-center '>
				<h1 className='text-2xl text-white hover:text-white/80 transition-colors cursor-alias'>
					Sinval Luz
				</h1>
				<button
					type='button'
					className='cursor-pointer md:hidden'
					onClick={() => setMenuBtn(!menuBtn)}
				>
					{menuBtn ? <X /> : <Menu />}
				</button>
			</div>
			<nav
				className={`flex-col gap-6 text-base md:flex-row md:flex md:items-center ${menuBtn ? 'flex' : 'hidden'}`}
			>
				<NavigationAnchor
					name='Início'
					params=''
				/>
				<NavigationAnchor
					name='Sobre'
					params='sobre'
				/>
				<NavigationAnchor
					name='Projetos'
					params='projetos'
				/>
			</nav>
			<div
				className={`gap-4 items-center md:flex ${menuBtn ? 'flex' : 'hidden'}`}
			>
				<button
					type='button'
					className='border p-2 rounded-full cursor-pointer hover:bg-white/10 transition-colors'
				>
					PT | EN
				</button>
				<a
					href='https://github.com/Sinvalluz'
					target='_blank'
					rel='noreferrer'
				>
					<GithubIcon />
				</a>
			</div>
		</header>
	);
};

export default Header;
