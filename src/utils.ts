import { categorizedGamesType, Game } from "./types";

export function separateGamesByCategory(games: Game[]) {
  const categorizedGames: categorizedGamesType = {};

  games.forEach((game) => {
    game.categories.en.forEach((category) => {
      if (!categorizedGames[category]) {
        categorizedGames[category] = [];
      }
      categorizedGames[category].push(game);
    });
  });

  return categorizedGames;
}
