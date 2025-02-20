// @ts-nocheck 
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/home/home';

jest.mock('../components/home/data', () => ({
  RenderItems: [
    {
      id: 1,
      img: 'test-image-1.png',
      title: 'Test Title 1',
      description: 'Test Description 1'
    },
    {
      id: 2,
      img: 'test-image-2.png',
      title: 'Test Title 2',
      description: 'Test Description 2'
    },
    {
      id: 3,
      img: 'test-image-3.png',
      title: 'Test Title 3',
      description: 'Test Description 3'
    }
  ]
}));

describe('Home Component', () => {
  let homeComponent;

  beforeEach(() => {
    jest.useFakeTimers();
    homeComponent = render(<Home />);
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  test('renders navigation menu items', () => {
    const menuItems = [
      'Sobre nós',
      'Cultura e pessoas',
      'Eventos',
      'Soluções',
      'Fale conosco'
    ];

    menuItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  test('renders social media icons', () => {
    const socialIcons = [
      'linkedin-icon',
      'instagram-icon',
      'facebook-icon',
      'youtube-icon'
    ];

    socialIcons.forEach(icon => {
      expect(screen.getByTestId(icon)).toBeInTheDocument();
    });
  });

  test('changes language dropdown', () => {
    const language = screen.getByTestId('language');
    expect(language).toHaveTextContent(/PT|EN/);

    const languageToggle = screen.getByTestId('language-toggle');
    fireEvent.click(languageToggle);

    const englishOption = screen.getByTestId('language-option-en');
    const portuguesOption = screen.getByTestId('language-option-pt');

    expect(englishOption).toHaveTextContent('EN');
    expect(portuguesOption).toHaveTextContent('PT');

    fireEvent.click(portuguesOption);
    expect(language).toHaveTextContent('PT');

    fireEvent.click(englishOption);
    expect(language).toHaveTextContent('EN');
  });

  test('auto-rotates banner images', () => {
    expect(screen.getByText('Test Title 1')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(screen.getByText('Test Title 2')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(screen.getByText('Test Title 3')).toBeInTheDocument();
  });

  test('hover interactions on menu items', () => {
    const aboutUsMenu = screen.getByText('Sobre nós');

    fireEvent.mouseOver(aboutUsMenu);
    expect(screen.getByTestId('dropdown-1')).toBeInTheDocument();
  });

  test('banner indicators change displayed banner', () => {
    expect(screen.getByText('Test Title 1')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('banner-indicator-2'));
    expect(screen.getByText('Test Title 2')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('banner-indicator-3'));
    expect(screen.getByText('Test Title 3')).toBeInTheDocument();
  });

});
