const strings = {
  declaratie: 'Statement',
  progressHeaderStep: 'out of 10',
  form2Label: 'Select one ID Type',
  form8Label:
    'Have you experienced one or more of the following symptoms (multiple selection):',
  form9Label:
    "In order to reach the quarantine / isolation address filled in above, I'll use:",
  form9Label2:
    'Fill in the license plate number of the vehicle you are travelling in:',
  da: 'YES',
  nu: 'NO',
  auto: 'Personal vehicle',
  ambulance: 'Ambulance',
  passport: 'Passport',
  card: 'ID\ncard',
  simptom1: 'Fever',
  simptom2: 'Difficulty \nto swallow',
  simptom3: 'Difficulty \nto breathe',
  simptom4: 'Intense cough',
  addSMSCode: 'Please fill in the code received by SMS',
  validationSMSCode: 'SMS verification code',
  save: 'Save',
  dontReceiveTheCode: "Didn't receive the code?",
  resendSMSCod: 'Resend SMS verification \n code',
  telefon: 'Phone',
  validatePhoneNumber: 'Validate phone number',
  validatePhoneNumberInformationLabel:
    'Please fill in a valid phone number, through which you can be contacted while isolated. You will receive an unique code by SMS, which needs to be filled in below.',
  countriesCrossed: 'Countries passed through',
  countriesCrossedDescription:
    'Please select from the list below the countries you have passed thorugh (including layovers). You may select multiple options.',
  languageSelectTitle: 'Please select a language.',
  languageSelectSubtitle: 'Please select preferred language.',
  romana: 'Romanian',
  engleza: 'English',
  placeholderAutomobil: 'Vehicle license plate number',
  seria: 'Series',
  passportNumber: 'No.',
  addPassportInfo: 'Please fill in passport data:',
  addICInfo: 'Please fill in ID Card data:',
  form3Label: 'Country and city you have departed from, date of departure:',
  country: 'Country',
  county: 'City',
  completeDeclaration: 'Please fill in the statement',
  infoLabelBegin:
    'This app is offered by the Government of Romania and it assists with the declaration of entry in Romania at customs points, following the pandemic caused by COVID-19.\n\n',
  infoLabelBold: ' Please fill in the form in this app using real data, ',
  infoLabelEnd:
    'this statement will be checked by the competent authorities and you will be accountable for the provided information.',
  adaugaMembru: 'Add new person',
  nuMaiAdaug: "I won't add anyone else",
  finishScreenFirstLine:
    'Congratulations, you have completed the statement successfully.',
  finishScreenSecondLine:
    'Do you want to add another declaration for a family member travelling with you? ',
  finisScreenThirdLine:
    'Please continue filling the data below, each field which will guide you to complete the statement successfully. In case of minors, the required phone number will belong to the parent / carer.',
  finishScreenCodeLabel: 'Your registry code is:',
  form10Label: 'The itinerary upon entry includes:',
  form10Placeholder:
    'Please fill in some of the cities along the way, separated by comma.',
  form7Label:
    'Have you been in direct contact with persons suffering from infection with the new coronavirus (COVID-19) in the workplace, in your neighbourhood or while visiting medical facilities or other places within the last 14 days?',
  form6FirstQuestion:
    'Have you lived / visited areas where there have been reported cases of persons infected with the new coronavirus (COVID-19)?',
  form6SecondQuestion: 'Have you been hospitalized within the last 3 weeks?',
  form5Label: 'While in Romania, I can be contacted at',
  alertLabel: 'ATTENTION!',
  alertMessage:
    'The filled in phone number must be available throughout the entire isolation period. You will be called at this number by the authorities. \n \nAny omission will be punished according to the law referring to combating contagious diseases.',
  telefonValid: 'Valid phone number',
  email: 'E-mail (optional)',
  form1Label: 'Please fill in your personal data.',
  nume: 'Last Name',
  prenume: 'First Name',
  cnp: 'CNP',
  form4Label: 'In Romania I will self-isolate at the following addresses:',
  judet: 'County',
  localitate: 'City',
  dataSosirii: 'Date of arrival',
  dataPlecarii: 'Date of departure',
  adresaCompleta: 'Complete address',
  urmatorul: 'Next',
  trimite: 'Send statement',
  sfaturiDeCalatorie: 'Trip advice',
  endScreenFirstLine: 'Thank you for your cooperation.',
  endScreenSecondLine:
    'By using the app, we are saving precious time which we are using to protect public health.',
  endScreenThirdLine:
    'Please tell the DSP representative you have used the mobile app to fill in the statement data. In order to be legally binding, the filled in declaration will be printed and signed.',
  data: 'Data',
  transitedCountries: 'Countries you have transited (including layovers):',
  selectCountries: 'Select countries(multiple selection)',
  aceleasiDateAnterioare: 'Are you using same data as previously added member?',
  folosesteDateAnterioare: 'Use previous data',
  completePhoneNumber: 'Please enter a phone number',
  plus: '+',
  ro: 'ro',
  phoneNumberError: 'Please enter a valid phone number.',
  selectCounty: 'Please select a county',
  selectCountry: 'Please select a country',
  seeQR: 'See QR codes',
  back: 'Back',
  search: 'Search for a country',
  cancel: 'Cancel',
  confirmLabel:
    'I confirm that the all the data is real and I will respect the auto-isolation procedure',
  searchForCounty: 'Search for a county',
  clickToSign: 'Click here to sign',
  signatureScreenTitle: 'Draw your signature',
  use: 'Use',
  erase: 'Erase',
  signatureDetails:
    'Pressing on Use, you agree that your signature or the electronic representation of it to be used for the validation of this legal document, like the holographic signature',
  invalidSMSCode: 'Invalid code!\nPlease try again!',
  phoneNumberTitle: 'Phone number validation',
  completeAllFieldsError:
    'All the fields must be completed in order to proceed',
  completeNameError: 'Please write your full name',
  completeCNPErorr: 'Please complete your CNP',
  chooseDocumentTypeError: 'Please choose your one ID type',
  completeDocumentSeriesError: 'Please complete the series of your ID card',
  completeDocumentNumberError: 'Please complete the number of your ID card',
  travellingFromCountryError: 'Please select the country that you come from',
  travellingFromCityError: 'Please specify the city that you come from',
  travellingFromDateError: 'Please select the date at which you left',
  itineraryCountriesError: 'Please select the countries that you crossed',
  cityError: 'Please specify the city where you will isolate yourself',
  countyError: 'Please specify the county where you will isolate yourself',
  arrivalDateError: 'Please select your arrival date to the destination',
  addressError: 'Please specify an address',
  question1Error: 'Please answer the first question',
  question2Error: 'Please answer the second question',
  question3Error: 'Please answer the third question',
  vechicleTypeError: 'Please select a vehicle type',
  registrationNoError: 'Please specify your vehicle registration number',
  backEndError: 'There was an error.\nPlease try again!',
};
export default strings;
