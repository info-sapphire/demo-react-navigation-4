import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('post.db')

export class DB {
  static init() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS `posts` (id INTEGER PRIMARY KEY NOT NULL, text TEXT NOT NULL, image TEXT, date TEXT, booked INT)',
          [],
          () => resolve(),
          (_, error) => reject(error)
        )
      })
    })
  }

  static getPosts() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM `posts`',
          [],
          (_, { rows: { _array: response } }) => resolve(response),
          (_, error) => reject(error)
        )
      })
    })
  }

  static createPost({ text, date, img }) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `INSERT INTO posts (text, date, booked, image) VALUES (?, ?, ?, ?)`,
          [text, date, 0, img],
          (_, { insertId }) => resolve(insertId),
          (_, error) => reject(error)
        )
      })
    })
  }
}
