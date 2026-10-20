import {
	pieceBoucle,
	pieceBrass,
	pieceFabric,
	pieceGreenTile,
	pieceLinen,
	pieceSmear,
	pieceSphere,
	pieceTerrazzo,
	swatchBoucle,
	swatchBrass,
	swatchFabric,
	swatchGreenTile,
	swatchLinen,
	swatchStone,
	swatchTerrazzo,
} from "../assets/images";

export const site = {
	name: "People + Spaces",
	tagline: "",
	motto: ["Design", "for a more", "human", "tomorrow"],
	sectors: [],
	// TODO: replace with the studio's real details
	email: "hello@example.com",
	instagram: "",
};

export type NavItem = { label: string; to: string };

export const nav: NavItem[] = [
	{ label: "About us", to: "/about" },
	{ label: "Our approach", to: "/approach" },
	{ label: "Our services", to: "/services" },
	{ label: "Portfolio", to: "/portfolio" },
	{ label: "The shop", to: "/shop" },
	{ label: "Contact", to: "/contact" },
];

/**
 * Clickable areas on the moodboard. `x`/`y` are percentages of the board image
 * (1920×1080) and mark the centre of the pill's "+" button.
 */
export type Hotspot = NavItem & { x: number; y: number; item: string };

export const hotspots: Hotspot[] = [
	{
		label: "Our approach",
		to: "/approach",
		x: 9,
		y: 62,
		item: "paint swatches",
	},
	{
		label: "Portfolio",
		to: "/portfolio",
		x: 23,
		y: 27,
		item: "terrazzo tiles",
	},
	{ label: "About us", to: "/about", x: 38, y: 21, item: "brass sphere" },
	{
		label: "Our services",
		to: "/services",
		x: 50,
		y: 39,
		item: "green glazed tiles",
	},
	{ label: "The shop", to: "/shop", x: 75, y: 49, item: "patterned fabric" },
	{ label: "Contact", to: "/contact", x: 85, y: 82, item: "brushed brass" },
];

/**
 * The moodboard re-composed for phones: a tall flat-lay of individual cut-outs.
 * `x`, `y` and `w` are in units of the board's width (the board is 100 wide, `PORTRAIT_HEIGHT` tall),
 * `rotate` is in degrees, and `pill` is where the label sits as a percentage of the piece.
 * Pieces are layered in array order.
 */
export const PORTRAIT_HEIGHT = 170;

export type Piece = {
	src: string;
	aspect: number; // width / height of the image
	x: number;
	y: number;
	w: number;
	rotate: number;
	link?: NavItem & { pill: [number, number] };
};

export const portraitPieces: Piece[] = [
	{
		src: pieceLinen,
		aspect: 272 / 341,
		x: 3,
		y: 4,
		w: 42,
		rotate: -5,
		link: { label: "Our approach", to: "/approach", pill: [50, 55] },
	},
	{
		src: pieceTerrazzo,
		aspect: 245 / 366,
		x: 51,
		y: 0,
		w: 36,
		rotate: 3,
		link: { label: "Portfolio", to: "/portfolio", pill: [50, 38] },
	},
	{
		src: pieceSphere,
		aspect: 1,
		x: 73,
		y: 43,
		w: 23,
		rotate: 0,
		link: { label: "About us", to: "/about", pill: [30, 92] },
	},
	{ src: pieceSmear, aspect: 188 / 292, x: 5, y: 58, w: 26, rotate: 7 },
	{
		src: pieceGreenTile,
		aspect: 314 / 318,
		x: 29,
		y: 62,
		w: 46,
		rotate: -2,
		link: { label: "Our services", to: "/services", pill: [50, 50] },
	},
	{ src: pieceBoucle, aspect: 308 / 304, x: 4, y: 110, w: 44, rotate: -3 },
	{
		src: pieceFabric,
		aspect: 283 / 254,
		x: 52,
		y: 104,
		w: 44,
		rotate: 4,
		link: { label: "The shop", to: "/shop", pill: [50, 50] },
	},
	{
		src: pieceBrass,
		aspect: 1,
		x: 38,
		y: 141,
		w: 25,
		rotate: -6,
		link: { label: "Contact", to: "/contact", pill: [50, 50] },
	},
];

export type Swatch = { src: string; name: string };

/** Single materials, cut out of the moodboard by `npm run images`. */
export const swatches = {
	linen: { src: swatchLinen, name: "Linen" },
	terrazzo: { src: swatchTerrazzo, name: "Terrazzo" },
	greenTile: { src: swatchGreenTile, name: "Green glazed tile" },
	fabric: { src: swatchFabric, name: "Woven fabric" },
	boucle: { src: swatchBoucle, name: "Bouclé" },
	stone: { src: swatchStone, name: "Limestone" },
	brass: { src: swatchBrass, name: "Brushed brass" },
} satisfies Record<string, Swatch>;
