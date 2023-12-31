import { useState } from 'react';

import './styles/App.css';

import { v1 } from 'uuid';

import { Tabs } from './components/Tabs/Tabs';
import { AnimeInputModelType, AnimeListsType, ListType } from './types';

const App = () => {
    const animeListId_1 = v1();
    const animeListId_2 = v1();
    const animeListId_3 = v1();
    const animeListId_4 = v1();
    const animeListId_5 = v1();

    const [lists, setLists] = useState<Array<ListType>>([
        { id: animeListId_1, title: 'Смотрю' },
        { id: animeListId_2, title: 'В планах' },
        { id: animeListId_3, title: 'Просмотрено' },
        { id: animeListId_4, title: 'Брошено' },
        { id: animeListId_5, title: 'Любимое' },
    ]);

    const [animeLists, setAnimeLists] = useState<AnimeListsType>({
        [animeListId_1]: [
            {
                id: v1(),
                title: 'Ван Пис',
                image: 'https://animego.org/upload/anime/images/5ab170d351312102639546.jpg',
                type: 'TV',
                episodes: 1064,
                rating: 9.9,
                created_at: new Date(1999, 9, 20),
            },
        ],
        [animeListId_2]: [
            {
                id: v1(),
                title: 'Адский рай',
                image: 'https://animego.org/upload/anime/images/642af6af9a84d688879557.jpg',
                type: 'TV',
                episodes: 13,
                rating: 9.5,
                created_at: new Date(2023, 3, 1),
            },
            {
                id: v1(),
                title: 'Звёздное дитя',
                image: 'https://animego.org/upload/anime/images/643a64b683ee2551259270.jpg',
                type: 'TV',
                episodes: 11,
                rating: 9.5,
                created_at: new Date(2023, 3, 12),
            },
            {
                id: v1(),
                title: 'Великая небесная стена',
                image: 'https://animego.org/upload/anime/images/642af6e1d1dd9162767676.jpg',
                type: 'TV',
                episodes: 13,
                rating: 9.3,
                created_at: new Date(2023, 3, 1),
            },
        ],
        [animeListId_3]: [
            {
                id: v1(),
                title: 'Как и ожидал, моя школьная романтическая жизнь не удалась 1',
                image: 'https://animego.org/upload/anime/images/5cee3479b7b2d092883628.jpg',
                type: 'TV',
                episodes: 13,
                rating: 8.8,
                created_at: new Date(2013, 3, 5),
            },
            {
                id: v1(),
                title: 'Как и ожидалось, моя школьная романтическая жизнь не удалась OVA',
                image: 'https://animego.org/upload/anime/images/5cee35064c2cf322380979.jpg',
                type: 'OVA',
                episodes: 1,
                rating: 8.7,
                created_at: new Date(2013, 8, 19),
            },
            {
                id: v1(),
                title: 'Как и ожидал, моя школьная романтическая жизнь не удалась 2',
                image: 'https://animego.org/upload/anime/images/5cee359f1275b984802714.jpg',
                type: 'TV',
                episodes: 13,
                rating: 8.8,
                created_at: new Date(2015, 3, 3),
            },
            {
                id: v1(),
                title: 'Как и ожидалось, моя школьная романтическая жизнь не удалась 2 OVA',
                image: 'https://animego.org/upload/anime/images/5cee36ea57560424258562.jpg',
                type: 'OVA',
                episodes: 1,
                rating: 8.9,
                created_at: new Date(2015, 9, 27),
            },
            {
                id: v1(),
                title: 'Как и ожидал, моя школьная романтическая жизнь не удалась 3',
                image: 'https://animego.org/upload/anime/images/5f076f777b681319703859.jpg',
                type: 'TV',
                episodes: 12,
                rating: 9.1,
                created_at: new Date(2020, 6, 10),
            },
            {
                id: v1(),
                title: 'Как и ожидалось, моя школьная романтическая жизнь не удалась 3 OVA',
                image: 'https://animego.org/upload/anime/images/646f1ef8bc753267367728.jpg',
                type: 'OVA',
                episodes: 1,
                rating: 8.7,
                created_at: new Date(2023, 3, 27),
            },
        ],
        [animeListId_4]: [
            {
                id: v1(),
                title: 'Пламенная бригада пожарных',
                image: 'https://animego.org/upload/anime/images/5d8f871a5e757670575093.jpg',
                type: 'TV',
                episodes: 24,
                rating: 9.1,
                created_at: new Date(2019, 6, 6),
            },
        ],
        [animeListId_5]: [],
    });

    const addAnime = (listId: string, inputs: AnimeInputModelType) => {
        setAnimeLists({
            ...animeLists,
            [listId]: [
                ...animeLists[listId],
                {
                    id: v1(),
                    created_at: new Date(),
                    ...inputs,
                },
            ],
        });
    };

    return (
        <>
            <Tabs lists={lists} animeLists={animeLists} addAnime={addAnime} />
        </>
    );
};

export default App;
