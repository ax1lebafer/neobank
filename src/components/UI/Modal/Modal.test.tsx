import { describe } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { Modal } from '@components/UI/Modal/index';
import styles from './styles.module.scss';

afterEach(() => {
  cleanup();
  document.body.classList.remove('modal-open');
});

describe('Modal component', () => {
  it('does not render anything when open is false and does not add body class', () => {
    render(
      <Modal open={false} onClose={() => {}}>
        Some
      </Modal>
    );

    expect(document.body.querySelector(`.${styles.overlay}`)).toBeNull();
    expect(document.body.classList.contains('modal-open')).toBe(false);
  });

  it('renders title, children and adds body class when open is true', () => {
    render(
      <Modal open={true} onClose={() => {}} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    );

    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Modal content')).toBeInTheDocument();

    const overlay = document.body.querySelector(`.${styles.overlay}`);
    expect(overlay).not.toBeNull();

    const modal = document.body.querySelector(`.${styles.modal}`);
    expect(modal).not.toBeNull();

    expect(document.body.classList.contains('modal-open')).toBe(true);
  });

  it('calls onClose and fallback when clicking on overlay and cleans up class on unmount', () => {
    const onClose = vi.fn();
    const fallback = vi.fn();
    const { unmount } = render(
      <Modal open={true} onClose={onClose} fallback={fallback}>
        <span>Inside</span>
      </Modal>
    );

    const overlay = document.body.querySelector(`.${styles.overlay}`);
    expect(overlay).not.toBeNull();
    if (overlay) {
      fireEvent.click(overlay);
    }

    expect(onClose).toHaveBeenCalledTimes(1);
    expect(fallback).toHaveBeenCalledTimes(1);

    unmount();
    expect(document.body.classList.contains('modal-open')).toBe(false);
  });
});
