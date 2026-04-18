import styles from './Content.module.scss';
import Recipe from './Recipe';
import { data } from '../data/recipe.js';
import { MagnifyingGlassCircleIcon } from "@heroicons/react/16/solid";

function Content() {

type RecipeType = {
  _id: string;
  title: string;
  image: string;
};

  const recipes: RecipeType[] = data;

  return (
    <div className="flex-fill container p-20">
      <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
      <div className={`card d-flex flex-column p-20 ${styles.contentCard} br`}>

        <div className='d-flex flex-row justify-content-center align-item-center'>
          <MagnifyingGlassCircleIcon/>
          <input type="text" placeholder="Rechercher" />
        </div>
        <div className={styles.grid}>
          {recipes.map((r) => (
            <Recipe key={r._id} title={r.title} image={r.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
