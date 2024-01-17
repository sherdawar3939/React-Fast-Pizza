import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemCart, increaseItemCart } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-2">
      <Button type="round" onClick={() => dispatch(decreaseItemCart(pizzaId))}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(increaseItemCart(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
