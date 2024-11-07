import type { ReactElement } from 'react';
import Button from '../../../../../common/design-system/Button';

type Props = {
  removeFromCart: () => void;
};

const RemoveCartButton = ({ removeFromCart }: Props): ReactElement => {
  return <Button onClick={removeFromCart}>Remove from cart</Button>;
};

export default RemoveCartButton;
