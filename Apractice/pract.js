async function handleInput(e){
  const fetchData = await fetch(`http://dummyjson.com/users/search?q=${e.target.value}`)
  const result = await fetchData.json()
  console.log(result)
}


function deboune(func, delay){
  let timer = null
  return function(args){
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=>{
      func(args)
    },delay)
  }
}


let debouncedFunc = deboune(handleInput, 2000)



