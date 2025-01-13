import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import { QRCode } from './qr-code';

test('should be render qr code card', () => {
  render(<QRCode />);

  expect(screen.getByRole('img', { name: 'Scan QR Code to visit Frontend Mentor' })).toBeDefined();
  expect(
    screen.getByRole('heading', {
      level: 1,
      name: 'Improve your front-end skills by building projects',
    }),
  ).toBeDefined();
  expect(
    screen.getByText(
      'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level',
    ),
  ).toBeDefined();
});
