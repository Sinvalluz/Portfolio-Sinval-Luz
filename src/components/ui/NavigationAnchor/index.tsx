import { NavLink, useMatch } from 'react-router';

type NavigationAnchorProps = {
	name: string;
	params: string;
};

const NavigationAnchor = ({ name, params }: NavigationAnchorProps) => {
	const match = useMatch(`/${params}`);
	return (
		<NavLink
			to={`/${params}`}
			className={`transition-colors ${
				match ? 'text-white' : 'text-white/60 hover:text-white/80'
			}`}
		>
			{name}
		</NavLink>
	);
};

export default NavigationAnchor;
