import fetch from 'node-fetch';

export async function rdump(action, data) {
    const privateKey = process.env.RDUMP_PRIVATE_KEY;

    if (!privateKey) {
        throw new Error('RDUMP_PRIVATE_KEY environment variable is not set.');
    }
    
    try {
        const response = await fetch('https://rdump.dev/api/dump', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': privateKey,
            },
            body: JSON.stringify({
                action: action,
                dump: JSON.stringify(data)
            })
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Failed to send dump:', error.message);
        throw error;
    }
}