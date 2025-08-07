import { render, screen } from '@testing-library/react';
import { Select } from '@components/shared/Select/index';
import styles from './styles.module.scss';

const MOCK_OPTIONS = [
  { value: 'one', label: 'Option One' },
  { value: 'two', label: 'Option Two' },
];
describe('Select component', () => {
  it('renders label, required asterisk and all options', () => {
    render(
      <Select
        label="Test Select"
        required
        options={MOCK_OPTIONS}
        value=""
        onChange={() => {}}
      />
    );

    const label = screen.getByText(/Test Select/);
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('*');

    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();

    expect(screen.getByText('Option One')).toBeInTheDocument();
    expect(screen.getByText('Option Two')).toBeInTheDocument();
  });

  it('renders empty list if no options provided', () => {
    render(<Select label="Empty" value="" onChange={() => {}} options={[]} />);

    expect(screen.getByText('No data')).toBeInTheDocument();
  });

  it('shows error styling and helper text when error=true', () => {
    render(
      <Select
        label="With Error"
        error
        helperText="This field is required"
        value=""
        onChange={() => {}}
        options={MOCK_OPTIONS}
      />
    );

    const select = screen.getByRole('combobox');
    expect(select).toHaveClass(styles.selectWrapper__select);
    expect(select).toHaveClass(styles.selectWrapper_borderError);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });
});
