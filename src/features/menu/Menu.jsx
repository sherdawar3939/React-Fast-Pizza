import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menue = useLoaderData();
  return (
    <ul className="divide-y-2 divide-stone-200 px-2">
      {menue.map((piazza) => (
        <MenuItem pizza={piazza} key={piazza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
