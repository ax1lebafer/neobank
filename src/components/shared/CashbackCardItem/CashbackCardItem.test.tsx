import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import styles from './styles.module.scss';
import { CashbackCardItem } from '@components/shared/CashbackCardItem/index';

const TITLE = 'Special Offer';
const CASHBACK = '5% Cashback';
describe('CashbackCardItem component', () => {
  it('renders title and cashback with default primary background', () => {
    const { container } = render(
      <CashbackCardItem title={TITLE} cashback={CASHBACK} />
    );
    const article = container.querySelector('article');
    expect(article).toBeInTheDocument();
    expect(article).toHaveClass(styles.card);
    expect(article).toHaveStyle({ backgroundColor: '#EAECEE' });

    const titlePara = screen.getByText(TITLE);
    expect(titlePara).toBeInTheDocument();
    expect(titlePara.tagName).toBe('P');
    expect(titlePara).toHaveClass(styles.card__title);

    const cashbackPara = screen.getByText(CASHBACK);
    expect(cashbackPara).toBeInTheDocument();
    expect(cashbackPara.tagName).toBe('P');
    expect(cashbackPara).toHaveClass(styles.card__cashback);
  });

  it('applies secondary background for non-primary variant', () => {
    const { container } = render(
      <CashbackCardItem title={TITLE} cashback={CASHBACK} variant="secondary" />
    );
    const article = container.querySelector('article');
    expect(article).toHaveStyle({ backgroundColor: '#88B3B899' });
  });

  it('updates rendered content when props change', () => {
    const { rerender } = render(<CashbackCardItem title="A" cashback="1%" />);
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('1%')).toBeInTheDocument();

    rerender(<CashbackCardItem title="B" cashback="10%" variant="secondary" />);
    expect(screen.getByText('B')).toBeInTheDocument();
    expect(screen.getByText('10%')).toBeInTheDocument();
    const article = screen.getByText('B').closest('article');
    expect(article).toHaveStyle({ backgroundColor: '#88B3B899' });
  });
});
