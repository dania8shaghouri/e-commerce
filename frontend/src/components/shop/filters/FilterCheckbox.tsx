interface Props {
  label: string;
}

const FilterCheckbox = ({ label }: Props) => {
  return (
    <label className="flex cursor-pointer items-center gap-3">
      <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />

      <span className="text-sm text-gray-700">{label}</span>
    </label>
  );
};

export default FilterCheckbox;
