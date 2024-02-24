import Button from "./Button.js";

export default function Card({ id, rgbvalue, ...otherProps }) {
  return (
    <div style={{ backgroundColor: rgbvalue }}>
      <h1>Carte numéro : {id}</h1>
      <Button {...otherProps} />
    </div>
  );
}
