import FilterCheckbox from "./FilterCheckbox";

interface Props {
  title: string;
  options: string[];
}

const FilterGroup = ({ title, options }: Props) => {
  return (
    <div className="mb-8">
      <h3 className="mb-4 font-semibold">{title}</h3>

      <div className="space-y-3">
        {options.map((option) => (
          <FilterCheckbox key={option} label={option} />
        ))}
      </div>
    </div>
  );
};

export default FilterGroup;
