export const asc=(arr)=>{
    console.log(arr)
            let arr1=([...arr])
            let arr2=arr1.sort()
            console.log("yash5",arr2)
            return arr2;
}

export const desc=(arr)=>{
    console.log(arr)
            let arr1=([...arr])
            let arr2=arr1.sort((function(a, b){return b-a}));
            console.log("yash5",arr2)
            return arr2;
}