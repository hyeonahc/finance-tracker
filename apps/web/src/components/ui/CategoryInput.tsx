import CloseIcon from "@mui/icons-material/Close";
import { Autocomplete, Box, IconButton, TextField } from "@mui/material";
import { SyntheticEvent, useRef, useState } from "react";

interface CategoryInputProps {
  categories: string[];
  deleteCategory: (categoryToDelete: string) => void;
  selectedCategory: string;
  updateCategory: (newCategory: string) => void;
}

const CategoryInput = ({
  categories,
  deleteCategory,
  selectedCategory,
  updateCategory,
}: CategoryInputProps) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLDivElement>(null);

  const changeCategoryAndRemoveFocus = (
    _e: SyntheticEvent,
    newCategory: null | string,
  ) => {
    if (newCategory) {
      updateCategory(newCategory);
      if (inputRef.current) {
        inputRef.current.blur();
      }
    }
  };

  const trackInputChange = (_e: SyntheticEvent, value: string) => {
    setInputValue(value);
  };

  const updateCategoryOnEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      updateCategoryAndClear();
      if (inputRef.current) {
        inputRef.current.blur();
      }
    }
  };

  const updateCategoryAndClear = () => {
    if (inputValue) {
      updateCategory(inputValue);
    }
    setInputValue("");
  };

  const clickCloseIcon = (e: React.MouseEvent, category: string) => {
    e.stopPropagation();
    deleteCategory(category);
  };

  // TODO: Prevent hover background color effect on the category list when the IconButton is hovered.
  return (
    <Autocomplete
      freeSolo
      inputValue={inputValue}
      onChange={changeCategoryAndRemoveFocus}
      onInputChange={trackInputChange}
      options={categories}
      // NOTE: value={selectedCategory} is intentionally positioned last as per formatting rules
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
      renderOption={(props, category) => {
        const { key, ...restProps } = props;
        return (
          <Box
            component="li"
            key={key}
            {...restProps}
            sx={{
              justifyContent: "space-between !important",
            }}
          >
            <span>{category}</span>
            <IconButton onClick={(e) => clickCloseIcon(e, category)}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        );
      }}
      value={selectedCategory}
    />
  );
};

export default CategoryInput;
