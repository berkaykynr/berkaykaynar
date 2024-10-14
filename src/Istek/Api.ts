import axios from "axios";

export async function getProductsApi(){
   return await axios.get("https://209.38.216.132:8443/products",{
    headers:{
      'Content-Type': 'application/json',
    }
   }) 
}

export async function setProductsApi(prod:any) {
    await axios({
        method: 'post',
        url:"https://209.38.216.132:8443/products",
        data: prod
      });

}