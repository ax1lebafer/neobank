import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AboutCardItem } from '@components/shared/AboutCardItem/index';
import styles from './styles.module.scss';

describe('AboutCardItem component', () => {
  const iconUrl = 'icon.svg';
  const title = 'Card Title';
  const description = 'This is a description.';

  it('renders icon with alt text matching title', () => {
    render(
      <AboutCardItem icon={iconUrl} title={title} description={description} />
    );

    const img = screen.getByRole('img', { name: title }) as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain(iconUrl);
  });

  it('renders title in h2 with correct class and description in p tag', () => {
    render(
      <AboutCardItem icon={iconUrl} title={title} description={description} />
    );

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(title);
    expect(heading).toHaveClass(styles.card__title);

    const paragraph = screen.getByText(description);
    expect(paragraph.tagName).toBe('P');
    expect(paragraph).toBeInTheDocument();
  });

  it('renders elements in correct DOM order: img, h2, p', () => {
    const { container } = render(
      <AboutCardItem icon={iconUrl} title={title} description={description} />
    );
    const article = container.querySelector('article');
    expect(article?.children[0].tagName).toBe('IMG');
    expect(article?.children[1].tagName).toBe('H2');
    expect(article?.children[2].tagName).toBe('P');
  });
});
