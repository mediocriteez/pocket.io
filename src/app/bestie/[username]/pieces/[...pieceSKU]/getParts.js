"use server"

export const getParts = async () => {
    try {
        const res = await fetch('http://67.205.179.212/api/part/', {
            headers: {
                Authorization: `Token ${process.env.INVENTREE}`
            }
        })

        const parts = await res.json()
        console.log(parts)
    } catch (error) {
        console.error(error)
    }
    
}

export const createPart = async () => {
    const response = await fetch('http://67.205.179.212/api/part/', {
        method: 'POST',
        headers: {
          'Authorization': `Token ${process.env.INVENTREE}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Test Part',
          description: 'This is a test',
          IPN: 'TP-002',
          active: true,
        }),
      });

      const result = await response.json();
    console.log(result);
}

export const updatePart = async () => {
    const response = await fetch('http://67.205.179.212/api/part/2/', {
        method: 'PATCH',
        headers: {
          'Authorization': `Token ${process.env.INVENTREE}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          in_stock: 3,
        }),
      });

      const result = await response.json();
    console.log(result);
}