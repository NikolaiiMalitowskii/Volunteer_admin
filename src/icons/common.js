import sprite from './commonSprite.svg';

const iconContainer = {
    file: '#icon-file-text2',
    fileZip:'#icon-file-zip',
    search: '#icon-search',
    plus: `#icon-plus`,
    save: `#icon-floppy-disk`,
    bin: '#icon-bin',
    edit: '#icon-pencil',
    reset: '#icon-loop2',
    close: '#icon-cross',
    undo: '#icon-undo2',
    download: '#icon-download',
    database: '#icon-database',
    users: '#icon-users',
    user: '#icon-user',
    userPlus: '#icon-user-plus',
    moderator: '#icon-user-tie',
    permission: '#icon-key',
    books: '#icon-books',
    book: '#icon-book',
    bookmarks: '#icon-bookmarks',
    bookmark: '#icon-bookmark'
}

export const getEditorIcon = (name) => sprite + iconContainer[name]