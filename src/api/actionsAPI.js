import {prepareImage} from "../helpers/images";

const contentful = require('contentful-management')

const methods = contentful.createClient({
    accessToken: process.env.REACT_APP_API_KEY,
})

export const uploadByFile = async (file) => {
    const resultFile = await prepareImage(file);
    return await methods.getSpace(process.env.REACT_APP_SPACE_ID)
        .then((space) => space.getEnvironment('master'))
        .then((environment) => environment.createAssetFromFiles({
            fields: {
                title: {
                    'en-US': file.name
                },
                description: {
                    'en-US': file.name
                },
                file: {
                    'en-US': {
                        contentType: file.type,
                        fileName: file.name,
                        file: resultFile
                    }
                }
            }
        })).then(res => res.processForLocale("en-US", {
            processingCheckWait: 2000
        }))
        .then(res => res.publish()).then(res => ({
            success: 1,
            file: {
                url: res.fields.file["en-US"].url
            }
        }))
}

export const uploadByUrl = (link) => {
    return methods.getSpace(process.env.REACT_APP_SPACE_ID)
        .then((space) => space.getEnvironment('master'))
        .then((environment) => environment.createAsset({
            fields: {
                title: {
                    'en-US': 'link title'
                },
                description: {
                    'en-US': 'desc for link'
                },
                file: {
                    'en-US': {
                        contentType: 'image/jpeg',
                        fileName: 'example.jpeg',
                        upload: link
                    }
                }
            }
        }))
        .then((asset) => asset.processForAllLocales())
        .then(res => ({
            success: 1,
            file: {
                url: res.fields.file["en-US"].url
            }
        }))
        .catch(console.error)
}

export const getData = () => {
    // console.log("hello")
    // // const res = methods.getSpaces();
    // // console.log(res)
    // methods.getSpace(process.env.REACT_APP_SPACE_ID).then(async (space) => {
    //     // console.log(space)
    //     // const res = await space.getEnvironments()
    //     // console.log(res)
    //     space.getEnvironment('master').then(async (environment) => {
    //        const res = await environment.getContentTypes();
    //         console.log(res)
    //
    //         environment.getEntries().then((entries) => {
    //             // console.log(entries)
    //         })
    //     })
    // })
}

export const sendData = async ({title, text}) => {
    return await methods.getSpace(process.env.REACT_APP_SPACE_ID)
        .then((space) => space.getEnvironment('master'))
        .then((environment) => environment.createEntry('test', {
            fields: {
                title: {
                    'en-US': title
                },
                text: {
                    'en-US': "text"
                    // 'en-US': `![test_preview](${imageLink.url}) ${text}`
                }
            }
        }))
        .then((entry) => console.log(entry))
        .catch(console.error)
}

export const uploadFile = async (file) => {
    const res = await methods.getSpace(process.env.REACT_APP_SPACE_ID)
        .then((space) => space.getEnvironment('master'))
        .then((environment) => environment.createAssetFromFiles({
            fields: {
                title: {
                    'en-US': file.title
                },
                description: {
                    'en-US': file.description
                },
                file: {
                    'en-US': {
                        contentType: file.type, //'image/jpg',
                        fileName: file.name, //"Hello",
                        file: file.body //binary file
                    }
                }
            }
        })).then(res => res.processForLocale("en-US", {
            processingCheckWait: 2000
        })).then(res => res.publish());

}