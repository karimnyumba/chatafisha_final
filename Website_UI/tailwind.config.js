module.exports = {
  variants: {
    extend: {
      padding: ['responsive'], // Make sure 'responsive' is included
    },
  },
  mode: 'jit',
  content: [
    './src/**/**/*.{js,ts,jsx,tsx,html,mdx}',
    './src/**/*.{js,ts,jsx,tsx,html,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      md: { max: '1050px' },
      sm: { max: '590px' },
      lg: { max: '1920px' },
    },
    extend: {
      colors: {
        red_407: '#c76c3d',
        red_406: '#d66a40',
        red_408: '#be5058',
        lime_830: '#b07f45',
        red_403: '#e3643b',
        lime_710: '#a8a64e',
        red_402: '#c7703a',
        red_405: '#bb6849',
        red_404: '#e06539',
        yellow_804: '#f4981e',
        yellow_803: '#f8971d',
        yellow_806: '#e7a138',
        red_401: '#cc6936',
        yellow_805: '#ec9f31',
        red_400: '#d36843',
        yellow_808: '#f39923',
        yellow_807: '#ec9f37',
        yellow_809: '#f6981e',
        light_green_603: '#71b44b',
        light_green_604: '#76ae47',
        light_green_605: '#71ae57',
        light_green_606: '#78b74a',
        yellow_800: '#f8961d',
        light_green_600: '#6ab148',
        yellow_802: '#e7a135',
        light_green_601: '#7bb447',
        yellow_801: '#e99e32',
        light_green_602: '#7eb55a',
        light_green_607: '#7cba47',
        light_green_608: '#6bb34b',
        light_green_609: '#74ac48',
        lime_820: '#b78352',
        lime_700: '#b29452',
        lime_821: '#a58655',
        lime_701: '#a6b047',
        lime_822: '#ae9454',
        lime_702: '#a1a945',
        lime_823: '#c27b38',
        light_green_614: '#72bc44',
        light_green_615: '#71b547',
        light_green_616: '#64b248',
        light_green_617: '#83bc42',
        light_green_610: '#7fb748',
        light_green_611: '#6da954',
        light_green_612: '#6eaa4b',
        light_green_613: '#74a15a',
        lime_703: '#b09f44',
        lime_824: '#be843e',
        lime_704: '#aba044',
        lime_825: '#aa893d',
        lime_705: '#aaa842',
        lime_826: '#b2923f',
        lime_706: '#a8a63d',
        lime_827: '#aa873e',
        lime_707: '#a5b042',
        lime_828: '#aa963c',
        light_green_618: '#73ae43',
        lime_708: '#b39842',
        lime_829: '#a59d3a',
        light_green_619: '#6fab43',
        lime_709: '#b19d46',
        red_300: '#ba724e',
        red_301: '#b2875c',
        light_green_504: '#8fc54f',
        light_green_505: '#9fbb49',
        light_green_506: '#8fc748',
        light_green_507: '#89c44a',
        light_green_500: '#91c74f',
        light_green_501: '#a2ac4f',
        light_green_502: '#7fba54',
        yellow_901: '#f7921e',
        light_green_503: '#82c146',
        yellow_900: '#f7931e',
        light_green_508: '#81bd4b',
        light_green_509: '#89c24a',
        light_green_510: '#9fb347',
        light_green_515: '#8bbd5c',
        light_green_516: '#87b950',
        light_green_517: '#8bbc5e',
        light_green_518: '#87b660',
        light_green_511: '#a2b646',
        light_green_512: '#95ca52',
        light_green_513: '#98c750',
        light_green_514: '#8cbf49',
        light_green_519: '#8cb85e',
        red_605: '#de3e29',
        red_604: '#de422c',
        red_607: '#e63125',
        red_606: '#ed2d24',
        red_601: '#da3f2f',
        red_600: '#e33328',
        red_603: '#ee2a24',
        red_602: '#e23b26',
        light_green_801: '#4d8940',
        light_green_802: '#568745',
        light_green_803: '#5e854f',
        light_green_804: '#549442',
        light_green_800: '#529241',
        light_green_805: '#4d8f41',
        red_608: '#db3737',
        light_green_702: '#6ba743',
        light_green_703: '#5e8b4d',
        light_green_704: '#599842',
        light_green_705: '#67964f',
        black_900: '#000000',
        light_green_700: '#61ae45',
        light_green_701: '#60ad45',
        black_901: '#010101',
        light_green_706: '#5c8f4b',
        light_green_707: '#5c9442',
        light_green_708: '#6d9956',
        light_green_709: '#629f43',
        orange_309: '#dda755',
        orange_308: '#e2aa53',
        orange_307: '#e3ad4b',
        orange_306: '#e2a651',
        orange_305: '#dea850',
        orange_304: '#e0a957',
        orange_303: '#e7ac55',
        orange_302: '#e4a953',
        orange_301: '#e5a952',
        orange_300: '#dea84f',
        light_green_713: '#5f9c43',
        light_green_710: '#63a243',
        light_green_711: '#5b9c43',
        light_green_712: '#68a443',
        green_300: '#8db87b',
        deep_orange_619: '#e36233',
        green_301: '#84b07a',
        deep_orange_627: '#e2602e',
        deep_orange_626: '#e56030',
        deep_orange_629: '#f15b23',
        deep_orange_628: '#e46131',
        deep_orange_623: '#f15b27',
        deep_orange_622: '#f15722',
        deep_orange_625: '#e0622d',
        deep_orange_624: '#f15a27',
        deep_orange_621: '#f15623',
        deep_orange_620: '#ea5f26',
        deep_orange_638: '#ef5d23',
        deep_orange_637: '#f15d23',
        deep_orange_639: '#f1592c',
        deep_orange_634: '#f15b25',
        deep_orange_633: '#ed6323',
        deep_orange_636: '#f15b2b',
        deep_orange_635: '#f15c29',
        deep_orange_630: '#e45e25',
        deep_orange_632: '#ef5f23',
        deep_orange_631: '#e36229',
        black_900_19: '#00000019',
        light_green_900: '#2d6436',
        deep_orange_648: '#f15622',
        deep_orange_645: '#f15e23',
        deep_orange_644: '#f15a26',
        deep_orange_647: '#ef5b23',
        deep_orange_646: '#f05f22',
        deep_orange_641: '#ee6023',
        deep_orange_640: '#f1582a',
        deep_orange_643: '#f15b2a',
        deep_orange_642: '#f15929',
        blue_400: '#3aabe3',
        black_900_3f: '#0000003f',
        deep_orange_704: '#d25930',
        deep_orange_703: '#d5522c',
        deep_orange_706: '#cf662c',
        deep_orange_705: '#dc4628',
        deep_orange_700: '#d25c31',
        deep_orange_702: '#d65330',
        deep_orange_701: '#cf6032',
        deep_orange_708: '#cb6c34',
        deep_orange_707: '#d06434',
        deep_orange_709: '#d64d2b',
        white_A700: '#ffffff',
        lime_810: '#b78c42',
        lime_811: '#b69340',
        lime_812: '#aa8e42',
        indigo_A200: '#5275f1',
        deep_orange_605: '#f15c24',
        deep_orange_604: '#f15c23',
        deep_orange_607: '#f15822',
        deep_orange_606: '#f15b22',
        deep_orange_601: '#f15d22',
        deep_orange_600: '#f15c22',
        deep_orange_603: '#f15c26',
        deep_orange_602: '#f15e22',
        lime_813: '#a89645',
        lime_814: '#a0a046',
        lime_815: '#a89443',
        lime_816: '#b36e35',
        lime_817: '#a5734d',
        lime_818: '#a19e3e',
        lime_819: '#a78556',
        lime_800: '#b36e3b',
        lime_801: '#be7c3d',
        bluegray_100: '#d9d9d9',
        deep_orange_609: '#ed5c29',
        deep_orange_608: '#f15c27',
        deep_orange_616: '#ee5d2c',
        deep_orange_615: '#f15e25',
        deep_orange_618: '#e95e29',
        deep_orange_617: '#df6532',
        deep_orange_612: '#f05e22',
        deep_orange_611: '#ed5f23',
        deep_orange_614: '#f15a22',
        deep_orange_613: '#f15922',
        lime_802: '#a79855',
        lime_803: '#b48753',
        deep_orange_610: '#f15b28',
        lime_804: '#a99658',
        lime_805: '#b0773d',
        lime_806: '#c37539',
        lime_807: '#bc833b',
        lime_808: '#ac7f44',
        lime_809: '#b98c44',
        green_704: '#467d42',
        green_703: '#38803d',
        green_702: '#4b8c40',
        green_701: '#3a823e',
        green_700: '#477f44',
        green_816: '#357e3d',
        green_815: '#34783b',
        green_814: '#357f3d',
        green_813: '#317a3c',
        green_812: '#2b7239',
        green_811: '#317b3c',
        green_810: '#3c703b',
        green_809: '#3f743f',
        green_808: '#2c7038',
        green_807: '#327a3c',
        green_806: '#3b793e',
        green_805: '#247038',
        green_804: '#37643e',
        deep_orange_A200: '#e86439',
        green_605: '#4da346',
        green_604: '#449549',
        green_603: '#4b8e54',
        green_602: '#4d9652',
        green_601: '#429d46',
        green_600: '#519752',
        deep_orange_802: '#b8633b',
        deep_orange_801: '#b7643b',
        deep_orange_800: '#da4628',
        deep_orange_A201: '#de6535',
        deep_orange_A202: '#dd6635',
        deep_orange_A203: '#d3723f',
        green_710: '#40803d',
        green_709: '#3a813e',
        green_708: '#387f3d',
        green_707: '#42873f',
        green_706: '#41873f',
        green_705: '#4c8b43',
        green_506: '#559858',
        green_505: '#589a58',
        green_504: '#55a44b',
        green_503: '#56a746',
        green_502: '#5caa47',
        green_501: '#5ca253',
        green_500: '#59a64a',
        gray_600: '#a47754',
        gray_601: '#7a7a7a',
        green_610: '#429d48',
        green_609: '#399b46',
        green_608: '#4ba346',
        green_607: '#439d46',
        green_606: '#499f4a',
        green_403: '#57b787',
        green_402: '#72a85e',
        green_401: '#65a062',
        green_400: '#72b05a',
        green_507: '#5aa946',
        red_803: '#c3272c',
        orange_A254: '#e5a43f',
        red_802: '#c32d31',
        orange_A253: '#e2a648',
        red_805: '#b23136',
        orange_A256: '#e2a84a',
        red_804: '#bf3a31',
        orange_A255: '#e1a650',
        orange_A257: '#e9a33f',
        red_801: '#c5262e',
        red_800: '#ac3d3f',
        orange_315: '#dfa753',
        orange_314: '#ddaa58',
        orange_313: '#dfae59',
        orange_312: '#e3ab52',
        orange_311: '#d5aa61',
        orange_310: '#e2a95b',
        red_807: '#c32728',
        red_806: '#b33138',
        red_809: '#bf2f2f',
        red_808: '#be372e',
        orange_A243: '#dfa94d',
        orange_A242: '#e8a749',
        red_813: '#bc2b26',
        orange_A245: '#e6a33d',
        orange_A244: '#e5a64f',
        orange_A247: '#e6a23f',
        red_810: '#c5242f',
        orange_A246: '#e9a849',
        orange_A249: '#e8a139',
        red_812: '#c32729',
        orange_A248: '#e8a549',
        red_811: '#c82127',
        orange_A250: '#e3a452',
        orange_A252: '#dfa84b',
        orange_A251: '#e7a246',
        red_704: '#bb4d35',
        orange_A232: '#eaa13e',
        red_703: '#b95232',
        orange_A231: '#e6a23d',
        red_706: '#c1573d',
        orange_A234: '#e4a54f',
        red_705: '#c6373d',
        orange_A233: '#e2a54b',
        red_700: '#bb4831',
        orange_A236: '#e3a248',
        orange_A235: '#e99f3b',
        red_702: '#ba5937',
        orange_A238: '#dda84e',
        red_701: '#bb5734',
        orange_A237: '#ec9f38',
        orange_A239: '#e1a540',
        pink_800: '#99484e',
        red_708: '#c64840',
        red_707: '#c14d42',
        orange_A241: '#e2a351',
        red_709: '#c44840',
        orange_A240: '#e4a23e',
        orange_A221: '#e4a33b',
        orange_A220: '#e4a13b',
        orange_A223: '#e6a444',
        orange_A222: '#eda543',
        orange_A225: '#dfa24c',
        red_711: '#c13f30',
        orange_A224: '#e3a53e',
        red_710: '#c14032',
        orange_A227: '#e2a144',
        red_713: '#e12e2c',
        orange_A226: '#e3a342',
        red_712: '#bb4739',
        orange_A229: '#e5a340',
        orange_A228: '#e5a03b',
        orange_A230: '#e5a542',
        orange_A210: '#e3a34c',
        orange_A212: '#e3a44e',
        orange_A211: '#e3a147',
        orange_A214: '#e0a64f',
        orange_A213: '#e59f43',
        orange_A216: '#e2a040',
        orange_A215: '#e2a13b',
        orange_A218: '#e1a445',
        orange_A217: '#e89f3b',
        light_green_520: '#9ac84d',
        light_green_400: '#aaa65a',
        orange_A219: '#e29f3e',
        light_green_521: '#94c94b',
        light_green_405: '#9cc162',
        light_green_526: '#8fc84a',
        light_green_406: '#9dc363',
        light_green_527: '#9bbc49',
        light_green_407: '#9cc061',
        light_green_528: '#a1a34c',
        light_green_408: '#9ec265',
        light_green_529: '#9dbd48',
        light_green_401: '#a6b15d',
        light_green_522: '#94c94a',
        light_green_402: '#a0c461',
        light_green_523: '#82c04a',
        light_green_403: '#a1bf63',
        light_green_524: '#7fbb51',
        light_green_404: '#a6a560',
        light_green_525: '#83bd51',
        light_green_409: '#aca458',
        orange_A201: '#e5a23c',
        orange_A200: '#e99f38',
        orange_A203: '#e59f47',
        orange_A202: '#e7a43d',
        orange_A205: '#e1a644',
        orange_A204: '#e3a142',
        orange_A207: '#e7a03c',
        orange_A206: '#e6a13b',
        light_green_530: '#99c44c',
        orange_A209: '#e3a149',
        light_green_410: '#9fc467',
        light_green_531: '#9eba48',
        orange_A208: '#e7a23d',
        light_green_411: '#a3ab5d',
        light_green_532: '#8bc147',
        yellow_831: '#f3981f',
        yellow_830: '#ee9e2e',
        light_green_412: '#a3b45f',
        light_green_533: '#94c951',
        yellow_833: '#f8981d',
        light_green_413: '#9dbd5b',
        light_green_534: '#9cc44e',
        yellow_832: '#f8961f',
        light_green_414: '#a3be69',
        light_green_535: '#98ca49',
        light_green_415: '#8dbd67',
        red_900: '#b62825',
        green_803: '#3a793a',
        yellow_826: '#f59c25',
        green_802: '#437541',
        yellow_825: '#f7971e',
        green_801: '#2e7439',
        yellow_828: '#f89921',
        green_800: '#336e3b',
        yellow_827: '#ef9721',
        yellow_829: '#f19a23',
        yellow_820: '#e8a036',
        yellow_822: '#eb9c36',
        yellow_821: '#e89e38',
        yellow_824: '#f2971f',
        yellow_823: '#f6951e',
        yellow_815: '#e1a139',
        yellow_814: '#e59f37',
        yellow_817: '#ee9d2a',
        yellow_816: '#e99f37',
        yellow_819: '#dc9c3a',
        yellow_818: '#eb9e32',
        gray_300: '#d8e2dd',
        yellow_811: '#f29820',
        yellow_810: '#f7941d',
        yellow_813: '#dfa138',
        yellow_812: '#f5971e',
      },
      fontFamily: { syne: 'Syne' },
      textShadow: {
        ts: '0px 4px  4px #0000003f',
        ts1: '0px 4px  2px #00000019',
      },
      boxShadow: { bs: '0px 4px  4px 0px #0000003f' },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-textshadow')],
}
