import React, { useEffect, useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { SpeedDial } from "primereact/speeddial";
import { Dialog } from "primereact/dialog";
import { InputSwitch } from "primereact/inputswitch";

import { ProgressSpinner } from "primereact/progressspinner";
import { getProductsApi, setProductsApi } from "./Api";

export default function Home({ setIsAuth }: { setIsAuth: any }) {
  const toast = useRef<Toast>(null);

  const [prodName, setProdName] = useState("");
  const [prodMetraj, setProdMetraj] = useState<number | null>();
  const [prodNumber, setProdNumber] = useState<number | null>();
  const [prodPrice, setProdPrice] = useState<number | null>();
  const [metrePrice, setMetrePrice] = useState<number | null>();
  const [products, setProducts] = useState<Array<any>>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isMetre, setIsMetre] = useState<boolean>(false);

  const fetchProducts = async () => {
    setIsLoading(true);
    const res = await getProductsApi();
    setProducts(res.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    let result: number = 0;
    products.map((item) => {
      const price = item.totalPrice.split("₺");
      result = result + Number(price[1]);
    });
    setTotalPrice(result);
  }, [products]);

  const addProduct = async () => {
    if (prodName && prodMetraj && prodNumber && prodPrice) {
      const maxId =
        products.length > 0 ? Math.max(...products.map((p) => p.id)) : 0;

      const newProduct = {
        id: maxId + 1, // Yeni ürün için bir id oluştur
        name: prodName,
        metraj: prodMetraj ? `${prodMetraj} m` : "", // Metrajı formatla
        number: prodNumber ? `${prodNumber} adet` : "", // Adedi formatla
        metrePrice: metrePrice ? `₺${metrePrice}` : "-", // Fiyatı formatla
        price: isMetre
          ? metrePrice
            ? metrePrice * prodMetraj
            : ""
          : prodPrice
          ? `₺${prodPrice}`
          : "", // Fiyatı formatla
        totalPrice: metrePrice
          ? `₺${prodNumber * metrePrice}`
          : `₺${prodPrice * prodNumber}`,
      };

      // Ürün listesini güncelle
      setProducts([...products, newProduct]);

      setIsLoading(true);
      await setProductsApi([...products, newProduct]);
      setIsLoading(false);

      // Formu temizle
      setProdName("");
      setProdMetraj(null);
      setProdNumber(undefined);
      setProdPrice(undefined);
      setMetrePrice(undefined);
    } else showToast();
  };

  const showToast = () => {
    if (toast.current) {
      toast.current.show({
        severity: "error",
        summary: "Hata",
        detail: "Bütün bölgelerin doldurulması zorunludur",
      });
    }
  };

  const deleteProduct = async (product: any) => {
    setProducts(products.filter((p) => p.id !== product.id));
    setIsLoading(true);
    await setProductsApi(products.filter((p) => p.id !== product.id));
    setIsLoading(false);
  };

  const textEditor = (options: any) => {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
        onKeyDown={(e) => e.stopPropagation()}
      />
    );
  };

  const onCellEditComplete = async (e: any) => {
    let { rowData, newValue, field, originalEvent: event } = e;

    if (newValue.trim().length > 0) rowData[field] = newValue;
    else event.preventDefault();

    setIsLoading(true);
    await setProductsApi(products);
    setIsLoading(false);
  };

  function handleSignOut() {
    localStorage.setItem("isAuth", "false");
    setIsAuth(false);
  }

  const speedDialItems = [
    {
      label: "Çıkış Yap",
      icon: "pi pi-sign-out",
      command: () => {
        handleSignOut();
      },
    },
  ];

  const deleteButtonTemplate = (rowData: any) => {
    return (
      <Button
        icon="pi pi-trash"
        rounded
        text
        style={{ color: "red" }}
        raised
        className=" shadow-none"
        onClick={() => deleteProduct(rowData)}
      />
    );
  };

  return (
    <div className="flex relative flex-column pb-8 w-screen align-items-center lg:gap-8 gap-5 py-5">
      <Dialog
        visible={isLoading}
        style={{ display: "flex", width: "80vw", height: "30vh" }}
        contentClassName="flex align-items-center justify-content-center"
        onHide={() => {}}
      >
        <ProgressSpinner
          style={{ width: "50px", height: "50px" }}
          strokeWidth="8"
          fill="var(--surface-ground)"
          animationDuration=".5s"
        />
      </Dialog>
      <SpeedDial
        model={speedDialItems}
        direction="down"
        style={{ top: 10, right: 5 }}
        buttonClassName=" p-button-danger shadow-none "
      />
      <Toast ref={toast} />
      <img src={"images/istek.png"} alt="istek" />
      <div className="flex relative flex-column lg:flex-row w-full px-3 gap-5 align-items-center lg:align-items-end justify-content-center py-5 ">
        <div className="flex flex-column align-items-center p-1 gap-2">
          <div className="flex text-white">İsim</div>
          <InputText
            value={prodName}
            onChange={(e) => setProdName(e.target.value)}
          />
        </div>
        <div className="flex flex-column align-items-center p-1 gap-2">
          <div className="flex text-white">Metraj</div>
          <InputNumber
            className="flex relative w-8"
            inputClassName="flex shadow-none w-4"
            value={prodMetraj}
            onValueChange={(e) => {
              setProdMetraj(e.value);
              setProdPrice(metrePrice ? metrePrice * Number(e.value) : 0);
            }}
            showButtons
            buttonLayout="horizontal"
            decrementButtonClassName="p-button-danger"
            incrementButtonClassName="p-button-success"
            min={0}
            suffix=" m"
            step={0.5}
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
          />
        </div>
        <div className="flex flex-column align-items-center p-1 p-1 gap-2">
          <div className="flex text-white">Adet</div>
          <InputNumber
            className="flex relative w-8"
            inputClassName="flex shadow-none w-4"
            value={prodNumber}
            onValueChange={(e) => setProdNumber(e.value)}
            showButtons
            buttonLayout="horizontal"
            decrementButtonClassName="p-button-danger"
            incrementButtonClassName="p-button-success"
            min={0}
            suffix=" adet"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
          />
        </div>
        <div className="flex flex-column align-items-center p-1 gap-2">
          <InputSwitch
            checked={isMetre}
            onChange={(e) => setIsMetre(e.value)}
          />
          <div className="flex text-white">Metre Fiyatı</div>
          <InputNumber
            inputClassName="shadow-none lg:w-5"
            prefix="₺"
            value={metrePrice}
            disabled={!isMetre}
            onValueChange={(e) => {
              setMetrePrice(e.value);
              setProdPrice(prodMetraj ? prodMetraj * Number(e.value) : 0);
            }}
          />
        </div>
        <div className="flex flex-column align-items-center p-1 gap-2">
          <div className="flex text-white">Adet Fiyatı</div>
          <InputNumber
            inputClassName="shadow-none lg:w-5"
            prefix="₺"
            value={prodPrice}
            disabled={isMetre}
            onValueChange={(e) => setProdPrice(e.value)}
          />
        </div>
        <div className="flex h-full flex-column align-items-end justify-content-end p-1 gap-2">
          <Button
            onClick={addProduct}
            className="shadow-none"
            severity="secondary"
            label="Ekle"
            icon="pi pi-plus"
          />
        </div>
      </div>
      <div className="flex flex-row w-full align-items-center justify-content-center border-round-2xl">
        <DataTable
          value={products}
          className="w-11 lg:w-8 border-round-2xl"
          editMode="cell"
        >
          <Column
            className="surface-400 border-right-2"
            field="name"
            header="İsim"
            editor={(options) => textEditor(options)}
            onCellEditComplete={onCellEditComplete}
          />
          <Column
            className="surface-400 border-right-2"
            field="metraj"
            header="Metraj"
            editor={(options) => textEditor(options)}
            onCellEditComplete={onCellEditComplete}
          />
          <Column
            className="surface-400 border-right-2"
            field="number"
            header="Adet"
            editor={(options) => textEditor(options)}
            onCellEditComplete={onCellEditComplete}
          />
          <Column
            className="surface-400 border-right-2"
            field="metrePrice"
            header="Metre Fiyatı"
            editor={(options) => textEditor(options)}
            onCellEditComplete={onCellEditComplete}
          />
          <Column
            className="surface-400 border-right-2"
            field="price"
            header="Adet Fiyat"
            editor={(options) => textEditor(options)}
            onCellEditComplete={onCellEditComplete}
          />
          <Column
            className="surface-400 w-2 border-right-2"
            field="totalPrice"
            header="Toplam Fiyat"
          />
          <Column
            className="w-1 border-right-2 surface-400"
            body={deleteButtonTemplate}
            header="Sil"
          />
        </DataTable>
      </div>
      <div className="flex bg-bluegray-800 p-5 border-round-xl shadow-7 gap-1">
        <div className="text-white">Toplam Fiyat:</div>
        <div className="text-white">₺{totalPrice}</div>
      </div>
    </div>
  );
}
