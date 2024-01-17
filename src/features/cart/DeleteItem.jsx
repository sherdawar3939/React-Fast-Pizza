import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItemCart } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Button type="small" onClick={() => dispatch(deleteItemCart(pizzaId))}>
        Delete
      </Button>
    </div>
  );
}

export default DeleteItem;
