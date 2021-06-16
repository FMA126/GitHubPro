import { render } from '@testing-library/react';
import Nav from './Nav';

test('renders Nav', () => {
    const { getByAltText } = render(<Nav />);
    expect(getByAltText('logo')).toBeTruthy();
  });