import { TextField } from "@mui/material";

interface TitleInputProps {
  setTitle: (value: string) => void;
  title: string;
}

const TitleInput = ({ setTitle, title }: TitleInputProps) => {
  const updateTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTitle(value);
  };

  return (
    <TextField
      fullWidth
      label="Title"
      onChange={updateTitle}
      placeholder="Title"
      value={title}
      variant="outlined"
    />
  );
};

export default TitleInput;
