export const setDefaultImage = (imageUrl) => {
  return (imageUrl) || `https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/jio-bharat-phone-044350-16x9_0.jpg?VersionId=8.Nbcu3.1Pz7oLPdT1YodmLng70JcLgi`;
}

export const capitalizeFirstLetter = (inputCategory) => {
  return inputCategory[0].toUpperCase() + inputCategory.substr(1)
}