const countPage = (total,limit)=>{
    const pagesNumberInt = ~~(total/limit);
    const pagesNumberFloat = (total/limit);
    if(pagesNumberFloat>pagesNumberInt) return (pagesNumberInt+1);
    return pagesNumberInt;
}

module.exports = countPage;