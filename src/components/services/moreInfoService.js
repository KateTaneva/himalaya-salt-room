 const url = 'http://localhost:5000/info';


// export const getOne = ({category: effect}) => {
//     return fetch(`${infoName}/${description}`)
//     .then((res)=> res.json())
//     .catch((error)=> console.log(error));
// }

export const getOne = (category = "effect") => {
    let effectType = category ? `?category=${category}` : "";

    return fetch(effectType)
    .then((res)=> res.json())
    .catch((error) => console.log(error))
}