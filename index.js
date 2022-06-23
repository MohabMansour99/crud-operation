let productname = document.getElementById("productname");
let productprice = document.getElementById("productname");
let productcategory = document.getElementById("productname");
let productDesc = document.getElementById("productname");
let addBtn = document.getElementById("addBtn");

let productarray ;
let mood ="create";
let updateVar;



if(localStorage.getItem("products")== null)
{
    productarray=[];
}
else
{
    productarray = JSON.parse(localStorage.getItem("products")) ;
    display(productarray);
}


function update(x)
{
    productname.value=productarray[x].productname;
    productprice.value=productarray[x].productprice;
    productcategory.value=productarray[x].productcategory;
    productDesc.value=productarray[x].productDesc;
    addBtn.innerHTML="Update";
    addBtn.style.backgroundColor="yellow";


    //mood update
    mood="update";
    updateVar=1;
    
    scroll({
        top:0 ,
        behavior:"smooth"
    })


}

function addproduct()
{
    let products = 
    {
        name:productname.value,
        price:productprice.value,
    
        category:productcategory.value,
        Desc:productDesc.value,
        
    };

 // count data and check mood create or update
    if(mood==="create")
    {
        productarray.push(products);

    }
    else
    {
        productarray[updateVar]=products;
        mood="create";
        addBtn.innerHTML="add product";
        addBtn.style.backgroundColor="red";

    }



  


    localStorage.setItem("products" , JSON.stringify(productarray));
    display(productarray)
    clear()
    
    
} ;



function display(x) {
    let cartooona=``;
    for(let i =0 ; i<x.length; i++)
    {
        cartooona+=`
        <tr>
        <td>  ${[i]} </td>
        <td>  ${x[i].name} </td>
        <td>  ${x[i].price} </td>
        <td>  ${x[i].category} </td>
        <td>  ${x[i].Desc} </td>
        <td>  <button class="btn btn-danger" onclick="update(${i})"> update </button> </td>
        <td>  <button class="btn btn-info" onclick="deleteproduct(${i})"> delete </button> </td>
        </tr>
        
        `
    }
    document.getElementById("row").innerHTML=cartooona;
  }


  function clear() {
      productname.value="";
      productprice.value="";

      productcategory.value="";

      productDesc.value="";


    } ;

    function deleteproduct(x) {

        productarray.splice(x,1)
        display(productarray);



      }

      function search(term) {
          
          let searcharray=[];
          for(let i=0 ; i<productarray.length; i++)
          {
              if(productarray[i].name.toLowerCase().includes(term.toLowerCase())== true)
              {
                  searcharray.push(productarray[i])
              }
          }
          display(searcharray);
        }
      




