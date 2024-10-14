import axios from "axios";

export async function getProductsApi(){
   return await axios.get("https://berkaykaynar.com.tr:8443/products",{
    headers:{
      'Content-Type': 'application/json',
    }
   }) 
}

export async function setProductsApi(prod:any) {
    await axios({
        method: 'post',
        url:"https://berkaykaynar.com.tr:8443/products",
        data: prod
      });
}