import css from "./SearchBox.module.css";

interface SearchBoxProps {
  value: string;
  onSearch: (newSearchQuetry: string) => void;
}

export default function SearchBox({ value, onSearch }: SearchBoxProps) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <>
      <input
        className={css.input}
        type="text"
        placeholder="Search notes"
        onChange={handleSearch}
        defaultValue={value}
      />
    </>
  );
}
