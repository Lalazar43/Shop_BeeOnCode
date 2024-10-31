import React, { useState, createContext, useContext } from "react";
import style from "./Content.module.scss";
import Categories from "./Categories/Categories";
import SubCategories from "./SubCategories/SubCategories";
import Products from "./Products/Products";
import AddProducts from "./Products/AddProducts";

export const ItemContext = createContext();

export const useItemContext = () => useContext(ItemContext);

const Content = ({ items, subcategory, searchItem }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItemName, setSelectedItemName] = useState(""); 
  const [isGender, setIsGender] = useState("male"); 
  const [areSubCategoriesVisible, setAreSubCategoriesVisible] = useState(false);
  const [products, setProducts] = useState(items[1] || []);
  const [isAddProductVisible, setIsAddProductVisible] = useState(false);
  
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setSelectedItemName(category); 
    setAreSubCategoriesVisible(true); 
  };

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setIsAddProductVisible(false); 
  };

  const handleCloseAddProduct = () => {
    setIsAddProductVisible(false); 
  };

  return (
    <ItemContext.Provider value={{ selectedItemName, setSelectedItemName }}>
      <div className={style.body}>
        <div className={style.main}>
          <Categories items={items[0]} onSelectCategory={handleSelectCategory} setIsGender={setIsGender} />
          {areSubCategoriesVisible && (
            <SubCategories items={items[0]} subcategory={subcategory} />
          )}
          <Products 
            items={products} 
            category={selectedCategory} 
            searchItem={searchItem} 
            isGender={isGender} 
            onShowAddProduct={() => setIsAddProductVisible(true)} 
          />
        </div>
        
        {isAddProductVisible && (
          <AddProducts 
            onClose={handleCloseAddProduct} 
            onAddProduct={handleAddProduct} 
            gender={isGender} 
            type={products} 
          >
            <Categories 
              items={items[0]} 
              onSelectCategory={handleSelectCategory} 
              setIsGender={setIsGender} 
              isInAddProducts={true} 
            />
            {areSubCategoriesVisible && (
              <SubCategories 
                items={items[0]} 
                subcategory={subcategory} 
                isInAddProducts={true} 
              />
            )}
          </AddProducts>
        )}
      </div>
    </ItemContext.Provider>
  );
};

export default Content;
