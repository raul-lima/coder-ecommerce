import { Category } from "../category/Category";
export function Categories({ categories }) {
  return (
    <div>
      {categories.map((category) => {
        return <Category category={category} />;
      })}
    </div>
  );
}
