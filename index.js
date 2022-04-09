const sample =['Yusuf/23/100level','Bhadchef/23/500level']

const reverse  = (arr) => {
    const deArray2 =[]
    arr.forEach(element => {
        const deArray = element.split("/")

        deArray2.push({
            name:  `${deArray[0]}`,
            age:`${deArray[1]}`,
            level:`${deArray[2]}`
        })
    });
    return deArray2
}

console.log(reverse(sample));