import type { LinkProps } from '@chakra-ui/react';

import { Link } from '@chakra-ui/react';


export default function Stack(props: LinkProps) {
	return (
		<Link
			px={2}
			py={1}
			rounded="md"
			_hover={{ textDecoration: "none", bg: "gray.700" }}
			href="#"
			{...props}
		/>
	);
}