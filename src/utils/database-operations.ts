import { Menu } from '@/types'
import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('little_lemon')

export async function createTable() {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'create table if not exists menuitems (id integer primary key not null, name text, price integer, category text, description text, image text);',
                [],
                () => {
                    console.log('Table created OK')
                    resolve(true)
                },
                () => {
                    console.log('Table created ERROR')
                    reject(false)
                    return false
                }
            )
        }, reject)
    })
}

export async function getMenuItems(): Promise<Menu[]> {
    return new Promise((resolve) => {
        db.transaction((tx) => {
            tx.executeSql('select * from menuitems', [], (_, { rows }) => {
                resolve(rows._array)
            })
        })
    })
}

export function saveMenuItems(menuItems: Menu[]) {
    const values = Array.from(
        { length: menuItems.length },
        () => '(?, ?, ?, ?, ?)'
    ).join()
    // console.log("Value: ", values);
    const valuesToInsert = menuItems.map((item) => Object.values(item)).flat()
    // console.log(valuesToInsert);
    db.transaction((tx) => {
        tx.executeSql(
            `insert into menuitems (name, price, description, image, category) values ${values}`,
            valuesToInsert,
            () => console.log('Insert OK'),
            (e) => {
                console.log('Insert ERROR: ', e)
                return false
            }
        )
    })
}

export async function filterByQueryAndCategories(
    query: string,
    activeCategories: string[]
): Promise<Menu[]> {
    const categoryPlaceHolder = activeCategories.map(() => '?').join(', ')

    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `SELECT * FROM menuitems WHERE name LIKE ? AND category IN (${categoryPlaceHolder})`,
                [`%${query}%`, ...activeCategories],
                (_, { rows }) => {
                    console.log('OK Filter DB')
                    resolve(rows._array)
                },
                (_, error) => {
                    console.log('ERROR Filter DB')
                    reject(error)
                    return false
                }
            )
        })
    })
}
