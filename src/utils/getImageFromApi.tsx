interface Images {
    images: any,
    size: number
}
export default function getImageFromAPi(props: Images):string {
  const { size, images } = props;
  const image = images[size];
  return image["#text"];
}
