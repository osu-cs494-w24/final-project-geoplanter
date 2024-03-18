/*
   Deletes all items that require an upgrade to view cycle information
*/
export function noPremium(data) {
   let cnt = 0
   for(let i = 0; i < data.length; i++) {
      console.log(data[i].cycle.replace(/ .*/,''))
      if(data[i].cycle.replace(/ .*/,'') === "Upgrade") {
         cnt ++
      }
   }
   for(let i = 0; i < cnt; i ++) {
      data.pop()
   }
   return data
}