const url = 'http://localhost:5000/info';


export const getAll = ({category: effect}) => {
    return fetch(`${effect.title}/${effect.description}`)
    .then((res)=> res.json())
    .catch((error)=> console.log(error));
}

export const getOne = (category = "effect") => {
    let effectType = category? `category=${category}` : "";

    return fetch(effectType)
    .then((res)=> res.json())
      .catch((error) => console.log(error))
}

export const create = (customerName, description, imageURL) =>{

    let comment = {
        name: customerName,
        description,
        imageURL,
    }
    return fetch(url, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(comment)
    })
}

