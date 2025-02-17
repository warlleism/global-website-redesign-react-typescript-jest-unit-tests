// @ts-nocheck
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/home/home';

jest.mock('../components/home/data', () => ({
  RenderItems: [
    {
      id: 1,
      img: 'test-image-1.jpg',
      title: 'Test Title 1',
      description: 'Test Description 1'
    },
    {
      id: 2,
      img: 'test-image-2.jpg',
      title: 'Test Title 2',
      description: 'Test Description 2'
    },
    {
      id: 3,
      img: 'test-image-3.jpg',
      title: 'Test Title 3',
      description: 'Test Description 3'
    }
  ]
}));

describe('Home Component', () => {

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  test('renders navigation menu items', () => {

    const { getByText } = render(<Home />);

    const menuItems = [
      'Sobre nós',
      'Cultura e pessoas',
      'Eventos',
      'Soluções',
      'Fale conosco'
    ];

    menuItems.forEach(item => {
      expect(getByText(item)).toBeInTheDocument();
    });
  });

  test('renders social media icons', () => {

    const { getByTestId } = render(<Home />);

    const socialIcons = [
      'linkedin-icon',
      'instagram-icon',
      'facebook-icon',
      'youtube-icon'
    ];

    socialIcons.forEach(icon => {
      expect(getByTestId(icon)).toBeInTheDocument();
    });
  });

  test('changes language dropdown', () => {

    const { getByText, getByTestId } = render(<Home />);

    const language = getByTestId('language');
    expect(language).toBeInTheDocument(/PT|EN/);

    const languageToggle = getByTestId('language-toggle');
    fireEvent.click(languageToggle);

    const englishOption = getByTestId('language-option-en');
    const portuguesOption = getByTestId('language-option-pt');

    expect(englishOption).toBeInTheDocument("EN");
    expect(portuguesOption).toBeInTheDocument("PT");

    fireEvent.click(portuguesOption);
    expect(language).toBeInTheDocument('PT');

    fireEvent.click(englishOption);
    expect(language).toBeInTheDocument('EN');
  });

  test('auto-rotates banner images', () => {

    const { getByText } = render(<Home />);

    expect(getByText('Test Title 1')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(getByText('Test Title 2')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(getByText('Test Title 3')).toBeInTheDocument();

  });

  test('hover interactions on menu items', () => {

    const { getByText, getByTestId } = render(<Home />);
    const aboutUsMenu = getByText('Sobre nós');

    fireEvent.mouseOver(aboutUsMenu);
    const dropdownItems = getByTestId('dropdown-1');
    expect(dropdownItems).toBeInTheDocument();
  });

  test('banner indicators change displayed banner', () => {
    
    const { getByText, getByTestId } = render(<Home />);

    expect(getByText('Test Title 1')).toBeInTheDocument();

    const secondBannerIndicator = getByTestId('banner-indicator-2');
    fireEvent.click(secondBannerIndicator);

    expect(getByText('Test Title 2')).toBeInTheDocument();

    const thirdBannerIndicator = getByTestId('banner-indicator-3');
    fireEvent.click(thirdBannerIndicator);

    expect(getByText('Test Title 3')).toBeInTheDocument();
  });

});