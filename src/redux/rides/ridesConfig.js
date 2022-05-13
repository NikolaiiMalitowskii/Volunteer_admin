
import {ridesErrorSelector, ridesLoaderSelector} from "./ridesSelectors";
import { setRidesError} from "./ridesActions";
import {createRideOperation, getRidesListOperation} from "./ridesOperations";

export const ridesConfig = {
    collectionName:'rides',
    getList: getRidesListOperation,
    addItemOperation: createRideOperation,
    error: ridesErrorSelector,
    setError: setRidesError,
    isLoading: ridesLoaderSelector,
    itemDetails: {
        header: {
            title: 'ride details',
            icon: 'ride',
        },
        fields: [
            // {
            //     alias: 'email',
            //     title: 'email',
            //     type: 'String'
            // },
            // {
            //     alias: '_id',
            //     title: 'User ID',
            //     type: 'String'
            // },
            // {
            //     alias: 'permissions',
            //     title: 'Permissions',
            //     icon: 'bookmarks',
            //     type: 'Array',
            //     itemTitle: 'Permission',
            //     itemIcon: 'bookmark',
            //     itemCollections: 'sources'
            // },
            // {
            //     alias: 'materials',
            //     title: 'Materials',
            //     icon: 'books',
            //     type: 'Array',
            //     itemTitle: 'Material'
            // }
        ]
    }
}
