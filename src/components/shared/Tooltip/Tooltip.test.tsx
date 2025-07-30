import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Tooltip } from '@components/shared/Tooltip/index';
import styles from './styles.module.scss';

describe('Tooltip component', () => {
  it('renders children and title text', () => {
    render(
      <Tooltip title="Tooltip text">
        <button>Hover me</button>
      </Tooltip>
    );

    const child = screen.getByRole('button', { name: 'Hover me' });
    expect(child).toBeInTheDocument();

    const tooltipText = screen.getByText('Tooltip text');
    expect(tooltipText).toBeInTheDocument();
    expect(tooltipText.tagName).toBe('SPAN');
  });

  it('applies default bottom position class', () => {
    render(
      <Tooltip title="T">
        <div>Content</div>
      </Tooltip>
    );

    const container = screen.getByText('Content').parentElement;
    expect(container).toHaveClass(styles.tooltip);
    expect(container).toHaveClass(styles.bottom);
    expect(container).not.toHaveClass(styles.top);
  });

  it('applies correct class for each position prop', () => {
    const { rerender } = render(
      <Tooltip title="T" position="top">
        <span>Item</span>
      </Tooltip>
    );
    let container = screen.getByText('Item').parentElement;
    expect(container).toHaveClass(styles.tooltip, styles.top);

    rerender(
      <Tooltip title="T" position="left">
        <span>Item</span>
      </Tooltip>
    );
    container = screen.getByText('Item').parentElement;
    expect(container).toHaveClass(styles.tooltip, styles.left);

    rerender(
      <Tooltip title="T" position="right">
        <span>Item</span>
      </Tooltip>
    );
    container = screen.getByText('Item').parentElement;
    expect(container).toHaveClass(styles.tooltip, styles.right);
  });
});
