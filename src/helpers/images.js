export const toBase64 = (element) => {
    return new Promise(resolve => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(element.files[0]);
    });
}

export const toBlob = (file) => {
    return new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = () => resolve(reader.result);
        reader.onload = () => {
            return reader.result;
            if (reader.result) {
                const blob = new Blob([reader.result], {type: "image/jpeg"});
                const urlCreator = window.URL;
                const imageUrl = urlCreator.createObjectURL(blob);
                return imageUrl
            }
        };

    });
}