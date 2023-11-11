/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    fontFamily: {
      cal: ['var(--font-cal)'],
      sans: ['var(--font-inter)'],
      matter: ['var(--font-matter)'],
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        black: '#07080b',
        primary: {
          DEFAULT: '#020408',
          foreground: '#4e4f52',
          50: '#e6e6e6',
          100: '#c0c0c1',
          200: '#9a9b9c',
          300: '#4e4f52',
          400: '#0a0c11',
          500: '#020408',
          600: '#020407',
          700: '#020306',
          800: '#010205',
          900: '#010204',
        },
        neutral: {
          50: '#c3c4c5',
          100: '#9fa0a2',
          200: '#33383d',
          300: '#21272D',
          400: '#14161B',
          500: '#0f1116',
          600: '#0e0f14',
          700: '#0b0d11',
          800: '#090a0d',
          900: '#07080b',
        },
        gray: {
          50: '#f9fafa',
          100: '#f4f5f6',
          200: '#e3e5e8',
          300: '#d2d6da',
          400: '#b0b7be',
          500: '#8e98a2',
          600: '#808992',
          700: '#6b727a',
          800: '#555b61',
          900: '#464a4f',
        },
        red: {
          50: '#fff8f9',
          100: '#fff1f3',
          200: '#ffdce2',
          300: '#ffc7d1',
          400: '#ff9cae',
          500: '#ff728b',
          600: '#e6677d',
          700: '#bf5668',
          800: '#994453',
          900: '#7d3844',
        },
        yellow: {
          50: '#fefdf7',
          100: '#fdfaef',
          200: '#faf3d8',
          300: '#f7ebc0',
          400: '#f0dc90',
          500: '#eacd61',
          600: '#d3b957',
          700: '#b09a49',
          800: '#8c7b3a',
          900: '#736430',
        },
        green: {
          50: '#f2fef9',
          100: '#e6fdf4',
          200: '#bff9e2',
          300: '#99f5d1',
          400: '#4deeaf',
          500: '#00e68c',
          600: '#00cf7e',
          700: '#00ad69',
          800: '#008a54',
          900: '#007145',
        },
        cyan: {
          50: '#f4fbfc',
          100: '#e9f8f9',
          200: '#c7ecf0',
          300: '#a5e1e6',
          400: '#62cbd4',
          500: '#1eb4c1',
          600: '#1ba2ae',
          700: '#178791',
          800: '#126c74',
          900: '#0f585f',
        },
        purple: {
          50: '#fbfbff',
          100: '#f8f7ff',
          200: '#edeaff',
          300: '#e3ddff',
          400: '#cdc4ff',
          500: '#b8aaff',
          600: '#a699e6',
          700: '#8a80bf',
          800: '#6e6699',
          900: '#5a537d',
        },
        gold: {
          50: '#ffffe7',
          100: '#feffc1',
          200: '#fffd86',
          300: '#fff441',
          400: '#ffe60d',
          500: '#ffd700',
          600: '#d19e00',
          700: '#a67102',
          800: '#89580a',
          900: '#74480f',
          950: '#442604',
        },
        silver: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#c0c0c0',
          500: '#9a9a9a',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#4e4e4e',
          950: '#282828',
        },
        bronze: {
          50: '#fcf7ee',
          100: '#f5e8d0',
          200: '#e9d09e',
          300: '#deb46b',
          400: '#d69c49',
          500: '#cd7f32',
          600: '#b5622a',
          700: '#974826',
          800: '#7c3924',
          900: '#663121',
          950: '#3a170e',
        },
        border: '#21272D',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: '#14161B',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
