/*eslint-env node*/
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      inset: {
        15: '3.6rem',
        19: '4.5rem',
        13: '2.8rem',
        30: '7.5rem',
        23: '5.6rem',
        68: '17.4rem',
        T: '3.2rem',
        W: '4.8rem',
        TH: '6.2rem',
        SU: '11.2rem',
      },
      screens: {
        print: { raw: 'print' },
      },
      height: {
        'screen/2': '50vh',
        'screen/3': 'calc(100vh / 3)',
        'screen/4': 'calc(100vh / 4)',
        'screen/5': 'calc(100vh / 5)',
        90: '22.5rem',
        100: '33rem',
        99: '27rem',
      },
      width: {
        22: '5.5rem',
        90: '20rem',
        100: '28rem',
        '4/9': '46%',
      },
      minHeight: {
        'btn-builder': '3rem',
        6: '1.5rem',
        14: '3.5rem',
        20: '5rem',
        40: '10rem' /* 160px */,
        '161px': '161px',
        '1/2': '50%',
        44: '11rem' /* 176px */,
      },
      minWidth: {
        28: '7rem',
        56: '14rem' /* 224px */,
        64: '16rem',
        72: '18rem',
        80: '20rem' /* 320px */,
        81: '22rem' /* 352px */,
        216: '44rem',
        1040: '65rem',
        1200: '75rem',
      },
      fontFamily: {
        Arial: 'Arial, Helvetica, sans-serif',
        JnJ: "'J&J CircularTT'",
        Roboto: "'Roboto', sans-serif",
      },
      fontSize: {
        xxs: '0.6rem',
        xxxs: '0.9rem',
        '3xxl': [
          '32px',
          {
            lineHeight: '40px',
          },
        ],
      },

      colors: {
        primary: '#CC0033',
        secondary: '#1E22AA',
        'theme-primary': 'var(--color-primary)',
        'theme-secondary': 'var(--color-secondary)',
        'accent-purple': '#C800A1',
        'accent-blue': '#00B5E2',
        'primary-grad-from': '#CC0033',
        'primary-grad-to': '#C800A1',
        'primary-grad-from-light': '#CC00330d',
        'primary-grad-to-light': '#C800A10d',
        'dark-blue': '#003A5D',
        // slidColor: "#003B5F",
        // slidColor2: "#C2CFE0",
        // slideTableHeaderColor: "#003B5F",
        // slideTableBackgroundColor: "#109CF1",
        'green-variant1': '#64B32C',
        'red-variant1': '#CC0033',
        'light-blue': '#2196F3',
        'icon-bg': '#616247',
        'link-pink': '#982e75',
        'dark-red': '#C8102E',
        'lighted-blue': '#C6F3FF',
        'avatar-violet-bg': '#A461D8',
        'avatar-amber-bg': '#FFC542',
        purple: '#E2D5F2',
        builderPurple: {
          200: '#DDD6FE',
          400: '#A78BFA',
          500: '#A461D8',
          700: '#6D28D9',
          800: '#5B21B6',
        },
        pink: {
          350: '#FF9AD5',
          850: '#7A1979',
          80: '#FAC8D0',
        },
        emerald: {
          450: '#82C43C',
        },
        red: {
          750: '#C8102E',
          650: '#CC0033',
        },
        slidColor: {
          1: '#003B5F',
          2: '#C2CFE0',
          3: '#003B5F',
          4: '#109CF1',
          5: 'rgba(16, 156, 241, 0.05)',
          header: '#212121',
        },
        back1Circle: '#2C689B',
        back1: '#418AC9',
        back2Circle: '#514A55',
        back2: '#6C6271',
        back3Circle: '#23B0D6',
        back3: '#67CBE6',
        back4Circle: '#D45D08',
        back4: '#F7822E',
        gray: {
          875: '#171725',
          850: '#1B1E24',
          800: '#63666A',
          500: '#888B8D',
          475: '#778CA2',
          450: '#778CA2',
          425: '#92929D',
          350: '#C4C4C4',
          100: '#D9D9D6',
          75: '#F5F6F8',
          61: '#F4F4F4',
          60: '#F2F2F2',
          50: '#FAFAFB',
          1: '#696974',
        },
        blue: {
          850: '#1E22AA',
          750: '#1E22AA',
          650: '#109CF1',
          555: '#003b5f',
          15: '#ACB9CA',
          10: '#D6DCE4',
          2: '#003B5F',
          1: '#003A5D',
        },
      },
      zIndex: {
        '-1': '-1',
      },
      transformOrigin: {
        0: '0%',
      },
      spacing: {
        21: '85px',
        38: '150px',
        42: '166px',
      },
      boxShadow: {
        '2md': '0px 4px 10px rgba(213, 221, 234, 0.3)',
        '3xl':
          '2px 2px 20px 1px rgba(0, 0, 0, 0.4), -2px -2px 20px 1px rgba(0, 0, 0, 0.4)',
        '4xl':
          '2px 2px 5px 1px rgba(0, 0, 0, 0.4), -2px -2px 5px 1px rgba(0, 0, 0, 0.4)',
      },

      lineHeight: {
        0.5: '1.2',
      },
    },
  },
  plugins: [],
}
