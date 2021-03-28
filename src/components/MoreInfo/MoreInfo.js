const url = 'http://localhost:5000/info';


export const getAll = ({category: "effect"}) => {
    return fetch(`${infoName}/${description}`)
    .then((res)=> res.json())
    .catch((error)=> console.log(error));
}