import { useState } from 'react';
import NavigationAnchor from '../ui/NavigationAnchor';
import { Menu, X } from 'lucide-react';
import GithubIcon from '../ui/GithubIcon';

const Header = () => {
	const [menuBtn, setMenuBtn] = useState<boolean>(false);

	return (
		<header
			className={`text-white  flex flex-col justify-between px-6 py-4 border-b-2 border-[#0D0D0D] backdrop-blur-md ${menuBtn ? 'gap-8' : 'gap-4'}`}
		>
			<div className='flex justify-between items-center '>
				<h1 className='text-2xl text-white hover:text-white/80 transition-colors cursor-alias'>
					Sinval Luz
				</h1>
				<button
					type='button'
					className='cursor-pointer'
					onClick={() => setMenuBtn(!menuBtn)}
				>
					{menuBtn ? <X /> : <Menu />}
				</button>
			</div>
			<nav
				className={`flex  text-xl ${menuBtn ? 'flex-col gap-4' : 'hidden'}`}
			>
				<NavigationAnchor name='Início' />
				<NavigationAnchor name='Sobre' />
				<NavigationAnchor name='Projetos' />
			</nav>
			<div
				className={`gap-4 items-center ${menuBtn ? 'flex' : 'hidden'}`}
			>
				<button
					type='button'
					className='border p-2 rounded-full cursor-pointer'
				>
					PT | EN
				</button>
				<a href='https://github.com/Sinvalluz'>
					<GithubIcon />
				</a>
			</div>
		</header>
	);
};

export default Header;
