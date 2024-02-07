type Query = {
    [key: string]: any;   
}


export function buildQuery(input?: any): Query {
    const query: Query = {};
    Object.keys(input).forEach(key => {
        if (input[key] && typeof input[key] === 'string') 
            query[key] = { $regex: input[key], $options: 'i' }
    })
    return query
}