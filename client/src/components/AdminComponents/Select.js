import { Select } from 'antd';
const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const SelectForm = () => (
  <Select
    mode="tags"
    style={{
      width: '100%',
    }}
    onChange={handleChange}
    tokenSeparators={[',']}
    options={options}
  />
);
export default SelectForm;