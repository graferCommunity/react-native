export const Fetch = async ({ file, method, data, responseType }:
    { file: string; method: string; data?: any; responseType?: string }): Promise<any> => {
    try {
        const response = await fetch('http://172.20.10.2/copyMi/' + file, {
            method: method,
            body: data ? data : null,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (responseType === "JSON") {
            return await response.json();
        } else {
            return await response.text();
        }

    } catch (error) {
        throw error
    }
}