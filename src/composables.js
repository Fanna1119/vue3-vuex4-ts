//composables

const findItemIndex = (the_array, searchby, itemname) => the_array.findIndex(obj => obj[searchby] == itemname)

//finds and deletes item by index
const findAndDelete = (the_array, searchby, proj_id) => {
    //finds index
    const index = findItemIndex(the_array, searchby, proj_id)
    //delete index
    if (index !== -1) the_array.splice(index, 1)
}


export {
    findAndDelete,
    findItemIndex
}