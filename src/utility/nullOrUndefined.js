export const isNull = (obj) =>{
    return obj===null
}

export const isUndefined = (obj) =>{
    return typeof(obj)=== 'undefined'
}

export const isNullOrUndefined = obj =>{
    return (isNull(obj) || isUndefined(obj))
}