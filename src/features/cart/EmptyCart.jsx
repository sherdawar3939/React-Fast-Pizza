import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-7 font-semibold text-stone-500">
        🥰 Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
