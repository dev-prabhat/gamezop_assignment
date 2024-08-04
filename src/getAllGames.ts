export default async function getAllGames() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`)
    const resJson = await res.json()
    return resJson
}
