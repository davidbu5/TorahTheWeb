
export function get<T>(key: string): Promise<T> {
    return new Promise<T>((resolve, reject) => {
        chrome.storage.local.get(key, (result) => {
            const value = result ? result[key] as T : null;
            resolve(value);
        });
    });
}

export function set(dataDictionary: { [key: string]: any }): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        chrome.storage.local.set(dataDictionary, () => {
            resolve(true);
        });
    });  
}
