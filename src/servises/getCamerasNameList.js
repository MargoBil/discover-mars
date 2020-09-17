export const getCameraNamesList = (data) => {
    const listNames = data.map(item => item.camera.name);
    return [...new Set(listNames)];
}

