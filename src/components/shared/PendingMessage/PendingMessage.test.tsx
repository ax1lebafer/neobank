import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import styles from './styles.module.scss';
import { PendingMessage } from '@components/shared/PendingMessage/index';

describe('PendingMessage component', () => {
  it('renders the title in h2 and description in paragraph', () => {
    render(<PendingMessage title="Loading" description="Please wait" />);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Loading');

    const paragraph = screen.getByText('Please wait');
    expect(paragraph.tagName).toBe('P');
  });

  it('applies the correct CSS module class on root div', () => {
    const { container } = render(<PendingMessage title="T" description="D" />);
    const rootDiv = container.firstChild as HTMLElement;
    expect(rootDiv).toHaveClass(styles.pending);
  });

  it('updates rendered text when props change', () => {
    const { rerender } = render(
      <PendingMessage title="First" description="Desc1" />
    );
    expect(screen.getByRole('heading')).toHaveTextContent('First');
    expect(screen.getByText('Desc1')).toBeInTheDocument();

    rerender(<PendingMessage title="Second" description="Desc2" />);
    expect(screen.getByRole('heading')).toHaveTextContent('Second');
    expect(screen.getByText('Desc2')).toBeInTheDocument();
  });
});
