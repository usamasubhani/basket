import { ProductItem } from '../global'

const INITIAL_STATE : ProductItem[] = [
    {
        id: '123',
        title: 'Black Seude',
        description: 'Welcome to the dark side',
        imageUrl: '/img/1.jpg',
        price: 399
    },
    {
        id: '456',
        title: 'Mule',
        description:
          'Back to the future',
          imageUrl: '/img/4.jpg',
        price: 499
    },
    {
        id: '789',
        title: 'Chelsea',
        description: 'God bless Carl Marx',
        imageUrl: '/img/8.jpg',
        price: 799
    }
]

export { INITIAL_STATE }