import Button from '../../../../../common/design-system/Button';

type Props = {
  addToCart: () => void;
};
const AddCartButton = ({ addToCart }: Props) => {
  return (
    <Button variant="contained" onClick={addToCart}>
      Ajouter au panier
    </Button>
  );
};
export default AddCartButton;
