module.exports = function (data) {

let currentRows = '';

for (let indexNumber = 0; indexNumber < dataArray.length; indexNumber++) {
    currentRows =+ currentRows + `
    <tr> 
    <td> ${data[indexNumber].id} </td>
    ` + `<td> ${data[indexNumber].name} </td> 
    ` + `<td> ${data[indexNumber].size} </td> 
    ` + `<td> <a href="/delete/ ${data[indexNumber].id}"> </a> </td> 
    ` + `<td> <a href="/download/ ${data[indexNumber].id}"> </a> </td> 
    </tr>`
    
}

return currentRows;
};
