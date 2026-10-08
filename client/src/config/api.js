         export  const apiRequest = async (endpoint, options = {}) => {
                const token = localStorage.getItem("token");

                const response = await fetch(
                    `${import.meta.env.VITE_API_BASE_URL}${endpoint}`,
                    {
                    ...options,
                    headers: {
                        "Content-Type": "application/json",

                        ...(token && {
                        Authorization: `Bearer ${token}`,
                        }),

                        ...options.headers,
                    },
                    }
                );

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(
                    data.message || "Something went wrong"
                    );
                }

                return data;
                };