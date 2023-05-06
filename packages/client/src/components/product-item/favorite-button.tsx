import { FavoritesIcon } from 'src/icons'
import { IProduct } from 'src/types'

interface Props {
  productId: number
  favorites: IProduct[] | undefined
}

export const FavoriteButton: React.FC<Props> = ({ productId, favorites }) => {
  const isExists = favorites?.some((el) => el.id === productId)

  return (
    <div>
      <FavoritesIcon width={20} height={20} active={isExists} />
      {/* <Button
        color="favorites"
        style={{ width: '100%', color: white }}
        onClick={() => mutate()}> */}
      {/* {isExists ? 'Remove from favorites' : 'Add to favorites'} */}
      {/* </Button> */}
    </div>
  )
}
