import { render, screen } from '@testing-library/react';
import { Tabs } from '@components/shared/Tabs/index';
import { expect } from 'vitest';
import userEvent from '@testing-library/user-event';

const MOCK_TABS = [
  { id: 'tab1', label: 'Tab One', content: <div>Content One</div> },
  { id: 'tab2', label: 'Tab Two', content: <div>Content Two</div> },
];

describe('Tabs component', () => {
  it('renders all tab labels and show content', () => {
    render(<Tabs tabs={MOCK_TABS} />);

    expect(screen.getByRole('tab', { name: /tab one/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /tab two/i })).toBeInTheDocument();

    expect(screen.getByRole('tabpanel')).toHaveTextContent('Content One');
    expect(screen.queryByText('Content Two')).not.toBeVisible();
  });

  it('switches tab content on click', async () => {
    render(<Tabs tabs={MOCK_TABS} />);
    const user = userEvent.setup();

    const secondTab = screen.getByRole('tab', { name: /tab two/i });
    await user.click(secondTab);

    const secondPanel = screen.getByRole('tabpanel');
    expect(secondPanel).toHaveTextContent('Content Two');
  });

  it('calls onChange callback when tab changes', async () => {
    const handleChange = vi.fn();
    render(<Tabs tabs={MOCK_TABS} onChange={handleChange} />);
    const user = userEvent.setup();

    await user.click(screen.getByRole('tab', { name: /tab two/i }));
    expect(handleChange).toHaveBeenCalledWith(1);
  });
});
