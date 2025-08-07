import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CustomIconButton } from '@components/UI/CustomIconButton/index';
import userEvent from '@testing-library/user-event';
import styles from './styles.module.scss';

describe('CustomIconButton', () => {
  it('should renders icon image and children text', () => {
    render(
      <CustomIconButton icon="/assets/icons/close.svg">
        Click me
      </CustomIconButton>
    );

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();

    const img = screen.getByAltText('Button icon') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain('/assets/icons/close.svg');
  });

  it('calls onClick handler when clicked', async () => {
    const onClick = vi.fn();
    render(
      <CustomIconButton icon="icon.svg" onClick={onClick}>
        Press
      </CustomIconButton>
    );
    const button = screen.getByRole('button', { name: /press/i });
    await userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('merges custom className with default styles', () => {
    render(
      <CustomIconButton icon="icon.svg" className="my-custom">
        Hello
      </CustomIconButton>
    );
    const button = screen.getByText('Hello');
    expect(button).toHaveClass(styles.button);
    expect(button).toHaveClass('my-custom');
  });
});
