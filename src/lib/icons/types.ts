import type { SVGAttributes } from 'svelte/elements';
type TitleType = {
	id?: string | undefined | null;
	title?: string | undefined | null;
};

type DescType = {
	id?: string | undefined | null;
	desc?: string | undefined | null;
};

export interface BaseProps extends SVGAttributes<SVGElement> {
	size?: string | undefined | null;
	role?: string | undefined | null;
	color?: string | undefined | null;
	class?: string | undefined | null;
}

export interface Props extends BaseProps {
	title?: TitleType;
	desc?: DescType;
	ariaLabel?: string | undefined | null;
}
