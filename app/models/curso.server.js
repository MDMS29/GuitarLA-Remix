export async function getCurso(){
    const res = await fetch(`${process.env.API_URL}/curso?populate=imagen`)
    return res.json()
}