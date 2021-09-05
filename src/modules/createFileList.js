module.exports = function (dataArray) {

let currentRows = '';

for (let indexNumber = 0; indexNumber < dataArray.length; indexNumber++) {
    currentRows =+ currentRows + `
    <tr> 
    <td> ${dataArray[indexNumber].id} </td>
    ` + `<td> ${dataArray[indexNumber].name} </td> 
    ` + `<td> ${dataArray[indexNumber].size} </td> 
    ` + `<td> <a href="/delete/ ${dataArray[indexNumber].id}">delete </a> </td> 
    ` + `<td> <a href="/download/ ${dataArray[indexNumber].id}"> download </a> </td> 
    </tr>`
    
}

return currentRows;
};
