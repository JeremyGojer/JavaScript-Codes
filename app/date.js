var showAge=()=>{
    let d1 = new Date('2023-05-07')
    let d2 = new Date(`${new Date().getFullYear()}-${d1.getMonth()+1}-${d1.getDate()}`)
    let d3 = new Date('2023-05-07')
    console.log(d2.getDate(),d1.getDate())
    console.log(d2-d3)
}
showAge()