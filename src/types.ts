export type Games = Readonly<{
  games: Game[];
}>;

export type Game = Readonly<{
  code: string;
  url: string;
  name: {
    en: string;
  };
  isPortrait: boolean;
  description: {
    en: string;
  };
  gamePreviews: {
    en: string;
  };
  assets: {
    cover: string;
    brick: string;
    thumb: string;
    wall: string;
    square: string;
    screens: [string, string, string];
    coverTiny: string;
    brickTiny: string;
  };
  categories: {
    en: [string];
  };
  tags: {
    en: [string, string, string, string, string, string, string];
  };
  width: number;
  height: number;
  colorMuted: string;
  colorVibrant: string;
  privateAllowed: boolean;
  rating: number;
  numberOfRatings: number;
  gamePlays: number;
  hasIntegratedAds: boolean;
}>;

export type categorizedGamesType = {
  [key: string]: Game[];
};

export type imagesAnimationType = {
  [key: string]: string[];
};

export type AnimatedImagesProps = {
  src: string[];
  slides: string
};
