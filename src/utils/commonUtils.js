export const trimTitleNDescription = (title, description) => {
  const shortTitle = title ? title.slice(0, 40) : "";
  const shortDescription = description ? description.slice(0, 80) : "";
  return {
    shortTitle,
    shortDescription
  }
}

export const setDefaultImage = (imageUrl) => {
  return (imageUrl) ? imageUrl: `https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/jio-bharat-phone-044350-16x9_0.jpg?VersionId=8.Nbcu3.1Pz7oLPdT1YodmLng70JcLgi`;
}
