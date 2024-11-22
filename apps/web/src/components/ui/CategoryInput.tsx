import { Autocomplete, TextField } from "@mui/material";
import { SyntheticEvent, useRef, useState } from "react";

interface CategoryInputProps {
  categories: string[];
  selectedCategory: string;
  updateCategory: (newCategory: string) => void;
}

const CategoryInput = ({
  categories,
  selectedCategory,
  updateCategory,
}: CategoryInputProps) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLDivElement>(null);

  const changeCategoryAndRemoveFocus = (
    _event: SyntheticEvent,
    newCategory: null | string,
  ) => {
    if (newCategory) {
      updateCategory(newCategory);
      if (inputRef.current) {
        inputRef.current.blur();
      }
    }
  };

  const trackInputChange = (_event: SyntheticEvent, value: string) => {
    setInputValue(value);
  };

  const updateCategoryOnEnter = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      updateCategoryAndClear();
      if (inputRef.current) {
        inputRef.current.blur();
      }
      event.preventDefault();
    }
  };

  const updateCategoryAndClear = () => {
    if (inputValue) {
      updateCategory(inputValue);
    }
    setInputValue("");
  };

  return (
    <Autocomplete
      freeSolo
      inputValue={inputValue}
      onChange={changeCategoryAndRemoveFocus}
      onInputChange={trackInputChange}
      options={categories}
      renderInput={(params) => (
        <TextField
          {...params}
          inputRef={inputRef}
          label="Select or Add Category"
          onBlur={updateCategoryAndClear}
          onKeyDown={updateCategoryOnEnter}
          placeholder="Type a category"
          variant="outlined"
        />
      )}
      value={selectedCategory}
    />
  );
};

export default CategoryInput;
