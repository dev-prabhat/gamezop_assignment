export default async function getAllGames() {
    const res = await fetch('https://pub.gamezop.com/v3/games?id=peSLSV')
    const resJson = await res.json()
    return resJson
}
