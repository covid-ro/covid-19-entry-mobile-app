const countriesCrossed = [
  {
    title: 'Europa',
    data: [
      {
        country: 'Albania',
        calling_code: '355',
        iso: 'AL',
      },
      {
        country: 'Andorra',
        calling_code: '376',
        iso: 'AD',
      },
      {
        country: 'Arhipelagul Svalbard (Norvegia)',
        calling_code: '47',
        iso: 'SJ',
      },
      {
        country: 'Austria',
        calling_code: '43',
        iso: 'AT',
      },
      {
        country: 'Belarus',
        calling_code: '375',
        iso: 'BY',
      },
      {
        country: 'Belgia',
        calling_code: '32',
        iso: 'BE',
      },
      {
        country: 'Bosnia și Herțegovina',
        calling_code: '387',
        iso: 'BA',
      },
      {
        country: 'Bulgaria',
        calling_code: '359',
        iso: 'BG',
      },
      {
        country: 'Cehia',
        calling_code: '420',
        iso: 'CZ',
      },
      {
        country: 'Cipru',
        calling_code: '357',
        iso: 'CY',
      },
      {
        country: 'Croația',
        calling_code: '385',
        iso: 'HR',
      },
      {
        country: 'Danemarca',
        calling_code: '45',
        iso: 'DK',
      },
      {
        country: 'Elveția',
        calling_code: '41',
        iso: 'CH',
      },
      {
        country: 'Estonia',
        calling_code: '372',
        iso: 'EE',
      },
      {
        country: 'Finlanda',
        calling_code: '358',
        iso: 'FI',
      },
      {
        country: 'Franța',
        calling_code: '33',
        iso: 'FR',
      },
      {
        country: 'Germania',
        calling_code: '49',
        iso: 'DE',
      },
      {
        country: 'Gibraltar (Regatul Unit)',
        calling_code: '350',
        iso: 'GI',
      },
      {
        country: 'Grecia',
        calling_code: '30',
        iso: 'GR',
      },
      {
        country: 'Guernsey (Regatul Unit)',
        calling_code: '44',
        iso: 'GG',
      },
      {
        country: 'Insula Man (Regatul Unit)',
        calling_code: '44',
        iso: 'IM',
      },
      {
        country: 'Insulele Åland (Finlanda)',
        calling_code: '358',
        iso: 'AX',
      },
      {
        country: 'Insulele Feroe (Danemarca)',
        calling_code: '298',
        iso: 'FO',
      },
      {
        country: 'Irlanda',
        calling_code: '353',
        iso: 'IE',
      },
      {
        country: 'Islanda',
        calling_code: '354',
        iso: 'IS',
      },
      {
        country: 'Italia',
        calling_code: '39',
        iso: 'IT',
      },
      {
        country: 'Jersey (Regatul Unit)',
        calling_code: '44',
        iso: 'JE',
      },
      {
        country: 'Kosovo',
        calling_code: '383',
        iso: 'XK',
      },
      {
        country: 'Letonia',
        calling_code: '371',
        iso: 'LV',
      },
      {
        country: 'Liechtenstein',
        calling_code: '423',
        iso: 'LI',
      },
      {
        country: 'Lituania',
        calling_code: '370',
        iso: 'LT',
      },
      {
        country: 'Luxemburg',
        calling_code: '352',
        iso: 'LU',
      },
      {
        country: 'Macedonia de Nord',
        calling_code: '389',
        iso: 'MK',
      },
      {
        country: 'Malta',
        calling_code: '356',
        iso: 'MT',
      },
      {
        country: 'Moldova',
        calling_code: '373',
        iso: 'MD',
      },
      {
        country: 'Monaco',
        calling_code: '377',
        iso: 'MC',
      },
      {
        country: 'Muntenegru',
        calling_code: '382',
        iso: 'ME',
      },
      {
        country: 'Norvegia',
        calling_code: '47',
        iso: 'NO',
      },
      {
        country: 'Olanda (Țările de Jos)',
        calling_code: '31',
        iso: 'NL',
      },
      {
        country: 'Polonia',
        calling_code: '48',
        iso: 'PL',
      },
      {
        country: 'Portugalia',
        calling_code: '351',
        iso: 'PT',
      },
      {
        country: 'Regatul Unit',
        calling_code: '44',
        iso: 'GB',
      },
      {
        country: 'România',
        calling_code: '40',
        iso: 'RO',
      },
      {
        country: 'Rusia',
        calling_code: '7',
        iso: 'RU',
      },
      {
        country: 'San Marino',
        calling_code: '378',
        iso: 'SM',
      },
      {
        country: 'Serbia',
        calling_code: '381',
        iso: 'RS',
      },
      {
        country: 'Slovacia',
        calling_code: '421',
        iso: 'SK',
      },
      {
        country: 'Slovenia',
        calling_code: '386',
        iso: 'SI',
      },
      {
        country: 'Spania',
        calling_code: '34',
        iso: 'ES',
      },
      {
        country: 'Suedia',
        calling_code: '46',
        iso: 'SE',
      },
      {
        country: 'Ucraina',
        calling_code: '380',
        iso: 'UA',
      },
      {
        country: 'Ungaria',
        calling_code: '36',
        iso: 'HU',
      },
      {
        country: 'Vatican',
        calling_code: '379',
        iso: 'VA',
      },
    ],
  },
  {
    title: 'America de Nord',
    data: [
      {
        country: 'Anguilla (Regatul Unit)',
        calling_code: '1',
        iso: 'AI',
      },
      {
        country: 'Antigua și Barbuda',
        calling_code: '1',
        iso: 'AG',
      },
      {
        country: 'Aruba (Olanda)',
        calling_code: '297',
        iso: 'AW',
      },
      {
        country: 'Bahamas',
        calling_code: '1',
        iso: 'BS',
      },
      {
        country: 'Barbados',
        calling_code: '1',
        iso: 'BB',
      },
      {
        country: 'Belize',
        calling_code: '501',
        iso: 'BZ',
      },
      {
        country: 'Bermuda',
        calling_code: '1',
        iso: 'BM',
      },
      {
        country: 'Bonaire, Saba și Sfântul Eustatie',
        calling_code: '599',
        iso: 'BQ',
      },
      {
        country: 'Canada',
        calling_code: '1',
        iso: 'CA',
      },
      {
        country: 'Costa Rica',
        calling_code: '506',
        iso: 'CR',
      },
      {
        country: 'Cuba',
        calling_code: '53',
        iso: 'CU',
      },
      {
        country: 'Curaçao (Olanda)',
        calling_code: '599',
        iso: 'CW',
      },
      {
        country: 'Dominica',
        calling_code: '1',
        iso: 'DM',
      },
      {
        country: 'El Salvador',
        calling_code: '503',
        iso: 'SV',
      },
      {
        country: 'Grenada',
        calling_code: '1',
        iso: 'GD',
      },
      {
        country: 'Groenlanda (Danemarca)',
        calling_code: '299',
        iso: 'GL',
      },
      {
        country: 'Guadelupa (Franța)',
        calling_code: '590',
        iso: 'GP',
      },
      {
        country: 'Guatemala',
        calling_code: '502',
        iso: 'GT',
      },
      {
        country: 'Haiti',
        calling_code: '509',
        iso: 'HT',
      },
      {
        country: 'Honduras',
        calling_code: '504',
        iso: 'HN',
      },
      {
        country: 'Insulele Cayman (Regatul Unit)',
        calling_code: '1',
        iso: 'KY',
      },
      {
        country: 'Insulele Turks și Caicos (Regatul Unit)',
        calling_code: '1',
        iso: 'TC',
      },
      {
        country: 'Insulele Virgine ale Statelor Unite',
        calling_code: '1',
        iso: 'VI',
      },
      {
        country: 'Insulele Virgine Britanice',
        calling_code: '1',
        iso: 'VG',
      },
      {
        country: 'Jamaica',
        calling_code: '1',
        iso: 'JM',
      },
      {
        country: 'Martinica (Franța)',
        calling_code: '596',
        iso: 'MQ',
      },
      {
        country: 'Mexic',
        calling_code: '52',
        iso: 'MX',
      },
      {
        country: 'Montserrat (Regatul Unit)',
        calling_code: '1',
        iso: 'MS',
      },
      {
        country: 'Nicaragua',
        calling_code: '505',
        iso: 'NI',
      },
      {
        country: 'Panama',
        calling_code: '507',
        iso: 'PA',
      },
      {
        country: 'Puerto Rico (SUA)',
        calling_code: '1',
        iso: 'PR',
      },
      {
        country: 'Republica Dominicană',
        calling_code: '1',
        iso: 'DO',
      },
      {
        country: 'Saint Barthélemy (Franța)',
        calling_code: '590',
        iso: 'BL',
      },
      {
        country: 'Sfânta Lucia',
        calling_code: '1',
        iso: 'LC',
      },
      {
        country: 'Sfântul Martin (Franța)',
        calling_code: '590',
        iso: 'MF',
      },
      {
        country: 'Sfântul Martin (Olanda)',
        calling_code: '1',
        iso: 'SX',
      },
      {
        country: 'Sfântul Vincențiu și Grenadinele',
        calling_code: '1',
        iso: 'VC',
      },
      {
        country: 'Sfinții Cristofor și Nevis',
        calling_code: '1',
        iso: 'KN',
      },
      {
        country: 'Sfinții Petru și Miquelon (Franța)',
        calling_code: '508',
        iso: 'PM',
      },
      {
        country: 'Statele Unite ale Americii',
        calling_code: '1',
        iso: 'US',
      },
      {
        country: 'Trinidad-Tobago',
        calling_code: '1',
        iso: 'TT',
      },
    ],
  },
  {
    title: 'America de Sud',
    data: [
      {
        country: 'Argentina',
        calling_code: '54',
        iso: 'AR',
      },
      {
        country: 'Bolivia',
        calling_code: '591',
        iso: 'BO',
      },
      {
        country: 'Brazilia',
        calling_code: '55',
        iso: 'BR',
      },
      {
        country: 'Chile',
        calling_code: '56',
        iso: 'CL',
      },
      {
        country: 'Columbia',
        calling_code: '57',
        iso: 'CO',
      },
      {
        country: 'Ecuador',
        calling_code: '593',
        iso: 'EC',
      },
      {
        country: 'Guyana',
        calling_code: '592',
        iso: 'GY',
      },
      {
        country: 'Guyana Franceză',
        calling_code: '594',
        iso: 'GF',
      },
      {
        country: 'Insulele Falkland (Regatul Unit)',
        calling_code: '500',
        iso: 'FK',
      },
      {
        country: 'Paraguay',
        calling_code: '595',
        iso: 'PY',
      },
      {
        country: 'Peru',
        calling_code: '51',
        iso: 'PE',
      },
      {
        country: 'Surinam',
        calling_code: '597',
        iso: 'SR',
      },
      {
        country: 'Uruguay',
        calling_code: '598',
        iso: 'UY',
      },
      {
        country: 'Venezuela',
        calling_code: '58',
        iso: 'VE',
      },
    ],
  },
  {
    title: 'Asia',
    data: [
      {
        country: 'Afghanistan',
        calling_code: '93',
        iso: 'AF',
      },
      {
        country: 'Arabia Saudită',
        calling_code: '966',
        iso: 'SA',
      },
      {
        country: 'Armenia',
        calling_code: '374',
        iso: 'AM',
      },
      {
        country: 'Azerbaidjan',
        calling_code: '994',
        iso: 'AZ',
      },
      {
        country: 'Bahrain',
        calling_code: '973',
        iso: 'BH',
      },
      {
        country: 'Bangladesh',
        calling_code: '880',
        iso: 'BD',
      },
      {
        country: 'Bhutan',
        calling_code: '975',
        iso: 'BT',
      },
      {
        country: 'Brunei',
        calling_code: '673',
        iso: 'BN',
      },
      {
        country: 'Cambodgia',
        calling_code: '855',
        iso: 'KH',
      },
      {
        country: 'China',
        calling_code: '86',
        iso: 'CN',
      },
      {
        country: 'Coreea de Nord',
        calling_code: '850',
        iso: 'KP',
      },
      {
        country: 'Coreea de Sud',
        calling_code: '82',
        iso: 'KR',
      },
      {
        country: 'Emiratele Arabe Unite',
        calling_code: '971',
        iso: 'AE',
      },
      {
        country: 'Palestina (Cisiordania și Fâșia Gaza)',
        calling_code: '970',
        iso: 'PS',
      },
      {
        country: 'Filipine',
        calling_code: '63',
        iso: 'PH',
      },
      {
        country: 'Georgia',
        calling_code: '995',
        iso: 'GE',
      },
      {
        country: 'Hong Kong (China)',
        calling_code: '852',
        iso: 'HK',
      },
      {
        country: 'India',
        calling_code: '91',
        iso: 'IN',
      },
      {
        country: 'Indonezia',
        calling_code: '62',
        iso: 'ID',
      },
      {
        country: 'Iordania',
        calling_code: '962',
        iso: 'JO',
      },
      {
        country: 'Irak',
        calling_code: '964',
        iso: 'IQ',
      },
      {
        country: 'Iran',
        calling_code: '98',
        iso: 'IR',
      },
      {
        country: 'Israel',
        calling_code: '972',
        iso: 'IL',
      },
      {
        country: 'Japonia',
        calling_code: '81',
        iso: 'JP',
      },
      {
        country: 'Kazahstan',
        calling_code: '7',
        iso: 'KZ',
      },
      {
        country: 'Kârgâzstan',
        calling_code: '996',
        iso: 'KG',
      },
      {
        country: 'Kuweit',
        calling_code: '965',
        iso: 'KW',
      },
      {
        country: 'Laos',
        calling_code: '856',
        iso: 'LA',
      },
      {
        country: 'Liban',
        calling_code: '961',
        iso: 'LB',
      },
      {
        country: 'Macau',
        calling_code: '853',
        iso: 'MO',
      },
      {
        country: 'Malaezia',
        calling_code: '60',
        iso: 'MY',
      },
      {
        country: 'Maldive',
        calling_code: '960',
        iso: 'MV',
      },
      {
        country: 'Mongolia',
        calling_code: '976',
        iso: 'MN',
      },
      {
        country: 'Myanmar [Birmania]',
        calling_code: '95',
        iso: 'MM',
      },
      {
        country: 'Nepal',
        calling_code: '977',
        iso: 'NP',
      },
      {
        country: 'Oman',
        calling_code: '968',
        iso: 'OM',
      },
      {
        country: 'Pakistan',
        calling_code: '92',
        iso: 'PK',
      },
      {
        country: 'Qatar',
        calling_code: '974',
        iso: 'QA',
      },
      {
        country: 'Singapore',
        calling_code: '65',
        iso: 'SG',
      },
      {
        country: 'Siria',
        calling_code: '963',
        iso: 'SY',
      },
      {
        country: 'Sri Lanka',
        calling_code: '94',
        iso: 'LK',
      },
      {
        country: 'Tadjikistan',
        calling_code: '992',
        iso: 'TJ',
      },
      {
        country: 'Taiwan',
        calling_code: '886',
        iso: 'TW',
      },
      {
        country: 'Thailanda',
        calling_code: '66',
        iso: 'TH',
      },
      {
        country: 'Timorul de Est',
        calling_code: '670',
        iso: 'TL',
      },
      {
        country: 'Turcia',
        calling_code: '90',
        iso: 'TR',
      },
      {
        country: 'Turkmenistan',
        calling_code: '993',
        iso: 'TM',
      },
      {
        country: 'Uzbekistan',
        calling_code: '998',
        iso: 'UZ',
      },
      {
        country: 'Vietnam',
        calling_code: '84',
        iso: 'VN',
      },
      {
        country: 'Yemen',
        calling_code: '967',
        iso: 'YE',
      },
    ],
  },
  {
    title: 'Africa',
    data: [
      {
        country: 'Africa de Sud',
        calling_code: '27',
        iso: 'ZA',
      },
      {
        country: 'Algeria',
        calling_code: '213',
        iso: 'DZ',
      },
      {
        country: 'Angola',
        calling_code: '244',
        iso: 'AO',
      },
      {
        country: 'Benin',
        calling_code: '229',
        iso: 'BJ',
      },
      {
        country: 'Botswana',
        calling_code: '267',
        iso: 'BW',
      },
      {
        country: 'Burkina Faso',
        calling_code: '226',
        iso: 'BF',
      },
      {
        country: 'Burundi',
        calling_code: '257',
        iso: 'BI',
      },
      {
        country: 'Camerun',
        calling_code: '237',
        iso: 'CM',
      },
      {
        country: 'Cape Verde',
        calling_code: '238',
        iso: 'CV',
      },
      {
        country: 'Ciad',
        calling_code: '235',
        iso: 'TD',
      },
      {
        country: 'Coasta de Fildeș',
        calling_code: '225',
        iso: 'CI',
      },
      {
        country: 'Comoros',
        calling_code: '269',
        iso: 'KM',
      },
      {
        country: 'Congo',
        calling_code: '242',
        iso: 'CG',
      },
      {
        country: 'Djibouti',
        calling_code: '253',
        iso: 'DJ',
      },
      {
        country: 'Egipt',
        calling_code: '20',
        iso: 'EG',
      },
      {
        country: 'Eritreea',
        calling_code: '291',
        iso: 'ER',
      },
      {
        country: 'Eswatini (Swaziland)',
        calling_code: '268',
        iso: 'SZ',
      },
      {
        country: 'Etiopia',
        calling_code: '251',
        iso: 'ET',
      },
      {
        country: 'Gabon',
        calling_code: '241',
        iso: 'GA',
      },
      {
        country: 'Gambia',
        calling_code: '220',
        iso: 'GM',
      },
      {
        country: 'Ghana',
        calling_code: '233',
        iso: 'GH',
      },
      {
        country: 'Guineea',
        calling_code: '224',
        iso: 'GN',
      },
      {
        country: 'Guineea Ecuatorială',
        calling_code: '240',
        iso: 'GQ',
      },
      {
        country: 'Guineea-Bissau',
        calling_code: '245',
        iso: 'GW',
      },
      {
        country: 'Insula Ascension (Regatul Unit)',
        calling_code: '247',
        iso: 'AC',
      },
      {
        country: 'Insulele Canare (Spania)',
        calling_code: '34',
        iso: 'IC',
      },
      {
        country: 'Kenya',
        calling_code: '254',
        iso: 'KE',
      },
      {
        country: 'Lesotho',
        calling_code: '266',
        iso: 'LS',
      },
      {
        country: 'Liberia',
        calling_code: '231',
        iso: 'LR',
      },
      {
        country: 'Libia',
        calling_code: '218',
        iso: 'LY',
      },
      {
        country: 'Madagascar',
        calling_code: '261',
        iso: 'MG',
      },
      {
        country: 'Malawi',
        calling_code: '265',
        iso: 'MW',
      },
      {
        country: 'Mali',
        calling_code: '223',
        iso: 'ML',
      },
      {
        country: 'Maroc',
        calling_code: '212',
        iso: 'MA',
      },
      {
        country: 'Mauritania',
        calling_code: '222',
        iso: 'MR',
      },
      {
        country: 'Mauritius',
        calling_code: '230',
        iso: 'MU',
      },
      {
        country: 'Mayotte (Franța)',
        calling_code: '262',
        iso: 'YT',
      },
      {
        country: 'Mozambic',
        calling_code: '258',
        iso: 'MZ',
      },
      {
        country: 'Namibia',
        calling_code: '264',
        iso: 'NA',
      },
      {
        country: 'Niger',
        calling_code: '227',
        iso: 'NE',
      },
      {
        country: 'Nigeria',
        calling_code: '234',
        iso: 'NG',
      },
      {
        country: 'Republica Centrală Africană',
        calling_code: '236',
        iso: 'CF',
      },
      {
        country: 'Republica Democratică Congo',
        calling_code: '243',
        iso: 'CD',
      },
      {
        country: 'Réunion (Franța)',
        calling_code: '262',
        iso: 'RE',
      },
      {
        country: 'Rwanda',
        calling_code: '250',
        iso: 'RW',
      },
      {
        country: 'Sahara Occidentală',
        calling_code: '212',
        iso: 'EH',
      },
      {
        country: 'São Tomé et Príncipe ',
        calling_code: '239',
        iso: 'ST',
      },
      {
        country: 'Senegal',
        calling_code: '221',
        iso: 'SN',
      },
      {
        country: 'Seychelles',
        calling_code: '248',
        iso: 'SC',
      },
      {
        country: 'Sfânta Elena (Regatul Unit)',
        calling_code: '290',
        iso: 'SH',
      },
      {
        country: 'Sierra Leone',
        calling_code: '232',
        iso: 'SL',
      },
      {
        country: 'Somalia',
        calling_code: '252',
        iso: 'SO',
      },
      {
        country: 'Sudan',
        calling_code: '249',
        iso: 'SD',
      },
      {
        country: 'Sudanul de Sud',
        calling_code: '211',
        iso: 'SS',
      },
      {
        country: 'Tanzania',
        calling_code: '255',
        iso: 'TZ',
      },
      {
        country: 'Togo',
        calling_code: '228',
        iso: 'TG',
      },
      {
        country: 'Tristan da Cunha (Regatul Unit)',
        calling_code: '290',
        iso: 'TA',
      },
      {
        country: 'Tunisia',
        calling_code: '216',
        iso: 'TN',
      },
      {
        country: 'Teritoriile Australe și Antarctice Franceze',
        calling_code: '262',
        iso: 'TF',
      },
      {
        country: 'Uganda',
        calling_code: '256',
        iso: 'UG',
      },
      {
        country: 'Zambia',
        calling_code: '260',
        iso: 'ZM',
      },
      {
        country: 'Zimbabwe',
        calling_code: '263',
        iso: 'ZW',
      },
    ],
  },
  {
    title: 'Australia și Oceania',
    data: [
      {
        country: 'Australia',
        calling_code: '61',
        iso: 'AU',
      },
      {
        country: 'Fiji',
        calling_code: '679',
        iso: 'FJ',
      },
      {
        country: 'Guam (SUA)',
        calling_code: '1',
        iso: 'GU',
      },
      {
        country: 'Insula Crăciunului (Australia)',
        calling_code: '61',
        iso: 'CX',
      },
      {
        country: 'Insula Norfolk',
        calling_code: '672',
        iso: 'NF',
      },
      {
        country: 'Insulele Cocos (Australia)',
        calling_code: '61',
        iso: 'CC',
      },
      {
        country: 'Insulele Cook',
        calling_code: '682',
        iso: 'CK',
      },
      {
        country: 'Insulele Mariane de Nord',
        calling_code: '1',
        iso: 'MP',
      },
      {
        country: 'Insulele Marshall',
        calling_code: '692',
        iso: 'MH',
      },
      {
        country: 'Insulele Pitcairn (Regatul Unit)',
        calling_code: '64',
        iso: 'PN',
      },
      {
        country: 'Insulele Solomon',
        calling_code: '677',
        iso: 'SB',
      },
      {
        country: 'Kiribati',
        calling_code: '686',
        iso: 'KI',
      },
      {
        country: 'Micronezia',
        calling_code: '691',
        iso: 'FM',
      },
      {
        country: 'Nauru',
        calling_code: '674',
        iso: 'NR',
      },
      {
        country: 'Niue',
        calling_code: '683',
        iso: 'NU',
      },
      {
        country: 'Noua Calcedonie (Franța)',
        calling_code: '687',
        iso: 'NC',
      },
      {
        country: 'Noua Zeelandă',
        calling_code: '64',
        iso: 'NZ',
      },
      {
        country: 'Palau',
        calling_code: '680',
        iso: 'PW',
      },
      {
        country: 'Papua Noua Guinee',
        calling_code: '675',
        iso: 'PG',
      },
      {
        country: 'Polinezia Franceză',
        calling_code: '689',
        iso: 'PF',
      },
      {
        country: 'Samoa',
        calling_code: '685',
        iso: 'WS',
      },
      {
        country: 'Samoa Americană',
        calling_code: '1',
        iso: 'AS',
      },
      {
        country: 'Tokelau',
        calling_code: '690',
        iso: 'TK',
      },
      {
        country: 'Tonga',
        calling_code: '676',
        iso: 'TO',
      },
      {
        country: 'Tuvalu',
        calling_code: '688',
        iso: 'TV',
      },
      {
        country: 'Vanuatu',
        calling_code: '678',
        iso: 'VU',
      },
      {
        country: 'Wallis și Futuna (Franța)',
        calling_code: '681',
        iso: 'WF',
      },
    ],
  },
];

export default countriesCrossed;
