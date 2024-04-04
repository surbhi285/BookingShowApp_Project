let crudOperation = {   
    get: function(list){
      return list;
    },

    // getDetail: function(list, id, pk) {
    //     console.log(id);
    //         console.log(pk)
    //     return list.filter((item) => {
            
    //         return item[pk] === id
            
    //     })
    // },

    add : function(list, newObj){
        list.push(newObj);
        return list;
    },

    remove: function(list, id, pk){
        return list.filter((item)=>{
            return item[pk] !== id;
        })
    },

    update: function(list, obj, pk){
       return list.map((item)=>{
        if(item[pk]===obj[pk]){
            return obj; 
        }else{
            return item;
        }

        })
    }
  
}
export default crudOperation;