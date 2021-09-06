const rates = {
    'AED': 4.358352,
    'AFN': 103.098102,
    'ALL': 121.710324,
    'AMD': 585.528228,
    'ANG': 2.12984,
    'AOA': 751.072119,
    'ARS': 116.12703,
    'AUD': 1.596183,
    'AWG': 2.136344,
    'AZN': 2.024524,
    'BAM': 1.955835,
    'BBD': 2.395637,
    'BDT': 101.086691,
    'BGN': 1.952537,
    'BHD': 0.447161,
    'BIF': 2355.336271,
    'BMD': 1.186528,
    'BND': 1.592871,
    'BOB': 8.180825,
    'BRL': 6.177305,
    'BSD': 1.186518,
    'BTC': 0.000023086962,
    'BTN': 86.660405,
    'BWP': 13.002699,
    'BYN': 2.988308,
    'BYR': 23255.951922,
    'BZD': 2.391637,
    'CAD': 1.488273,
    'CDF': 2369.496459,
    'CHF': 1.087115,
    'CLF': 0.033021,
    'CLP': 911.170334,
    'CNY': 7.662594,
    'COP': 4508.669003,
    'CRC': 740.681336,
    'CUC': 1.186528,
    'CUP': 31.442996,
    'CVE': 110.265294,
    'CZK': 25.395234,
    'DJF': 211.220562,
    'DKK': 7.435818,
    'DOP': 67.420441,
    'DZD': 161.225835,
    'EGP': 18.615476,
    'ERN': 17.803633,
    'ETB': 54.103544,
    'EUR': 1,
    'FJD': 2.455638,
    'FKP': 0.857389,
    'GBP': 0.857249,
    'GEL': 3.701754,
    'GGP': 0.857389,
    'GHS': 7.190019,
    'GIP': 0.857389,
    'GMD': 60.726923,
    'GNF': 11613.830923,
    'GTQ': 9.185241,
    'GYD': 248.233799,
    'HKD': 9.223655,
    'HNL': 28.434873,
    'HRK': 7.489481,
    'HTG': 114.527544,
    'HUF': 347.01195,
    'IDR': 16882.041303,
    'ILS': 3.796961,
    'IMP': 0.857389,
    'INR': 86.722809,
    'IQD': 1731.081904,
    'IRR': 50059.623519,
    'ISK': 150.617689,
    'JEP': 0.857389,
    'JMD': 178.860782,
    'JOD': 0.841274,
    'JPY': 130.321727,
    'KES': 130.577659,
    'KGS': 100.577011,
    'KHR': 4843.049627,
    'KMF': 497.154986,
    'KPW': 1067.875543,
    'KRW': 1372.813734,
    'KWD': 0.356647,
    'KYD': 0.988865,
    'KZT': 504.551343,
    'LAK': 11367.390758,
    'LBP': 1794.027457,
    'LKR': 237.591231,
    'LRD': 203.905021,
    'LSL': 17.703073,
    'LTL': 3.503509,
    'LVL': 0.717719,
    'LYD': 5.346214,
    'MAD': 10.588528,
    'MDL': 20.905756,
    'MGA': 4649.212379,
    'MKD': 61.53924,
    'MMK': 1952.877365,
    'MNT': 3382.674485,
    'MOP': 9.500125,
    'MRO': 423.590349,
    'MUR': 50.23761,
    'MVR': 18.332311,
    'MWK': 964.025567,
    'MXN': 23.626031,
    'MYR': 4.921679,
    'MZN': 75.670816,
    'NAD': 17.703205,
    'NGN': 488.529261,
    'NIO': 41.663638,
    'NOK': 10.281857,
    'NPR': 138.654695,
    'NZD': 1.662332,
    'OMR': 0.456138,
    'PAB': 1.186518,
    'PEN': 4.859574,
    'PGK': 4.219222,
    'PHP': 59.271234,
    'PKR': 198.259692,
    'PLN': 4.521971,
    'PYG': 8209.940807,
    'QAR': 4.320113,
    'RON': 4.947942,
    'RSD': 117.580313,
    'RUB': 86.586296,
    'RWF': 1197.718331,
    'SAR': 4.449912,
    'SBD': 9.561121,
    'SCR': 15.261899,
    'SDG': 526.228048,
    'SEK': 10.17697,
    'SGD': 1.592819,
    'SHP': 1.63432,
    'SLL': 12250.903464,
    'SOS': 694.119152,
    'SRD': 25.176933,
    'STD': 24558.737306,
    'SVC': 10.382159,
    'SYP': 1492.14693,
    'SZL': 16.916245,
    'THB': 38.524248,
    'TJS': 13.454036,
    'TMT': 4.164714,
    'TND': 3.30982,
    'TOP': 2.656577,
    'TRY': 9.817811,
    'TTD': 8.057523,
    'TWD': 32.716731,
    'TZS': 2751.481665,
    'UAH': 31.765685,
    'UGX': 4180.01113,
    'USD': 1.186528,
    'UYU': 50.541329,
    'UZS': 12677.603756,
    'VEF': 253715580109.12842,
    'VND': 27006.502885,
    'VUV': 131.57046,
    'WST': 3.038419,
    'XAF': 655.944926,
    'XAG': 0.048097,
    'XAU': 0.000651,
    'XCD': 3.206652,
    'XDR': 0.833685,
    'XOF': 655.958747,
    'XPF': 120.883186,
    'YER': 297.640682,
    'ZAR': 16.920152,
    'ZMK': 10680.173747,
    'ZMW': 19.110051,
    'ZWL': 382.061583
}